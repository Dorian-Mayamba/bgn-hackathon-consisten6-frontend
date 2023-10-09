import React, { useEffect, useState } from "react";
import "../styles/Chatbot.css"; // Make sure to import your CSS file
import $ from 'jquery';
import { useNavigate, useParams } from "react-router";
import { useUser } from "../contexts/UserContext";

// Component for a single chat message
function ChatMessage({ response, message }) {
  return (
    <>
    <div className="item right">
      <div className="msg">
          <p><strong>User:</strong>{message}</p>
        </div>
      </div>
      <div style={{ float:'left' }} className="item">
        <div className="msg">
          <p><strong>Chatbot:</strong>{response}</p>
        </div>
      </div>
    </>

  );
}

// Component for the typing area and input field


// Main App component
export function Chatbot() {

  const { currentUser, setCurrentUser } = useUser();
  const [messages, setMessages] = useState(currentUser.chats);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!currentUser == null){
      setMessages(currentUser.chats)
      console.log(messages);
    }else{
      console.log(currentUser);
      navigate('/', {replace:true})
    }
  }, [currentUser])

  const SendMessage = async (e) => {
    var message = $('#message').val();
    const url = $(e.target).attr('data-attr');
    try {
      var response = await fetch(url + '/' + message + '/' + id, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message
        })
      });
      var data = await response.json();
      setMessages(data.chats);
    } catch (err) {
      console.log(err);
    }

  }
  let { id } = useParams();
  return (
    <div className="wrapper">
      <div className="title">Simple Chatbot</div>
      <div className="box">
        {messages.map((message, index) => (
          <div>
            <ChatMessage
              key={index}
              response={message.response}
              message={message.message}
            />
          </div>
        ))}
      </div>
      <div className="typing-area">
        <div className="input-field">
          <input id="message" type="text" placeholder="Type your message" required />
          <button data-attr="http://127.0.0.1:8000/chatbot/message" onClick={(e) => SendMessage(e)}>Send</button>
        </div>
      </div>
    </div>
  );
}

