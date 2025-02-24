import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onSend({ role: "user", content: text });
    // For demo purposes, we echo a response:
    onSend({ role: "assistant", content: "This is a placeholder response." });
    setText("");
  };

  return (
    <form onSubmit={handleSend} className="flex space-x-2">
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow p-2 rounded bg-gray-600 text-white"
      />
      <button type="submit" className="px-4 py-2 bg-accent text-black rounded">Send</button>
    </form>
  );
}
