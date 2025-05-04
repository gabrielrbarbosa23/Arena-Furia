"use client";

import styles from "../styles/jogos.module.css";
import SidebarLayout from "../components/SidebarLayout";

export default function GamesPage() {
    const upcomingGames = [
        {
            title: "FURIA vs NAVI",
            date: "07/06/2025",
            time: "18:00",
            isImportant: true,
        },
        {
            title: "FURIA vs MIBR",
            date: "08/06/2025",
            time: "20:00",
            isImportant: false,
        },
        {
            title: "FURIA vs Liquid",
            date: "09/06/2025",
            time: "17:00",
            isImportant: false,
        },
    ];

    return (
        <SidebarLayout>
            <div className={styles.container}>
                <h1 className={styles.title}>Próximos Jogos da FURIA</h1>
                <p className={styles.subtitle}>Fique ligado nos confrontos que vêm aí!</p>

                <div className={styles.cardsContainer}>
                    {upcomingGames.map((game, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${game.isImportant ? styles.important : ""}`}
                        >
                            <h2>{game.title}</h2>
                            <p>{game.date} às {game.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SidebarLayout>
    );
}