"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Live.module.css";
import SidebarLayout from "../components/SidebarLayout";

interface Match {
    id: number;
    team1: string;
    team2: string;
    score1: number;
    score2: number;
    fans: number;
    emojis: { [key: string]: number };
}

export default function LivePage() {
    const [matches, setMatches] = useState<Match[]>([
        { id: 1, team1: "FURIA", team2: "NAVI", score1: 0, score2: 0, fans: 0, emojis: {} },
        { id: 2, team1: "FURIA", team2: "G2", score1: 0, score2: 0, fans: 0, emojis: {} },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMatches((prevMatches) =>
                prevMatches.map((match) => ({
                    ...match,
                    score1: match.score1 + Math.floor(Math.random() * 2),
                    score2: match.score2 + Math.floor(Math.random() * 2),
                }))
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleCheer = (id: number) => {
        setMatches((prevMatches) =>
            prevMatches.map((match) =>
                match.id === id ? { ...match, fans: match.fans + 1 } : match
            )
        );
    };

    const handleManualUpdate = (id: number) => {
        setMatches((prevMatches) =>
            prevMatches.map((match) =>
                match.id === id
                    ? {
                        ...match,
                        score1: match.score1 + Math.floor(Math.random() * 2),
                        score2: match.score2 + Math.floor(Math.random() * 2),
                    }
                    : match
            )
        );
    };

    return (
        <SidebarLayout>
            <div className={styles.liveContainer}>
                <h1 className={styles.title}>Partidas AO VIVO - FURIA</h1>
                <div className={styles.matchList}>
                    {matches.map((match) => (
                        <div key={match.id} className={styles.matchCard}>
                            <h2>{match.team1} vs {match.team2}</h2>
                            <p className={styles.score}>
                                {match.score1} - {match.score2}
                            </p>
                            <p>Torcida: {match.fans} </p>
                            <div>
                                {Object.entries(match.emojis).map(([emoji, count]) => (
                                    <span key={emoji} style={{ marginRight: "8px", fontSize: "24px" }}>
                                        {emoji} x{count}
                                    </span>
                                ))}
                            </div>
                            <div className={styles.buttons}>
                                <button onClick={() => handleCheer(match.id)} className={styles.button}>
                                    Rusha neles 🔥
                                </button>
                                <button onClick={() => handleManualUpdate(match.id)} className={styles.button}>
                                    Atualizar Agora 🔄
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SidebarLayout>
    );
}