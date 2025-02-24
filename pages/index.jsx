import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

export default function Home() {
  // A simple state for chat messages
  const [messages, setMessages] = useState([
    { role: "system", content: "Welcome to Gradiorum AI. How can I help you today?" }
  ]);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* GPT-like Chat Interface */}
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4 neon-text">Gradiorum Chat</h1>
          <ChatWindow messages={messages} />
          <ChatInput onSend={addMessage} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
