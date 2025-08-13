import "./App.css"
import { useState, useEffect } from "react";
import type  { FormEvent } from "react"
import Lenis from "lenis";
import { InputField } from "./component/InputFeild";
import { Chatbox } from "./component/Chatbox";

interface ChatEntry {
  query: string;
  feedback: string;
}

function App() {
  const [input, setInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatEntry[]>([]);

  const lenis = new Lenis({
    autoRaf: true,
  });

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("chatHistory") || "[]");
      setChatHistory(Array.isArray(saved) ? saved : []);
    } catch {
      setChatHistory([]);
    }
  }, []);

  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    const userMessage = input.trim();
    const botResponse = "Thinking...";

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { query: userMessage, feedback: botResponse },
    ]);
    
    setTimeout(() => {
      const botFeedback = `${userMessage} `;
      setChatHistory((prevHistory) => [
        ...prevHistory.slice(0, -1), 
        { query: userMessage, feedback: botFeedback },
      ]);
    }, 2000);

    setInput("");
  };

  useEffect(() => {
    const chatContainer = document.querySelector(".chat-history");
    if (chatContainer) {
      chatContainer.scrollTop = 0;
    }
  }, [chatHistory]);

  return (
    <div>
      <h1 className="text-center text-decoration-underline">Chatbot-By-Mehul</h1>

      <div className="container">
        <Chatbox chatHistory={chatHistory} />
        <InputField
          handleSubmit={handleSubmit}
          input={input}
          setInput={setInput}
        />
      </div>
    </div>
  );
}

export default App;
