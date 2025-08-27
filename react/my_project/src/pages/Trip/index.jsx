import { chat, KimiChat } from '@/llm'
import useTitle from '@/hooks/useTitle'
import { useEffect, useState } from 'react'
import styles from './trip.module.css'
import {
    Input,
    Button,
    Loading,
    Toast
} from 'react-vant'
import {
    ChatO,
    UserO
} from '@react-vant/icons'
const Trip = () => {
    // useEffect(() => {
    //     const fetchChat = async () => {
    //         const res = await KimiChat([
    //             {
    //                 role: 'user',
    //                 content: 'Hey there!'
    //             }
    //         ]);
    //         console.log(res)
    //     }
    //     fetchChat();
    // }, [])

    const [text, setText] = useState('')
    const [isSending, setIsSending] = useState(false);
    // 数据驱动界面
    // 先做静态界面
    const [messages, setMessages] = useState([
        {
            id: 1,
            content: 'hello!',
            role: 'user'
        },
        {
            id: 2,
            content: '你好!I\'m your assistant',
            role: 'assistant'
        },
        {
            id: 3,
            content: 'hello!',
            role: 'user'
        },
        {
            id: 4,
            content: '你好!I\'m your assistant',
            role: 'assistant'
        },
        {
            id: 5,
            content: 'hello!',
            role: 'user'
        },
        {
            id: 6,
            content: '你好!I\'m your assistant',
            role: 'assistant'
        },
        {
            id: 7,
            content: 'hello!',
            role: 'user'
        },
        {
            id: 8,
            content: '你好!I\'m your assistant',
            role: 'assistant'
        },
        {
            id: 9,
            content: 'hello!',
            role: 'user'
        },
        {
            id: 10,
            content: '你好!I\'m your assistant',
            role: 'assistant'
        },

    ]);
    const handleChat = async () => {
        if (text.trim() === '') {
            Toast.info({
                message: '内容不能为空',

            })
            return;
        }
        setIsSending(true);
        setText('');
        setMessages((prev) => {   // 闭包陷阱？
            return [
                ...prev,
                {
                    role: 'user',
                    content: text
                }
            ]
        });
        const newMessage = await chat([{
            role: 'user',
            content: text
        }]);
        setMessages((prev) => {
            return [
                ...prev,
                {
                    role: 'assistant',
                    content: newMessage.content
                }
            ]
        })
        setIsSending(false)
    }
    useTitle('旅游智能客服')
    return (
        <div className='flex flex-col h-all'>
            <div className={`flex-1 ${styles.chatArea}`}>
                {
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={
                                msg.role === 'user' ? styles.messageRight : styles.messageLeft
                            }
                        >   {
                                msg.role === 'assistant' ?
                                    <ChatO /> :
                                    <UserO />
                            }
                            {msg.content}</div>
                    ))
                }
            </div>
            <div className={`flex ${styles.inputArea}`}>
                <Input
                    value={text}
                    onChange={(e) => setText(e)}
                    placeholder='请输入消息'
                    className={`flex-1 ${styles.input}`} />
                <Button disabled={isSending} type='primary' onClick={handleChat}>发送</Button>
            </div>
            {isSending && <div className="fixed-loading"><Loading type='ball' /></div>}

        </div>
    )
}
export default Trip
