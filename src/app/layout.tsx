import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
    title: 'Aarambh Home Décor',
    description:
        'Discover the perfect blend of comfort and style at Aarambh Home Décor. Explore our exquisite collection of furniture and home décor to craft your dream living spaces. Elevate your home with timeless elegance today',
    icons: {
        icon: '/logo.svg',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='font-mono box-border bg-baseBG'>
            <body>{children}</body>
        </html>
    );
}
