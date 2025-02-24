import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    // Send user message and simulate an AI response for demo purposes.
    onSend({ role: "user", content: text });
    onSend({ role: "assistant", content: "Simulated response: " + text });
    setText("");
  };

  const handleKeyDown = (e) => {
    // If Enter is pressed without the Shift key, send the message.
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative w-full mt-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full bg-gray-700 text-white p-4 pr-20 rounded focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] resize-none text-lg"
        placeholder="Type your message..."
        rows={3}
      />
      <button
        onClick={handleSend}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[var(--accent-color)] text-black px-4 py-2 rounded hover:shadow-neon transition"
      >
        Send
      </button>
    </div>
  );
}
