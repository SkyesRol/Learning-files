import { useState } from 'react'
import PictureCard from './components/PictureCard'
// uploadImg 太长了 -> generateAudio 模块化 -> 复用 -> lib
import {generateAudio} from './lib/audio.js'
import './App.css'

function App() {
  // es6 字符串模板 支持多行
  const picPrompt = `
  分析图片内容，找出最能描述图片的一个英文单词，尽量选择更简单的A1~A2的词汇。
  返回JSON 数据：
  {
  "image_description":"图片描述",
  "representative_word":"图片代表的英文单词",
  "example_sentence":"结合英文单词和图片描述，给出一个简单的例句"
  "explanation":"结合图片解释英文单词，段落以'Look at...'开头，将段落分句，每一句单独一行，解释的最后给一个日常生活有关的问句"
  "explanation_replies":["根据explanation给出的回复1","根据explanation给出的回复2"]
  }
  `
  // 持有数据状态
  const [word,setWord] = useState('上传图片')
  const [sentence,setSentence] = useState('')
  const [explanation,setExplanation] = useState([])
  const [audio,setAudio] = useState('')
  // JSX react 优势  方便写HTML模板
  const uploadImage = async (imgData)=>{
    //console.log(imgData,'From Father');
    setWord('Uploading,Analyzing')
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions';
    const headers = {
      Authorization:`Bearer ${import.meta.env.VITE_KIMI_API_KEY}`,
      'Content-Type':'application/json',
    }
    const response = await fetch(endpoint,{
      method:'POST',
      headers:headers,
      body: JSON.stringify({
        model:'moonshot-v1-8k-vision-preview',
        messages:[{
          role:'user',
          content:[
            {
              type:'image_url', // base64 图片
              image_url:{'url':imgData}
            },
            {
              type:'text',
              text: picPrompt
            }
                  ]
        }]
      })
    })
    const data = await response.json();
    console.log(data);
    const replyData = JSON.parse(data.choices[0].message.content)
    setWord(replyData.representative_word);
    setSentence(replyData.example_sentence)
    setExplanation(replyData.explanation)
    const audioUrl =await generateAudio(replyData.example_sentence)

  }
 
  return (
    <div className='container'>
      {/* 自定义组件，子组件 */}
      {/* 为什么有组件？ html+css+js全部封装成一个功能模块，组件化，可以复用 */}
      {/* Dom树-》组件树 */}
      {/* props */}
      <PictureCard
      uploadImage = {uploadImage}
      word = {word}
      audio={audio}
      />
      <div className="output">
        <div>{sentence}</div>
        <div>{explanation}</div>
      </div>
    </div>
  )
}

export default App
