import { Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { Menu, X, Home, Folder, PenLine } from "lucide-react";
import { User, ChevronDown, ChevronUp } from "lucide-react";
import { games } from "../lib/games";
import Link from "next/link";



export function MenuLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [showGames, setShowGames] = useState(false);


  return (
    <div className="relative min-h-screen bg-stone-900 text-white">
      {/* Toggles nav bar  */}
      <button onClick={() => setOpen(!open)} className="fixed top-4 left-4 z-30 text-5xl transition-transform duration-300">
        {open ? (<X className="w-8 h-8" />) : (<Menu className="w-8 h-8" />)}
      </button>

      {/* Side nav */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 z-25 transform transition-transform duration-300 ease-out
          bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900
          shadow-xl border-r border-white/10
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        
        <ul className="mt-20 space-y-4 px-6">
          {/* Home Directory */} 
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 hover:bg-stone-800 p-2 rounded"
              onClick={() => setOpen(false)}
            >
              <Home className="w-5 h-5" /> Home
            </Link>
          </li>

          {/* Game Directory */} 
          <li>
          <button onClick={() => setShowGames(!showGames)} className="w-full flex items-center justify-between gap-3 hover:bg-stone-800 p-2 rounded">
            <span className="flex items-center gap-3">
              <User className="w-5 h-5" /> Games
            </span>
            {showGames ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />} {/* Open and close arrows */}
          </button>

            {/* Submenu to games */}
            <ul className={`${showGames ? "block" : "hidden"} ml-8 mt-2 space-y-2`}>
              {games.map(({ title, gameName }) => (
                <li key={gameName}>
                  <Link href={`/games/${gameName}`} className="block hover:text-white transition" onClick={() => setOpen(false)}>{title}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Project Directory */}        
          <li>
            <Link
              href="/project"
              className="flex items-center gap-3 hover:bg-stone-800 p-2 rounded"
              onClick={() => setOpen(false)}
            >
              <Folder className="w-5 h-5" /> Projects
            </Link>
          </li>

          <li>
            <Link
              href="/write"
              className="flex items-center gap-3 hover:bg-stone-800 p-2 rounded"
              onClick={() => setOpen(false)}
            >
              <PenLine className="w-5 h-5" /> Write
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}




export function Footer() {
  return (
    <footer className="w-full bg-stone-800 py-6 mt-16">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-sm text-stone-400">
          © {new Date().getFullYear()} Mathis Fituwi
        </p>

        <a
          href="https://github.com/MatFit"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-stone-400 hover:text-white transition"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
      </div>

      <div className="flex justify-center">
        <a
          href="https://linkedin.com/in/mathis-fituwi-892977225"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-stone-400 hover:text-white transition"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>

      <div className="flex justify-center">
        <a
          href="https://www.instagram.com/mathisfituwi"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-stone-400 hover:text-white transition"
        >
          <Instagram className="w-5 h-5" />
          Instagram
        </a>
      </div>
    </footer>
  );
}
