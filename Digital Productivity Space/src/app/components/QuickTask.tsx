import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

interface QuickTaskProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function QuickTask({ id, text, completed, onToggle, onDelete }: QuickTaskProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="group flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onToggle(id)}
        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
          completed
            ? 'bg-white border-white'
            : 'border-white/30 hover:border-white/50'
        }`}
      >
        {completed && <Check className="w-3 h-3 text-black" />}
      </motion.button>
      
      <span
        className={`flex-1 transition-all ${
          completed ? 'text-white/30 line-through' : 'text-white/90'
        }`}
      >
        {text}
      </span>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white/80"
      >
        <X className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}
