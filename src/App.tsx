/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Gamepad2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import GameModal from './components/GameModal';
import { GAMES, CATEGORIES } from './constants/games';
import { Game, Category } from './types';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

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
    <div className="min-h-screen bg-brand-blue flex flex-col font-sans overflow-x-hidden selection:bg-brand-pink selection:text-white" id="app-root">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
        {/* Featured Hero */}
        {!searchQuery && activeCategory === 'All' && featuredGame && (
          <Hero game={featuredGame} onPlay={setSelectedGame} />
        )}

        {/* Categories / Filter Bar */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-6" id="filters-section">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-tight transition-all whitespace-nowrap comic-border ${
                activeCategory === 'All'
                  ? 'bg-brand-yellow text-black comic-shadow'
                  : 'bg-white text-zinc-500 hover:text-black comic-shadow-sm'
              }`}
            >
              All Fun Stuff
            </button>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-tight transition-all whitespace-nowrap comic-border ${
                  activeCategory === category
                    ? 'bg-brand-yellow text-black comic-shadow'
                    : 'bg-white text-zinc-500 hover:text-black comic-shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-black font-black uppercase text-xs bg-white/20 px-4 py-2 rounded-full border-2 border-black/10">
            <Filter className="w-4 h-4" />
            <span>{filteredGames.length} Games Ready!</span>
          </div>
        </section>

        {/* Games Grid */}
        <section className="pb-20">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
              className="flex flex-col items-center justify-center py-20 text-black text-center"
              id="no-games-found"
            >
              <div className="relative mb-8">
                <Gamepad2 className="w-32 h-32 opacity-10 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center font-display text-4xl transform -rotate-12">
                  Oops!
                </div>
              </div>
              <h3 className="text-4xl font-display uppercase tracking-tight mb-2">No Games Here Yet!</h3>
              <p className="text-xl font-bold opacity-70 mb-8 max-w-md">
                Adam Adam is still fetching the best games from the galaxy. Check back soon!
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="bg-brand-pink text-white px-8 py-4 rounded-3xl comic-border comic-shadow font-display text-xl uppercase bouncy-hover"
              >
                Reset Search
              </button>
            </motion.div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-8 border-black py-16 px-8 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-yellow rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-orange rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 group">
              <div className="p-3 bg-brand-pink rounded-2xl comic-border comic-shadow-sm group-hover:rotate-12 transition-transform">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="font-display uppercase tracking-tight text-3xl">Adam Adam's</span>
            </div>
            <p className="text-black font-bold max-w-sm">
              The coolest spot for unblocked high-speed gaming. 100% Free. 200% Awesome.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-black font-black uppercase text-sm tracking-tighter">
            <a href="#" className="hover:text-brand-pink transition-colors">Join Discord</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Help Center</a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Adam Adam's Games
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-brand-yellow comic-border border-2" />
              <div className="w-3 h-3 rounded-full bg-brand-blue comic-border border-2" />
              <div className="w-3 h-3 rounded-full bg-brand-pink comic-border border-2" />
            </div>
          </div>
        </div>
      </footer>

      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}

