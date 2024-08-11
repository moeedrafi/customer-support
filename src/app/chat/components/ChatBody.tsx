import { Bot } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export const ChatBody = () => {
  return (
    <div className="lg:px-20 flex-1 overflow-y-auto h-full">
      <div className="flex flex-col justify-end px-3 py-5 gap-5">
        {/* Messages */}
        <div className="flex gap-2">
          <Avatar className="border-2 border-purple-300 flex items-center justify-center">
            <Bot />
          </Avatar>
          <div className="w-max rounded-lg p-2 bg-[#222141]">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-light text-muted-foreground">AI Bot</p>
              <p>Message Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
