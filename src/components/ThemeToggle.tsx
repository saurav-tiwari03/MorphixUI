// components/ThemeToggle.tsx
'use client';

import { useTheme } from '@/components/ThemeProvider';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="p-4">
            <label htmlFor="theme-select" className="mr-2 text-[var(--text-color)]">
                Select Theme:
            </label>
            <select
                id="theme-select"
                value={theme}
                onChange={(e) => toggleTheme(e.target.value)}
                className="bg-[var(--background-color)] text-[var(--text-color)] border border-gray-300 rounded p-1"
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="blue">Blue</option>
            </select>
        </div>
    );
}