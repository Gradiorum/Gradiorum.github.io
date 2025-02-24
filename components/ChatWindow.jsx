export default function ChatWindow({ messages }) {
    return (
      <div className="h-80 overflow-y-auto bg-gray-700 rounded p-4 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block p-2 rounded ${msg.role === "user" ? "bg-accent text-black" : "bg-gray-600"}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
    );
  }
  