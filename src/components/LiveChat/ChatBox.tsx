import { useEffect, useRef, useState } from 'react';
import { Send, X } from 'lucide-react';
import { GoDotFill } from 'react-icons/go';

import { io } from 'socket.io-client';
import './styles.css';
import config from '@/config';

const socket = io(config.apiServerUrl, {
  transports: ['websocket', 'polling'],
});

export default function ChatBox({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([
    { sender: 'Admin', message: 'Xin chào! Tôi có thể giúp gì cho bạn?' },
    {
      sender: 'Admin',
      message:
        'Vui lòng để lại tin nhắn, chúng tôi sẽ trả lời bạn sớm nhất có thể!',
    },
  ]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on('receiveMessage', (msg) => setMessages((prev) => [...prev, msg]));

    socket.on('typing', () => setIsTyping(true));
    socket.on('stopTyping', () => setIsTyping(false));

    return () => {
      socket.off('receiveMessage');
      socket.off('typing');
      socket.off('stopTyping');
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      const element = chatContainerRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleTyping = (e: any) => {
    setInput(e.target.value);
    socket.emit('typing');
  };

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('sendMessage', { message: input, sender: 'Client' });
      setInput('');
      socket.emit('stopTyping');
    }
  };

  return (
    <div
      className={`fixed bottom-20 left-5 w-80 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      {/* 🔳 Header */}
      <div className="bg-blue-500 text-white p-3 flex justify-between items-center rounded-t-lg">
        <span className="text-sm leading-none font-medium flex items-center gap-2">
          <GoDotFill className="inline-block text-green-1" size={20} /> Hỗ trợ
          trực tiếp
        </span>
        <button onClick={() => onClose()} className="p-2 rounded-full">
          <X size={20} />
        </button>
      </div>

      {/* 📩 Message Area */}
      <div
        className="p-3 h-60 overflow-y-auto space-y-2 text-sm"
        ref={chatContainerRef}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.sender === 'Client'
                ? 'bg-blue-500 text-white self-end ml-auto'
                : 'bg-gray-200 text-black self-start'
            }`}
          >
            {msg.message}
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center space-x-1 p-2">
            <div className="bg-gray-300 p-2 rounded-full flex space-x-1">
              <span className="typing-dot bg-gray-500"></span>
              <span className="typing-dot bg-gray-500"></span>
              <span className="typing-dot bg-gray-500"></span>
            </div>
          </div>
        )}
      </div>

      {/* 📝 Input */}
      <div className="border-t p-2 flex items-center">
        <input
          className="flex-1 p-2 border rounded-lg text-sm outline-none"
          value={input}
          placeholder="Nhập tin nhắn..."
          onChange={handleTyping}
          onBlur={() => socket.emit('stopTyping')}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-600 text-white p-2 rounded-full"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
