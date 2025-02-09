"use client";
import { useState } from "react";

export default function AIChatPopup({ selectedMood, onClose }) {
    const [chatHistory, setChatHistory] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newChatHistory = [...chatHistory, { sender: "user", message: input }];
        setChatHistory(newChatHistory);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chatHistory: newChatHistory }),
            });

            const data = await response.json();
            setChatHistory([...newChatHistory, { sender: "AI", message: data.message }]);
        } catch (error) {
            console.error("Chat Error:", error);
            setChatHistory([...newChatHistory, { sender: "AI", message: "Error connecting to AI." }]);
        }

        setLoading(false);
    };



    return (
        <div className="fixed bottom-10 right-10 bg-warmBeige p-4 rounded-lg shadow-xl w-80">
            <div className="flex justify-between">
                <h2 className="text-lg font-semibold">AI Chat {selectedMood}</h2>
                <button onClick={onClose} className="text-red-500">X</button>
            </div>
            <div className="h-40 overflow-y-auto bg-white p-2 my-2 border rounded-md">
                {chatHistory.map((msg, index) => (
                    <p key={index} className={msg.sender === "user" ? "text-right text-blue-500" : "text-left text-gray-700"}>
                        <strong>{msg.sender === "user" ? "You" : "AI"}:</strong> {msg.message}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full p-2 border rounded-md text-gray-700"
                placeholder="Type your message..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
                onClick={sendMessage}
                className="w-full mt-2 bg-oceanBlue hover:bg-softBlue text-white p-2 rounded-md"
                disabled={loading}
            >
                {loading ? "Thinking..." : "Send"}
            </button>
        </div>
    );
}
