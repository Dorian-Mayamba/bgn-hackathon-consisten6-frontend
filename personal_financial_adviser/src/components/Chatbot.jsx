import React, { useState } from "react";
import "../styles/Chatbot.css"; // Make sure to import your CSS file

// Component for a single chat message
function ChatMessage({ message, isUser }) {
  return (
    <div className={`item ${isUser ? "right" : ""}`}>
      <div className="msg">
        <p>{message}</p>
      </div>
    </div>
  );
}

// Component for the chatbox
function ChatBox() {
  const [messages, setMessages] = useState([
    { text: "Hello everyone, How are you?", isUser: false },
    { text: "Nice", isUser: true },
  ]);

  return (
    <div className="box">
      {messages.map((message, index) => (
        <div>
            <ChatMessage
                key={index}
                message={message.text}
                isUser={message.isUser}
            />
        </div>
      ))}
    </div>
  );
}

// Component for the typing area and input field
function TypingArea() {
  return (
    <div className="typing-area">
      <div className="input-field">
        <input type="text" placeholder="Type your message" required />
        <button>Send</button>
      </div>
    </div>
  );
}

// Main App component
export function Chatbot() {
  return (
    <div className="wrapper">
      <div className="title">Simple Chatbot</div>
      <ChatBox />
      <TypingArea />
    </div>
  );
}

