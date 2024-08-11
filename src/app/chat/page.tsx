import React from "react";

import { ChatBody } from "@/app/chat/components/ChatBody";
import { ChatForm } from "@/app/chat/components/ChatForm";
import { ChatHeader } from "@/app/chat/components/ChatHeader";

const ChatPage = () => {
  return (
    <div className="h-screen w-full bg-[#19192F] flex flex-col justify-center items-stretch">
      <ChatHeader />
      <ChatBody />
      <ChatForm />
    </div>
  );
};

export default ChatPage;
