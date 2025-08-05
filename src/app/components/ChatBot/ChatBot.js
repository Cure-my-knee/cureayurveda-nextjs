'use client';
import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    const res = await fetch('/api/chatbot', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMessage = { role: 'bot', content: data.reply };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="p-4 border rounded w-full max-w-md mx-auto">
      <div className="h-64 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-2 py-1 rounded ${msg.role === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="border w-full p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage} className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">Send</button>
    </div>
  );
}
