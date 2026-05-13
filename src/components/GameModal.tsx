import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, RotateCw } from 'lucide-react';
import { Game } from '../types';

interface GameModalProps {
  game: Game | null;
  onClose: () => void;
}

export default function GameModal({ game, onClose }: GameModalProps) {
  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-12"
        id="game-modal-overlay"
      >
        <div className="absolute inset-0 bg-brand-pink/20 backdrop-blur-sm" onClick={onClose} />
        
        <motion.div
          initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
          transition={{ type: "spring", damping: 15 }}
          className="relative w-full max-w-6xl h-full bg-white rounded-[40px] comic-border comic-shadow-lg flex flex-col overflow-hidden"
          id="game-modal-content"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-brand-yellow border-b-4 border-black">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-display uppercase tracking-tight text-black">{game.title}</h2>
              <span className="hidden sm:inline-block text-xs font-black uppercase tracking-widest px-4 py-2 bg-brand-green rounded-full border-2 border-black">
                {game.category}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-3 bg-white hover:bg-brand-orange rounded-2xl comic-border comic-shadow-sm active:translate-y-1 active:shadow-none transition-all group" title="Reload">
                <RotateCw className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              </button>
              <button 
                onClick={onClose}
                className="p-3 bg-brand-pink text-white rounded-2xl comic-border comic-shadow-sm hover:scale-110 active:translate-y-1 active:shadow-none transition-all"
                id="close-modal-btn"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Iframe */}
          <div className="flex-1 bg-zinc-200 relative p-4">
            <div className="w-full h-full bg-black rounded-3xl overflow-hidden border-4 border-black box-content -m-1">
              <iframe
                src={game.iframeUrl}
                className="w-full h-full border-none"
                title={game.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Footer Info */}
          <div className="p-6 bg-brand-orange border-t-4 border-black font-bold flex justify-between items-center">
            <p className="text-black italic">"{game.description}"</p>
            <button className="bg-brand-blue text-white px-6 py-2 rounded-full comic-border comic-shadow-sm active:translate-y-1 active:shadow-none font-display uppercase tracking-tighter">
              Full Screen Mode
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
