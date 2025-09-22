"use client";

import { useState } from "react";
import ChatBox from "./ChatBox";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-5 left-4 bg-blue-500 text-white px-4 py-2 text-[15px] rounded-full shadow-lg hover:bg-blue-600 transition-all z-[50] font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬 Chat
      </button>

      {<ChatBox onClose={() => setIsOpen(false)} isOpen={isOpen} />}
    </>
  );
}
