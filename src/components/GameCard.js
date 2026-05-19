import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function GameCard({ game, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden cursor-pointer subtle-shadow"
      onClick={() => onClick(game)}
      id={`game-card-${game.id}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={game.thumbnailUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Play className="w-6 h-6 text-white fill-current" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white tracking-tight leading-tight truncate">
          {game.title}
        </h3>
        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mt-1 block">
          {game.category}
        </span>
      </div>
    </motion.div>
  );
}
