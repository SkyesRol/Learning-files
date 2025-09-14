"use client";
import type {
    Message
} from "ai";
import ReactMarkdown from "react-markdown";

interface ChatOutputProps {
    messages: Message[];
    status: string;
}
export default function ChatOutput({ messages, status }: ChatOutputProps) {

    return (
        <>
            {messages.map((message, index) => (
                message.role === 'user' ? (
                    <UserChat key={index} content={message.content} />
                ) : (
                    <AssistantChat key={index} content={message.content} />
                )
            ))}
            {
                status === "submitted" && (
                    <div className="text-muted-foreground">Generating response...</div>
                )
            }
            {
                status === 'error' && (
                    <div className="text-red-500">An error occurred. Please try again.</div>
                )
            }
        </>
    )
}

const UserChat = ({ content }: { content: string }) => {

    return (
        <div className='pencil-user-message pencil-animation'>
            {content}
        </div>
    )
}






const AssistantChat = ({ content }: { content: string }) => {

    return (
        <div className='pencil-assistant-message pencil-animation'>
            <ReactMarkdown components={{
                a: ({ href, children }) => (
                    <a target="_blank" href={href} className="pencil-link">{children}</a>
                )
            }}>{content}</ReactMarkdown>
        </div>
    )
}