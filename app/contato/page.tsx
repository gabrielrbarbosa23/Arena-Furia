'use client';

import styles from '../styles/contato.module.css';
import SidebarLayout from '../components/SidebarLayout';

export default function Contatos() {
    const contatos = [
        {
            titulo: 'Contato Geral da FURIA',
            email: 'contato@furia.gg',
            telefone: '+55 11 99999-0000',
            tipo: 'geral'
        },
        {
            titulo: 'Equipe Técnica e Administração',
            email: 'staff@furia.gg',
            telefone: '+55 11 98888-0000',
            tipo: 'admin'
        },
        {
            titulo: 'Time de CS:GO',
            email: 'csgo@furia.gg',
            telefone: '+55 11 99999-0000',
            tipo: 'cs'
        }
    ];

    return (
        <SidebarLayout>
            <div className={styles.container}>
                <h1 className={styles.title}>Entre em Contato com a FURIA</h1>
                <p className={styles.subtitle}>
                    Estamos prontos pra responder sua dúvida, torcedor ou parceiro!
                </p>

                <div className={styles.cardGrid}>
                    {contatos.map((contato, index) => (
                        <div key={index} className={`${styles.card} ${styles[contato.tipo]}`}>
                            <h2>{contato.titulo}</h2>
                            <p>
                                <strong>Email:</strong>{' '}
                                <a href={`mailto:${contato.email}`} className={styles.link}>
                                    {contato.email}
                                </a>
                            </p>
                            {contato.telefone && (
                                <p>
                                    <strong>WhatsApp:</strong>{' '}
                                    <a
                                        href="https://wa.me/5511993404466"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        Falar no Whats
                                    </a>
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </SidebarLayout>
    );
}