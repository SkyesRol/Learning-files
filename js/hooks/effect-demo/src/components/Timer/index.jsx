import{ useState,useEffect } from 'react';

const Timer = () =>{
    const [time,setTime] = useState(0);

    console.log('组件函数执行');
    console.log('JSX编译');
    useEffect(()=>{
        console.log('Render completed');
        const interval = setInterval(()=>{
            setTime(prevTime => prevTime+1)
        },1000)
        return ()=>{
            console.log("Component's uninstalled");
            clearInterval(interval); // 实际上删除组件还在执行，占用内存，所以要及时清理，避免内存泄露
        }
    },[])
    
        return(
            <div>
            <div>Timer's On Baby!!!</div>
            <div>已经运行{time}秒</div>
            </div>
        )
}







export default Timer;