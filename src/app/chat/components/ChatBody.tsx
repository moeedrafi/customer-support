import { Bot, User } from "lucide-react";
import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";

import { Avatar } from "@/components/ui/avatar";

export const ChatBody = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="lg:px-20 flex-1 overflow-y-auto h-full">
      <div className="flex flex-col justify-end px-3 py-5 gap-5">
        {/* Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 ${
              message.role !== "assistant" && "justify-end"
            }`}
          >
            <Avatar
              className={`border-2 border-purple-300 flex items-center justify-center ${
                message.role !== "assistant" && "order-2"
              }`}
            >
              {message.role === "assistant" ? <Bot /> : <User />}
            </Avatar>
            <div className="w-max rounded-lg p-2 bg-[#222141]">
              <div className={"flex flex-col gap-2"}>
                <p className="capitalize text-sm font-light text-muted-foreground">
                  {message.role}
                </p>
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
