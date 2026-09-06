import React from 'react';
import { Heart, Crown, ArrowUp } from 'lucide-react';

const Footer = ({ onScrollTop }) => {
  return (
    <footer className="relative z-20 py-12 px-4 border-t border-rose-500/20 bg-black/80 backdrop-blur-md text-center text-pink-200">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-2 text-rose-400">
          <Crown className="w-6 h-6 text-amber-300 fill-amber-300" />
          <span className="font-handwriting text-2xl font-bold">Wiwi Adawiyah Robiya</span>
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
        </div>

        <p className="text-sm sm:text-base text-pink-300/80 font-medium max-w-lg mx-auto">
          "Crafted with infinite love, affection, and happiness for the most special girl. Happy Birthday!"
        </p>

        <div className="glass-card inline-block px-6 py-2.5 rounded-full border border-pink-500/30">
          <p className="text-sm font-semibold text-rose-300">
            Designed & Created with Endless Love by <span className="text-amber-300 font-bold">Mohit Sharma 💖</span>
          </p>
        </div>

        <div>
          <button
            onClick={onScrollTop}
            className="inline-flex items-center gap-2 text-xs font-bold text-pink-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
