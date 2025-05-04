"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home", icon: "/assets/home.svg", width: 28, height: 28 },
        { href: "/chat", label: "Chat", icon: "/assets/chat.svg", width: 28, height: 28 },
        { href: "/lives", label: "Lives", icon: "/assets/live.svg", width: 28, height: 28, live: true },
        { href: "/jogos", label: "Jogos", icon: "/assets/furia.svg", width: 42, height: 42 },
        { href: "/contato", label: "Contato", icon: "/assets/contact.svg", width: 28, height: 28 },
    ];

    return (
        <div className="container">
            <aside className="sidebar">
                <nav>
                    <ul>
                        {navItems.map(({ href, label, icon, width, height, live }) => (
                            <li key={href}>
                                <Link href={href}>
                                    <span className="icon-span">
                                        <Image
                                            src={icon}
                                            alt={`Ícone de navegação para ${label}`}
                                            width={width}
                                            height={height}
                                            className={`icon ${pathname === href ? "active-icon" : ""}`}
                                        />
                                        {live && <span className="live-indicator" />}
                                    </span>
                                    <span className="label">{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <main className="content">{children}</main>

            <aside className="profile-sidebar">
                <div className="profile-content">
                    <Image
                        src="/assets/profile.svg"
                        alt="Imagem de perfil do usuário"
                        width={50}
                        height={50}
                        className="profile-image"
                    />
                    <span className="profile-name">Guest</span>
                </div>
                <button className="login-button">Login</button>
            </aside>
        </div>
    );
}
