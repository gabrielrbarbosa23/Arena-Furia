import "./styles/globals.css";
import "./styles/sidebar.css";

export const metadata = {
    title: "Arena Fúria",
    description: "Projeto de chat para a FÚRIA",
    icons: {
        icon: "/furia.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    );
}