import { useState, useRef, useEffect } from 'react'

import './App.css'
import Progress from './components/Progress';
import AudioPlayer from './components/AudioPlayer';
import {
  SPEAKERS,
  DEFAULT_SPEAKER
} from './constants.js'
function App() {
  // 界面状态
  // llm ready 大模型是否准备好了？
  const [ready, setReady] = useState(null);
  // 按钮点击，防止多次点击
  const [disabled, setDisabled] = useState(false)
  const [programItems, setProgressItems] = useState([])
  const [text, setText] = useState('I love huggingface')
  const [selectedSpeaker, setSelectedSpeaker] = useState(DEFAULT_SPEAKER)
  const [output, setOutput] = useState(null);
  let worker = useRef(null);
  useEffect(() => {
    // 引入 transformer
    // http://localhost:5173/worker.js
    worker.current = new Worker(new URL('./worker.js', import.meta.url), {
      type: 'module'
    })
    worker.current.postMessage({
      text: '灵不灵，奔驰s680'
    })
    const onMessageReceived = () => {

    }
    worker.current.onmessage = onMessageReceived;

    return () => worker.current.removeEventListener('message', onMessageReceived)
  }, [])
  const handleGenerateSpeech = () => {
    setDisabled(true);
    worker.current.postMessage({
      text,
      speaker_id: selectedSpeaker
    })
  }
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">

        <div className="bg-white p-8 rounded-lg w-full max-w-xl m-2">
          <h1 className="text-3xl font-semibold text-grey-800 mb-1 text-center">
            In browser Text To Speech(端模型)
          </h1>
          <h2 className="text-base font-medium text-grey-700 mb-2 text-center">
            Made with <a href="">Transformer.js</a>
          </h2>
          <div className="mb-4">
            <label htmlFor="text" className='block text-sm font-medium text-gray-600'>
              Text
            </label>
            <textarea id="text" className='border border-gray-300 rounded-md p-2 w-full'
              rows="4" placeholder='Enter text here' value={text} onChange={(e) => setText(e.target.value)}>

            </textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="speaker" className='block text-sm font-medium text-gray-600'>

            </label>
            <select id="speaker" className='border border-gray-300 rounded-md p-2 w-full'
              value={selectedSpeaker} onChange={(e) => setSelectedSpeaker(e.target.value)}>
              {
                // 将对象快速转换为数组 [[key:val],[key1:value1],[key2,value2]]
                Object.entries(SPEAKERS).map(([key, value]) => (
                  <option key={key} value={value}>
                    {key}
                  </option>
                ))
              }

            </select>
          </div>
          <div className="flex justify-center">
            <button className={`${disabled ? 'bg-gray-400 cursor-not-allowed'
              :
              'bg-blue-500 hover-bg-blue-600 '
              } text-white rounded-md py-2 px-4`}
              onClick={handleGenerateSpeech}
              disabled={disabled}>
              {disabled ? 'Generating...' : "Generate"}
            </button>
          </div>
          {
            output && <AudioPlayer
              audioUrl={output}
              mimeType={"audio/wav"} />
          }
        </div>
      </div>
    </>
  )
}

export default App
