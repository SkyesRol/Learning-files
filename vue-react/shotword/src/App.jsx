import { useState } from 'react'
import PictureCard from './components/PictureCard'
import './App.css'
import { use } from 'react';
import {generateAudio} from './lib/audio'
function App() {
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
        // 上传图片的状态
        const [word,setWord] = useState('Please upload Pictures');
        // 例句
        const [sentence,setSentence] = useState('')
        const [audio,setAudio] = useState('')
        const [explanations,setExplanations] = useState([])
        const [expReply,setExpReply] = useState([])
        // 详细内容展开
        const [detailExpand,setDetailExpand] = useState(false);
        const [imgPreview,setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png')
        
        const uploadImg = async(imageData)=>{
              setImgPreview(imageData);
              setWord('Uploading,Analyzing')
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions';
    const headers = {
      Authorization:`Bearer ${import.meta.env.VITE_KIMI_API_KEY}`,
      'Content-Type':'application/json',
    }
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        model: 'moonshot-v1-8k-vision-preview',
        messages: [ 
          { 
            role: 'user', 
            content: [
              { 
                type: "image_url", 
                image_url: { "url": imageData, }, 
              }, 
              { type: "text", text: picPrompt, 

              }] 
            }],
            stream: false,
        })
    })
    const data = await response.json();
    const replyData = JSON.parse(data.choices[0].message.content)
    //console.log(replyData);
    setWord(replyData.representative_word);
    setSentence(replyData.example_sentence);
    setExplanations(replyData.explanation.split('\n'))
    setExpReply(replyData.explanation_replies)
    // url -> audio 一直都在
    // base64 资源 比较小 -》 atob -> uint8Array -> blob -> url.createObjectURL
    // -> 临时地址->audio 展示-> audio播放
    const audioUrl = await generateAudio(replyData.example_sentence);
    console.log(audioUrl,'app');
    setAudio(audioUrl);
        }
  return (
    <div className='container'>
      <PictureCard
        audio={audio}
        word={word}
        uploadImg={uploadImg}
      />
      <div className='output'>
        <div>{sentence}</div>
        <div className="details">
        <button onClick={()=>setDetailExpand(!detailExpand)}>Talk about it</button>
        {
          detailExpand ? (
            <div className="expand">
              <img src = {imgPreview} alt='preview'/>
              {
                explanations.map((explanation,index)=>(
                  <div key={index} className='explanation'>{explanation}</div>
                ))
              }
              {
                expReply.map((reply,index)=>(
                  <div key={index} className='reply'>{reply}</div>
                ))
              }
            </div>
          ):( <div className="fold"></div>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default App
