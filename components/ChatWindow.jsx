export default function ChatWindow({ messages }) {
    return (
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 ${msg.role === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block p-3 rounded ${
                msg.role === "user"
                  ? "bg-[var(--accent-color)] text-black"
                  : "bg-gray-600 text-white"
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}
      </div>
    );
  }
  