"use client"
// hooks
import { useState } from "react"
import {
  useChat
} from "@ai-sdk/react"
import ChatOutput from "@/components/ChatOutput"
import ChatInput from "@/components/ChatInput"
import Overlay from "@/components/Overlay"

// 导入铅笔画风格样式
import "@/styles/pencil-sketch.css"

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);

  // chat LLM 业务 抽离
  const {
    input, // 输入框的值
    messages, // 消息列表
    status, // 状态
    handleInputChange, // 输入框变化
    handleSubmit, // 提交
  } = useChat();
  return (
    <>
      {showOverlay && <Overlay onStart={() => setShowOverlay(false)} />}
      <main className="pencil-main">
        <h1 className="pencil-title">laptopGPT</h1>
        <div className="pencil-chat-container">
          <ChatOutput messages={messages} status={status} />
        </div>
        <div className="pencil-input-container">
          <ChatInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </>
  )
}