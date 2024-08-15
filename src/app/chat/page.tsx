"use client";

import React from "react";
import { useChat } from "ai/react";

import { ChatBody } from "@/app/chat/components/ChatBody";
import { ChatForm } from "@/app/chat/components/ChatForm";
import { ChatHeader } from "@/app/chat/components/ChatHeader";

const ChatPage = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/chat",
    });

  return (
    <div className="h-screen w-full bg-[#19192F] flex flex-col justify-center items-stretch">
      <ChatHeader />
      <ChatBody messages={messages} />
      <ChatForm
        input={input}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ChatPage;
