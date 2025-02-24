import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome to Gradiorum AI. How can I help you today?" }
  ]);

  const addMessage = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar remains independently scrollable */}
      <div className="w-64 bg-gray-900 p-4 overflow-y-auto">
        <Sidebar />
      </div>
      {/* Main chat area centered and occupying remaining space */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="chat-container">
          <ChatWindow messages={messages} />
          <ChatInput onSend={addMessage} />
        </div>
      </div>
    </div>
  );
}
