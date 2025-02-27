import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-gray-900 text-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* A placeholder for your logo */}
          <div className="w-8 h-8 bg-xboxGreen rounded-full shadow-neon" />
          <Link href="/" className="text-xl font-bold hover:text-xboxGreen transition">
            Gradiorum
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-xboxGreen transition">Home</Link>
          <Link href="/about" className="hover:text-xboxGreen transition">About</Link>
          <Link href="/members" className="hover:text-xboxGreen transition">Members</Link>
          <Link href="/projects" className="hover:text-xboxGreen transition">Projects</Link>
          <Link href="/blog" className="hover:text-xboxGreen transition">Blog</Link>
          <Link href="/videos" className="hover:text-xboxGreen transition">Videos</Link>
          <Link href="/papers" className="hover:text-xboxGreen transition">Papers</Link>
          <Link href="/contact" className="hover:text-xboxGreen transition">Contact</Link>
          <Link href="/luminaguard" className="hover:text-xboxGreen transition">LuminaGuard</Link>
          <Link href="/humanai" className="hover:text-xboxGreen transition">Human-AI Teaming</Link>
          <Link href="/discordbots" className="hover:text-xboxGreen transition">Discord Bots</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => toggleTheme()}
            className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition"
          >
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col p-4 space-y-3">
            <Link href="/" className="hover:text-xboxGreen transition">Home</Link>
            <Link href="/about" className="hover:text-xboxGreen transition">About</Link>
            <Link href="/members" className="hover:text-xboxGreen transition">Members</Link>
            <Link href="/projects" className="hover:text-xboxGreen transition">Projects</Link>
            <Link href="/blog" className="hover:text-xboxGreen transition">Blog</Link>
            <Link href="/videos" className="hover:text-xboxGreen transition">Videos</Link>
            <Link href="/papers" className="hover:text-xboxGreen transition">Papers</Link>
            <Link href="/contact" className="hover:text-xboxGreen transition">Contact</Link>
            <Link href="/luminaguard" className="hover:text-xboxGreen transition">LuminaGuard</Link>
            <Link href="/humanai" className="hover:text-xboxGreen transition">Human-AI Teaming</Link>
            <Link href="/discordbots" className="hover:text-xboxGreen transition">Discord Bots</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
