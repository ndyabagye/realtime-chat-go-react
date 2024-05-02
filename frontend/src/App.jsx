import { useEffect } from "react";

import "./index.css";
import { connect, sendMsg } from "./api";

import Header from "./components/Header";
import { useState } from "react";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory((prevChatHistory) => [...prevChatHistory, msg]);
    });
    console.log(chatHistory);
  }, [chatHistory]);

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center">
        <button
          onClick={send}
          className="mx-auto bg-blue-500 rounded-md px-4 py-2 text-white m-3"
        >
          Hit
        </button>
      </div>
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </>
  );
}

export default App;
