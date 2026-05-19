/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import GameModal from './components/GameModal';
import { GAMES, CATEGORIES } from './constants/games';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState(null);

  const featuredGame = useMemo(() => GAMES.find(g => g.isFeatured) || GAMES[0], []);

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-sans overflow-x-hidden selection:bg-indigo-500 selection:text-white" id="app-root">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
        {/* Featured Hero */}
        {!searchQuery && activeCategory === 'All' && featuredGame && (
          <Hero game={featuredGame} onPlay={setSelectedGame} />
        )}

        {/* Filters / Gallery Header */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-6" id="filters-section">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                activeCategory === 'All'
                  ? 'bg-white text-black border-white'
                  : 'bg-zinc-900 text-zinc-500 border-white/5 hover:text-zinc-300'
              }`}
            >
              All Area
            </button>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                  activeCategory === category
                    ? 'bg-white text-black border-white'
                    : 'bg-zinc-900 text-zinc-500 border-white/5 hover:text-zinc-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest px-4 py-2 bg-zinc-900 border border-white/5 rounded-lg">
            {filteredGames.length} Available
          </div>
        </section>

        {/* Games Grid */}
        <section className="pb-20">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            id="games-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredGames.map(game => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  onClick={setSelectedGame} 
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredGames.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-32 text-zinc-500 text-center"
              id="no-games-found"
            >
              <Gamepad2 className="w-16 h-16 mb-4 opacity-20" />
              <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
              <p className="text-zinc-500 mb-8 max-w-sm">
                We couldn't find what you were looking for. Try a different search term or category.
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-zinc-200 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="border-t border-white/5 py-12 px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900 rounded-lg border border-white/5">
                <Gamepad2 className="w-5 h-5 text-indigo-500" />
              </div>
              <span className="font-bold tracking-tight text-white">Adam Adam's</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs text-center md:text-left">
              The professional choice for unblocked high-speed gaming. Simple and clean.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-zinc-500 font-bold uppercase text-[10px] tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Adam Adam
          </div>
        </div>
      </footer>

      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}
