import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift, Crown } from 'lucide-react';
import wiwiHero from '../assets/wiwi_hero.jpg';



const HeroBanner = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-10 z-10 overflow-hidden transform-gpu">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Romantic Greeting Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-400/40 text-pink-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-5 shadow-lg"
      >
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
        <span>DANGEROUSLY CUTE QUEEN ROBIYA</span>
        <span className="text-base">💋😏</span>
      </motion.div>

      {/* Hero Image Avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative mb-6 group cursor-pointer"
        onClick={() => onNavigate('story')}
      >
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
          <Crown className="w-10 h-10 sm:w-12 sm:h-12 text-amber-300 fill-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)] animate-pulse" />
        </div>

        {/* Glowing ring */}
        <div className="w-36 h-36 sm:w-52 sm:h-52 rounded-full p-1 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 shadow-[0_0_35px_rgba(244,63,94,0.5)]">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-pink-200/20 bg-rose-950">
            <img
              src={wiwiHero}
              alt="Wiwi Adawiyah Robiya"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Floating Kiss & Hug badges */}
        <div className="absolute -bottom-1 -right-1 bg-rose-600/90 text-white p-2 rounded-full shadow-lg border border-pink-300">
          <span className="text-base sm:text-lg">💋</span>
        </div>
        <div className="absolute top-2 -left-2 bg-pink-600/90 text-white p-2 rounded-full shadow-lg border border-pink-300">
          <span className="text-base sm:text-lg">🫂</span>
        </div>
      </motion.div>

      {/* Name and Wish Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl px-2"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold font-display tracking-tight text-white mb-2 leading-tight">
          Happy Birthday <br />
          <span className="bg-gradient-to-r from-pink-300 via-rose-400 to-amber-200 bg-clip-text text-transparent text-glow-pink font-handwriting text-4xl sm:text-6xl md:text-8xl block mt-1">
            Wiwi Adawiyah Robiya
          </span>
        </h1>

        <p className="text-base sm:text-xl text-pink-200 font-medium max-w-xl mx-auto mt-3 leading-relaxed font-handwriting">
          "Why are you looking so dangerously cute today, Robiya? 😉✨ My eyes are blessed every single time you smile! 💋🔥"
        </p>

        {/* Wish from Mohit Sharma */}
        <div className="mt-5 inline-block glass-card px-5 py-2.5 rounded-2xl border border-pink-500/30 text-rose-200">
          <p className="text-xs sm:text-base font-semibold flex items-center justify-center gap-2">
            <span>With Best Wishes & Warmest Hugs,</span>
            <span className="text-amber-300 font-bold underline decoration-rose-500 underline-offset-4">
              Mohit Sharma
            </span>
            <span className="text-base">🫂💋</span>
          </p>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-3 mt-7 w-full max-w-xl px-2"
      >
        <button
          onClick={() => onNavigate('story')}
          className="px-5 py-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-amber-500 text-white font-bold text-xs sm:text-base shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <span>KISS TO UNLOCK MEMORIES 💋🔓</span>
        </button>

        <button
          onClick={() => onNavigate('balloons')}
          className="px-4 py-3 rounded-full glass-card hover:bg-rose-500/20 text-pink-200 font-semibold text-xs sm:text-base border border-pink-400/40 shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <span>POP BALLOONS 🎈</span>
        </button>

        <button
          onClick={() => onNavigate('surprise')}
          className="px-4 py-3 rounded-full glass-card hover:bg-pink-600/30 text-rose-300 font-semibold text-xs sm:text-base border border-rose-500/50 shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <Gift className="w-4 h-4 text-amber-300" />
          <span>SURPRISE BOX 🎁</span>
        </button>

        <button
          onClick={() => onNavigate('mohit')}
          className="px-4 py-3 rounded-full bg-rose-950/80 text-amber-300 font-semibold text-xs sm:text-base border border-amber-400/40 shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <span>MOHIT'S MESSAGE & HUGS 🫂</span>
        </button>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
