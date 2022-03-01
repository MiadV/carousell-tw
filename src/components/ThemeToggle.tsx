import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import MoonIcon from '@/icons/MoonIcon';
import SunIcon from '@/icons/SunIcon';

export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // When mounted on client, now we can use resolvedTheme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className={className}
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
      }}
      aria-label='toggle theme'
    >
      {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
