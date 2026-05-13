import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

export default function GameCard({ game, onClick }: GameCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="group relative bg-white rounded-3xl comic-border comic-shadow hover:comic-shadow-lg transition-all cursor-pointer p-3 flex flex-col items-center"
      onClick={() => onClick(game)}
      id={`game-card-${game.id}`}
    >
      <div className="w-full aspect-square relative rounded-2xl overflow-hidden border-4 border-black">
        <img
          src={game.thumbnailUrl}
          alt={game.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-yellow/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="p-4 bg-white rounded-2xl comic-border comic-shadow-sm animate-bounce">
            <Play className="w-10 h-10 text-brand-pink fill-current" />
          </div>
        </div>
      </div>
      <div className="w-full mt-4 text-center">
        <h3 className="font-display text-xl uppercase tracking-tighter text-black leading-none truncate px-2">
          {game.title}
        </h3>
        <div className="inline-block mt-2 px-3 py-1 bg-brand-green text-black text-[10px] font-bold uppercase rounded-full border-2 border-black">
          {game.category}
        </div>
      </div>
    </motion.div>
  );
}
