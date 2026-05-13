import { Search, Gamepad2, Stars, Cloud } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-brand-yellow px-4 py-4 sm:px-8 border-b-4 border-black flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3 active:scale-95 transition-transform cursor-pointer group">
        <div className="p-3 bg-brand-pink rounded-2xl comic-border comic-shadow-sm group-hover:rotate-6 transition-transform">
          <Gamepad2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-display uppercase tracking-tight text-black leading-none pt-1">
          Adam Adam's <span className="block text-sm text-brand-pink tracking-widest font-sans font-bold -mt-1">Unblocked Games</span>
        </h1>
      </div>

      <div className="relative max-w-xl w-full">
        <div className="absolute inset-0 bg-black rounded-full translate-x-1 translate-y-1" />
        <div className="relative flex items-center bg-white border-4 border-black rounded-full py-1 pl-12 pr-4">
          <Search className="absolute left-4 w-6 h-6 text-zinc-400" />
          <input
            type="text"
            placeholder="Wanna play something fun? Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent p-2 focus:outline-none font-semibold text-lg"
            id="search-input"
          />
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <button className="flex items-center gap-2 bg-brand-green p-3 rounded-2xl comic-border comic-shadow-sm hover:-translate-y-1 active:translate-y-0 transition-all font-bold uppercase text-xs">
          <Stars className="w-4 h-4" />
          New Games
        </button>
        <button className="flex items-center gap-2 bg-brand-pink p-3 rounded-2xl comic-border comic-shadow-sm hover:-translate-y-1 active:translate-y-0 transition-all font-bold uppercase text-xs text-white">
          <Cloud className="w-4 h-4" />
          Cloud Save
        </button>
      </div>
    </nav>
  );
}
