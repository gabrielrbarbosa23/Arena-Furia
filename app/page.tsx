'use client';

import styles from './styles/home.module.css';
import Link from 'next/link';
import SidebarLayout from './components/SidebarLayout';

export default function Home() {
    const noticias = [
        "FURIA classificada para os playoffs do Major!",
        "Novo jogador anunciado para o time!",
        "FURIA vence clássico contra MIBR no CS2!",
    ];

    const equipes = {
        CS: ['KSCERATO', 'yuurih', 'molodoy', 'FalleN', 'YEKINDAR'],
    };

    return (
        <SidebarLayout>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Arena Fúria</h1>
                    <p className={styles.subtitle}>
                        Conecte-se com a torcida da FÚRIA e acompanhe tudo em tempo real!
                    </p>
                    <Link href="/chat" className={styles.liveButton}>Ao vivo agora</Link>
                </section>

                <section className={styles.section}>
                    <h2>Notícias</h2>
                    <br />
                    <ul className={styles.newsList}>
                        {noticias.map((noticia, i) => (
                            <li key={i} className={styles.newsItem}>• {noticia}</li>
                        ))}
                    </ul>
                </section>

                <section className={`${styles.section} ${styles.lives_calendar}`}>
                    <div>
                        <h2>Equipe</h2>
                        {Object.entries(equipes).map(([modalidade, jogadores]) => (
                            <div key={modalidade} className={styles.teamBlock}>
                                <ul className={styles.playersList}>
                                    {jogadores.map((jogador) => (
                                        <li key={jogador}>
                                            <Link href={`/jogador/${jogador.toLowerCase()}`}>
                                                {jogador}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2>📅 Calendário de Jogos</h2>
                        <table className={styles.calendar}>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Adversário</th>
                                    <th>Campeonato</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>07/06/2025</td>
                                    <td>Vitality</td>
                                    <td>Major Texas</td>
                                    <td>Agendado</td>
                                </tr>
                                <tr>
                                    <td>08/06/2025</td>
                                    <td>NAVI</td>
                                    <td>Major Texas</td>
                                    <td>Agendado</td>
                                </tr>
                                <tr>
                                    <td>09/06/2025</td>
                                    <td>FaZe</td>
                                    <td>Major Texas</td>
                                    <td>Agendado</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </SidebarLayout>
    );
}