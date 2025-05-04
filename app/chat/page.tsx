'use client';

import { useEffect, useRef, useState } from "react";
import styles from "../styles/Chat.module.css";
import SidebarLayout from "../components/SidebarLayout";

interface Message {
    id: number;
    user: string;
    text: string;
}

type RawMessage = Omit<Message, "id">;

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const hasRun = useRef(false);

    const messageGroups: RawMessage[][] = [
        [
            { user: "Fulano", text: "VAMO FURIAAAAA 🔥" },
            { user: "Sicrano", text: "Confio no molodoy!! " },
            { user: "Beltrano", text: "É hoje, FURIA amassa!" },
            { user: "Fulano1", text: "KSCERATO modo clutch ativado!" },
            { user: "Sicrano1", text: "yuurih jogando o fino! " },
        ],
        [
            { user: "Beltrano1", text: "Mano, o YEKINDAR joga muito" },
            { user: "Fulano2", text: "Bora FURIA, pra cima deles!" },
            { user: "Sicrano2", text: "Cadê o ACE do Yuri???" },
        ],
        [
            { user: "Beltrano2", text: "MEU DEUS O KSCERATO 😱" },
            { user: "Fulano3", text: "É agora! É agoraaa!" },
            { user: "Sicrano3", text: "QUE RUSH FOI ESSE 🔥" },
            { user: "Beltrano3", text: "Tira print, esse round foi histórico" },
            { user: "Fulano4", text: "Vamooouu" },
        ]
    ];

    const enqueueGroups = async () => {
        for (let i = 0; i < messageGroups.length; i++) {
            const group = messageGroups[i];

            for (let j = 0; j < group.length; j++) {
                const msg = group[j];
                await new Promise((resolve) => {
                    setTimeout(() => {
                        setMessages((prev) => [
                            ...prev,
                            { id: prev.length + 1, ...msg },
                        ]);
                        resolve(true);
                    }, 150);
                });
            }

            if (i < messageGroups.length - 1) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }
    };

    useEffect(() => {
        if (!hasRun.current) {
            hasRun.current = true;
            enqueueGroups();
        }
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim() === "") return;

        const newMsg: Message = {
            id: messages.length + 1,
            user: "Você",
            text: newMessage,
        };

        setMessages((prev) => [...prev, newMsg]);
        setNewMessage("");
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <SidebarLayout>
            <div className={styles.chatContainer}>
                <h1 className={styles.title}>FURIA vs NAVI</h1>
                <div className={styles.messages}>
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`${styles.message} ${msg.user === "Você" ? styles.myMessage : ""}`}
                        >
                            <strong>{msg.user}:</strong> {msg.text}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className={styles.inputArea}>
                    <input
                        type="text"
                        placeholder="Mande sua mensagem..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className={styles.input}
                    />
                    <button onClick={handleSendMessage} className={styles.button}>
                        Enviar
                    </button>
                </div>
            </div>
        </SidebarLayout>
    );
}