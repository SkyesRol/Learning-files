"use client";
import {
    Input
} from "@/components/ui/input"
import {
    Button
} from "@/components/ui/button"
import {
    ArrowUp
} from 'lucide-react'

interface ChatInputProps {
    input: string;
    handleInputChange: (e: any) => void;
    handleSubmit: (e: any) => void;
}
// const ChatInput: React.FC<ChatInputProps> = ({})
export default function ChatInput({
    input,
    handleInputChange,
    handleSubmit
}: ChatInputProps) {

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex gap-2">
                <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask me anything about the laptops~"
                    className="pencil-input"
                />
                <Button className="pencil-button">
                    <ArrowUp />
                    <span className="sr-only">Send message</span>
                </Button>
            </div>
        </form>
    )
}