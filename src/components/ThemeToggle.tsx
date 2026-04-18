'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    const initialTheme = savedTheme ?? 'light';

    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${initialTheme}`);

    setTheme(initialTheme);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme: ThemeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);

    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${nextTheme}`);
  }

  if (!mounted) return null;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Переключить тему"
      title="Переключить тему"
    >
      {theme === 'light' ? '🌙 Тёмная' : '☀️ Светлая'}
    </button>
  );
}