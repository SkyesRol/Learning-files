"use client";

import { useState } from "react";
import { Button } from "./ui/button";

interface OverlayProps {
  onStart: () => void;
}

export default function Overlay({ onStart }: OverlayProps) {
  const [visible, setVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    // 设置退出状态，触发整个蒙版的渐出动画
    setIsExiting(true);

    // 等待动画完成后隐藏蒙版
    setTimeout(() => {
      setVisible(false);
      onStart();
    }, 800);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-300 flex flex-col items-center justify-center z-50 ${isExiting ? 'animate-slide-out-up' : ''}`}
    >
      <div className="text-center space-y-8 px-4">
        <h1
          className="text-6xl font-bold text-black animate-slide-in-top"
          style={{ animationDelay: '0.2s', opacity: 0, '--slide-distance': '-150%' }}
        >
          laptopGPT
        </h1>

        <p
          className="text-xl text-black max-w-md mx-auto animate-slide-in-top"
          style={{ animationDelay: '0.2s', opacity: 0, '--slide-distance': '-90%' }}
        >
          Your AI-powered laptop expert - providing instant, tailored advice on specs, comparisons, and recommendations to find your perfect machine.
        </p>

        <Button
          onClick={handleStart}
          className="mt-8 bg-black text-white hover:bg-black/80 px-8 py-6 text-lg animate-slide-in-btm"
          style={{ animationDelay: '0.8s', opacity: 0 }}
          disabled={isExiting}
        >
          Start Now
        </Button>
      </div>
    </div>
  );
}