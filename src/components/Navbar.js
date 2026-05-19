import { Search, Gamepad2 } from 'lucide-react';

export default function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="sticky top-0 z-50 glass px-4 py-4 sm:px-8 border-b border-white/5 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 transition-opacity hover:opacity-80 cursor-pointer group">
        <div className="p-2 bg-indigo-600 rounded-xl">
          <Gamepad2 className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-white leading-none">
          Adam Adam's <span className="block text-[10px] text-zinc-400 tracking-widest font-medium uppercase mt-0.5">Unblocked Games</span>
        </h1>
      </div>

      <div className="relative max-w-md w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input
          type="text"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-zinc-900 border border-white/5 rounded-full py-2 pl-12 pr-4 focus:outline-none focus:border-indigo-500/50 transition-all text-sm"
          id="search-input"
        />
      </div>

      <div className="hidden sm:block">
        <button className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-wider">
          All Games
        </button>
      </div>
    </nav>
  );
}
