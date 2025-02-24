import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend({ role: "user", content: text });
    // For demo purposes, simulate an AI response
    onSend({ role: "assistant", content: "This is a simulated AI response. Your message was: " + text });
    setText("");
  };

  return (
    <form onSubmit={handleSend} className="w-full flex">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="chat-input flex-grow bg-gray-700 text-white"
        placeholder="Type your message..."
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-[var(--accent-color)] text-black rounded hover:shadow-neon">
        Send
      </button>
    </form>
  );
}
