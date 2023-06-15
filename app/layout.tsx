import './globals.css';
import { Coda } from 'next/font/google';

const coda = Coda({ subsets: ['latin'], weight: '400' });

export const metadata = {
    title: 'Code Vibes',
    description:
        'Code Vibes is a music visualiser which leverages mathematical functions to develop a phenomena known as emergence, It is an idea which refers to the phenomenon where complex patterns, structures, or behaviors arise from the interactions of simpler components or rules, resulting in properties that cannot be directly attributed to the individual parts and It is built using: Nextjs, p5js, p5jsounds, etc',
    URL: 'https://localhost:3000/',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={coda.className}>{children}</body>
        </html>
    );
}
