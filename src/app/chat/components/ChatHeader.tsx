import { Bot, ChevronLeft } from "lucide-react";
import Link from "next/link";

export const ChatHeader = () => {
  return (
    <div className="bg-[#06061D] flex text-white p-5">
      <div className="w-full flex flex-col justify-between gap-5">
        <div className="flex  items-center gap-3">
          <Link href="/">
            <ChevronLeft size={22} />
          </Link>

          <Bot size={32} />
          <div className="flex flex-col">
            <h4 className="text-[4vmin] font-semibold">AI Customer Support</h4>
            <p className="font-light text-green-400 text-[2vmin]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};
