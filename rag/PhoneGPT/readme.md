# phoneGPT

- chatbot
    组件、tailwindcss、messages的渲染
    AI streaming 复杂 有无东西可以封装？
    大模型选择
- 专业领域的 chatbot
    RAG 手机知识库 检索增强生成
    - 知识库（爬虫）
    - 向量数据库 supabase（支持向量）

## 项目中用到的技术


- RAG 检索增强生成
    - embedding 基于openai的embedding的库  向量化
    - 相似度 cosine 是否接近1 做一个相似度的倒序排序
    - 存储到supabase数据库
### package.json

- ai (是一个package)

The AI SDK is a TypeScript toolkit designed to help you build AI-powered applications using popular frameworks like Next.js, React, Svelte, Vue and runtimes like Node.js.

封装了LLM的调用
@ai-sdk/openai

- supabase
baas Backend as Service

Postgres 支持向量数据库

- langchain

LangChain 是一个用于构建 AI 应用的框架，它连接大模型、数据源和工具，简化了从提示工程到链式调用、记忆管理和代理决策的开发流程。

@langchain/community 社区提供的工具（爬虫）
@langchain/core 核心模块

- dotenv
- puppeteer 无头浏览器
Puppeteer 是一个 Node.js 库，用于控制无头浏览器（如 Chrome），可自动化网页操作，如截图、爬取数据、测试交互等。

- lucide-react 是一个轻量的、开源的 React 图标库
- react-markdown 支持渲染markdown


## Next.js
- layout metadata
    SEO


## tailwindcss

- max-w-3xl
    响应式的技巧
    max-w-3xl
    48rem(适配) 3xl 768px ipad的竖着拿的尺寸   

    {/* max-w 最大宽度 xl = 36rem = 576px 
      2xl = 42rem = 672px 
      3xl = 48rem = 768px */}

    是一个移动设备的时候(phone,ipad) width = 100% =100vw
    PC端  768px mx-auto 居中 
    mx = margin-left + margin-right（x 轴方向的外边距）
    auto = 自动计算外边距，使元素居中
    Mobile first
- use client
    "use client"; 是 Next.js 中的指令，用于标记一个组件为客户端组件，使其可以使用 React 的交互功能（如 useState、useEffect）和客户端特有的逻辑。

- max-h-[80vh]
    在 Tailwind CSS 中，[] 表示任意值（Arbitrary Value），允许你直接写入自定义的 CSS 值（如 80vh），会被转换为对应的内联样式，实现灵活布局。


- ml-auto 在 Flexbox 中将元素推到最右侧






## typescript
- 组件的props 类型定义


## 前端部分的亮点
- @ai-sdk/react
    hooks 封装chatLLM的各种功能，如消息列表、模型切换、流式输出等。
- ai-sdk/react 对chatbot 响应式业务的封装 一行代码完成流式输出
    useChat hook
- react-markdown ai响应 markdown是主要的格式
   -  #<img> ![]() 等等等
- tailwindcss 适配
- react组件划分和TS的类型约束
- shadcn 组件库 按需加载，定制性强
- lucide-react 图标库
- useChat 对hooks的理解 响应式业务的封装
## 后端亮点
- ai streamText
- result.toDataStreamResponse() 将 streamText 生成的流式结果转换为一个可被前端消费的 Response 对象，支持以数据流形式传输 AI 输出，实现逐字显示等实时效果。
- 爬虫脚本
    - seed 脚本任务
    npm run seed
    填充知识库
- seed.ts 编写这个脚本
   ts 不能直接运行
   ts-node + typescript 可以直接运行
   先解析成js，再运行

- langchain Agent开发框架
- coze  promptTemplate 记忆-MessageMemory Community
- 正则表达式替换html标签
- vercel 的 AI 版图
    - next.js 
    - ai-sdk
    - js 的云端运行环境
    - AI 编辑器 v0 bolt
    ai-sdk/react 流式输出 -> prompt -> embedding

- 如何将数据存到数据库进行RAG？

    网页 (wikipedia) -> langchain/community+puppeteer（爬取） ->   
    
    langchain提供的分块机制(chunks? 段落) -> embedding -> supabase
    
        -> supabase 查询



## 遇到的问题
- ai-sdk 检索的时候， LLM给老版本代码，调试出了些问题，MCP可以解决这个问题

- ts-node 编译时不支持esm
    在tsconfig.json (ts 配置文件)中添加
    "compilerOptions": {
        "module": "commonjs"
    }
    支持ts-node commonjs

- rpc调用
    在supabase中 调用一个函数
    
    首先在supabase安装一个插件：
    create extension vector
    with schema extensions;

    建表：
    
    CREATE TABLE public.chunks (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    content text null,
    vector extensions.vector null,
    url text null,
    date_updated timestamp without time zone DEFAULT now(),
    CONSTRAINT chunks_pkey PRIMARY KEY (id)
  );












