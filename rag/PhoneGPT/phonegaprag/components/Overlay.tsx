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
      className={`fixed inset-0 pencil-welcome-overlay flex flex-col items-center justify-center z-50 ${isExiting ? 'animate-slide-out-up' : ''}`}
    >
      <div className="text-center space-y-8 px-4">
        <h1
          className="pencil-welcome-title animate-slide-in-top"
          style={{ animationDelay: '0.2s', opacity: 0, '--slide-distance': '-150%' }}
        >
          laptopGPT
        </h1>

        <p
          className="pencil-welcome-description animate-slide-in-top"
          style={{ animationDelay: '0.2s', opacity: 0, '--slide-distance': '-90%' }}
        >
          Your AI-powered laptop expert - providing instant, tailored advice on specs, comparisons, and recommendations to find your perfect machine.
        </p>

        <Button
          onClick={handleStart}
          className="pencil-welcome-button animate-slide-in-btm"
          style={{ animationDelay: '0.8s', opacity: 0 }}
          disabled={isExiting}
        >
          Start Now
        </Button>
      </div>
    </div>
  );
}