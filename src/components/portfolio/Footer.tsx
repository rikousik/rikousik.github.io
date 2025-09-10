"use client";

import { DATA } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-300/50 dark:border-gray-800/50">
      <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>© 2025 {DATA.name}. Built with Next.js, Tailwind CSS</p>
      </div>
    </footer>
  );
} 