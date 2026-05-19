import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, RotateCw } from 'lucide-react';

export default function GameModal({ game, onClose }) {
  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        id="game-modal-overlay"
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
        
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          className="relative w-full max-w-6xl h-full bg-zinc-900 rounded-3xl border border-white/5 flex flex-col overflow-hidden shadow-2xl"
          id="game-modal-content"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-zinc-900 border-b border-white/5">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold tracking-tight text-white">{game.title}</h2>
              <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-zinc-800 rounded-full text-zinc-400">
                {game.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-zinc-400 hover:bg-white/5 rounded-lg transition-colors" title="Reload">
                <RotateCw className="w-5 h-5" />
              </button>
              <button 
                onClick={onClose}
                className="p-2 bg-zinc-800 text-zinc-300 hover:text-white rounded-lg transition-all"
                id="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Iframe */}
          <div className="flex-1 bg-black relative">
            <iframe
              src={game.iframeUrl}
              className="w-full h-full border-none"
              title={game.title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Footer Info */}
          <div className="p-4 bg-zinc-900 border-t border-white/5 flex justify-between items-center">
            <p className="text-zinc-400 text-sm italic">{game.description}</p>
            <div className="flex gap-2">
               <button className="bg-zinc-800 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-zinc-700 transition-colors uppercase tracking-widest">
                Share
              </button>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-indigo-500 transition-colors uppercase tracking-widest">
                Full Screen
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
