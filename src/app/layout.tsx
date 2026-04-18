import 'maplibre-gl/dist/maplibre-gl.css';
import './globals.css';
import type { Metadata } from 'next';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Lakes Client',
  description: 'Клиентская сторона системы мониторинга озёр',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}