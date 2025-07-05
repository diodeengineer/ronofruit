
"use client";
import { useState } from "react";
import styles from "./Chatbot.module.css";

export default function ChatBotClient() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! I am your fruit expert. Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const fullPrompt =
        newMessages
          .map(
            (m) =>
              `${m.role === "user" ? "User" : "Bot"}: ${m.content}`
          )
          .join("\n") + `\nBot:`;

      const res = await fetch("/api/fruitbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: fullPrompt }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: "bot", content: data.reply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "bot", content: "Oops! Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat"
      >
        🤖
      </button>

      {/* Chat Container */}
      {isOpen && (
        <div className={styles.chatContainer}>
          <div style={{ display: "flex", alignItems: "center", padding: "0.5rem" }}>
            <strong>FruitBot</strong>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className={styles.chatBox}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`${styles.message} ${
                  m.role === "user" ? styles.user : styles.bot
                }`}
              >
                <span
                  className={`${styles.bubble} ${
                    m.role === "user" ? styles.userBubble : styles.botBubble
                  }`}
                >
                  {m.content}
                </span>
              </div>
            ))}
            {loading && (
              <div className={`${styles.message} ${styles.bot}`}>
                <span className={`${styles.bubble} ${styles.botBubble}`}>
                  Typing...
                </span>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={styles.inputBox}
              placeholder="Ask about fruits..."
            />
            <button
              type="submit"
              disabled={loading}
              className={styles.sendButton}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
