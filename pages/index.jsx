import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

export default function Home() {
  const [messages, setMessages] = useState([
    { role: "system", content: "Welcome to Gradiorum AI. How can I help you today?" }
  ]);

  const addMessage = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}>
      <Header />
      <main className="page-wrapper py-10">
        <div className="chat-container">
          <h1 className="text-3xl font-bold mb-4 neon-text text-center">Gradiorum Chat</h1>
          <ChatWindow messages={messages} />
          <ChatInput onSend={addMessage} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
