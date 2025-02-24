import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend({ role: "user", content: text });
    // Simulate an AI response for demo purposes
    onSend({
      role: "assistant",
      content: "This is a simulated AI response. Your message was: " + text,
    });
    setText("");
  };

  return (
    <form onSubmit={handleSend} className="flex mt-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="chat-input flex-grow"
        placeholder="Type your message..."
      />
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
  );
}
