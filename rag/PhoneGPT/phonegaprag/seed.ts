// supabase 去做向量化的知识库数据
import { createOpenAI } from "@ai-sdk/openai";
// langchain  loader 是 RAG的基础功能 txt,pdf,excel....
// 加载网页内容
import {
    PuppeteerWebBaseLoader
} from '@langchain/community/document_loaders/web/puppeteer';
import {
    RecursiveCharacterTextSplitter // 递归
} from 'langchain/text_splitter';
import {
    embed  // 向量嵌入
} from 'ai'
import {
    config
} from 'dotenv'
import {
    createClient
} from '@supabase/supabase-js'
config();
console.log('开始向量化知识库数据');
const supabase = createClient(
    process.env.SUPABASE_URL ?? "",
    process.env.SUPABASE_KEY ?? "",
)
const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_API_BASE_URL,
})

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 512, // 切割的长度 512的字符  这些内容大约能包含一个比较独立的语义
    chunkOverlap: 100, // 切割的重叠长度  比如有一段文字 1000个字符，切割成2段，每段512个字符，重叠100个字符 0-512  412- 924 824-1000
});

const scrapePage = async (url: string): Promise<string> => {
    const loader = new PuppeteerWebBaseLoader(url, {
        launchOptions: {
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            headless: true,

        },
        gotoOptions: {
            waitUntil: 'domcontentloaded',
        },
        evaluate: async (page, browser) => {
            const result = await page.evaluate(() => document.body.innerHTML);
            await browser.close();
            return result;
        }
    });
    // gm 正则修饰符
    // ^在[^]表示不是> 中的字符
    return (await loader.scrape()).replace(/<[^>]*>?/gm, '');
}
const loadData = async (webpages: string[]) => {
    for (const url of webpages) {
        const content = await scrapePage(url);
        //console.log(content);
        const chunks = await splitter.splitText(content);
        //console.log(chunks, 'after splitting');
        for (const chunk of chunks) {
            const embeddingResult = await embed({
                model: openai.embedding('text-embedding-3-small'),
                value: chunk
            })
            //console.log(embeddingResult);
            // 确保向量数据是正确的数组格式
            const error = await supabase.from('chunks').insert({
                content: chunk,
                vector: embeddingResult.embedding,
                url: url,
            })
            console.log(error, ' from error');
            // console.log(embeddingResult.embedding, ' from embeddingResult.embedding');
            // console.log(embeddingResult, ' from embeddingResult');


        }
        console.log('Insert complete');

    }
}

// 维护一个知识库，知识库的来源可配置
loadData([
    "https://en.wikipedia.org/wiki/Samsung_Galaxy_S25",
    "https://en.wikipedia.org/wiki/Samsung_Galaxy_S24",
    "https://en.wikipedia.org/wiki/IPhone_16",
    "https://en.wikipedia.org/wiki/IPhone_16_Pro",
    "https://en.wikipedia.org/wiki/IPhone_15",
    "https://en.wikipedia.org/wiki/IPhone_15_Pro",
]);