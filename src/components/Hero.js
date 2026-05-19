import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Hero({ game, onPlay }) {
  return (
    <section className="relative w-full min-h-[400px] bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden flex flex-col md:flex-row items-center" id="hero-section">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-transparent opacity-50" />
      
      <div className="flex-1 p-8 md:p-16 z-10">
        <div className="inline-flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-4">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Featured Game
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
          {game.title}
        </h2>
        
        <p className="text-zinc-400 text-lg mb-8 max-w-lg leading-relaxed">
          {game.description} High-speed, unblocked, and curated for the best experience.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onPlay(game)}
            className="flex items-center gap-3 bg-white text-black font-bold text-lg py-4 px-8 rounded-2xl hover:bg-zinc-200 transition-all shadow-xl"
            id="hero-play-btn"
          >
            <Play className="w-5 h-5 fill-current" />
            Launch Game
          </motion.button>
        </div>
      </div>

      <div className="flex-1 w-full h-full relative min-h-[250px] md:min-h-[400px] flex items-center justify-center p-8">
        <div className="relative group">
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
          <img
            src={game.thumbnailUrl}
            alt={game.title}
            className="relative z-10 w-full max-w-sm aspect-video object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
