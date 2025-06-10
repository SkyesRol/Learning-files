import { useState,useRef } from "react";
// 组件函数一定首字母大写，不然会识别为普通html标签
function Plays(){
    // 火山引擎 tts 配置文件
    const TOKEN = 'Ti69Igmahn8RGFDSp549lTCq7nCQYe8s';
    const APP_ID = '4687754039';
    const CLUSTER_ID = 'volcano_tts';
    // 代码的可读性高于一切
    const [prompt, setPrompt] = useState('大家好，我是qh');

// react use开头 ref hook 可以获取DOM元素
const audioPlayer = useRef(null);
    console.log(audioPlayer);
const playMusic = () => {
    // const audio = document.querySelector('audio')
    // audio.play()  不用DOM事件，用UseRef
    console.log(audioPlayer);
    
    console.log('play');
    audioPlayer.current.play();
    
    
}
const generateAudio = () => {
    const voiceName = 'zh_male_beijingxiaoye_moon_bigtts';
    const endpoint = "/tts/api/v1/tts" // tts api llm 服务地址
    const headers = {
        'Content-Type': 'application/json',
         Authorization: `Bearer;${TOKEN}`,
        
    }
    const body = {
        "text": prompt,
        "voice_name": voiceName,
        "format": "wav",
        "speaking_rate": 1,
    }

}
const setChanges = (e) => {
    setPrompt(e.target.value);
}
return (
// public 静态资源文件夹
//  斜杠是绝对路径，localhost:5173/public/vite.svg 可以访问标签
   <div className="container">
    <div>

        <label>Prompt</label>
        <textarea className="input" value={prompt} onChange={setChanges}></textarea>
        <button onClick={generateAudio}>生成并播放</button>
        
    </div>
   <audio ref={audioPlayer} src='/sounds/snare.wav'></audio>
    {/* <button onClick={playMusic}>播放</button> */}
    </div>


)


}










export default Plays;