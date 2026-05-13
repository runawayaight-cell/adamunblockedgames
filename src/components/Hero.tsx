import { motion } from 'motion/react';
import { Play, Sparkles } from 'lucide-react';
import { Game } from '../types';

interface HeroProps {
  game: Game;
  onPlay: (game: Game) => void;
}

export default function Hero({ game, onPlay }: HeroProps) {
  return (
    <section className="relative w-full min-h-[450px] bg-brand-orange rounded-[40px] comic-border comic-shadow-lg mt-8 flex flex-col md:flex-row items-center overflow-hidden" id="hero-section">
      <div className="flex-1 p-8 md:p-12 z-10">
        <motion.div
          initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 bg-white text-brand-pink font-black uppercase tracking-tighter px-4 py-2 rounded-full comic-border comic-shadow-sm mb-6"
        >
          <Sparkles className="w-5 h-5 fill-current" />
          Game of the day!
        </motion.div>
        
        <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tight text-black mb-6 leading-none">
          {game.title}
        </h2>
        
        <p className="text-black text-xl font-bold mb-10 max-w-lg leading-tight">
          {game.description} Curated by Adam Adam for maximum awesomeness!
        </p>
        
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onPlay(game)}
            className="flex items-center gap-3 bg-brand-yellow text-black font-display text-2xl uppercase py-5 px-10 rounded-3xl comic-border comic-shadow hover:comic-shadow-lg transition-all"
            id="hero-play-btn"
          >
            <Play className="w-8 h-8 fill-current" />
            Play Now
          </motion.button>
        </div>
      </div>

      <div className="flex-1 w-full h-full relative min-h-[300px]">
        <div className="absolute inset-0 bg-brand-yellow/20" />
        <img
          src={game.thumbnailUrl}
          alt={game.title}
          className="w-full h-full object-contain p-8 transform rotate-3"
          referrerPolicy="no-referrer"
        />
        {/* Floating Cartoon Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-brand-pink rounded-full comic-border comic-shadow-sm opacity-50 blur-sm animate-pulse" />
        <div className="absolute bottom-20 left-10 w-12 h-12 bg-brand-blue rounded-full comic-border comic-shadow-sm opacity-50 blur-sm animate-bounce" />
      </div>
    </section>
  );
}
