import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { playSoundEffect } from './AudioControl';
import { Sparkles, Heart, Crown, Award } from 'lucide-react';
import mohitImg from '../assets/mohit.jpg';

const MohitEndingSection = () => {
  const [hugSent, setHugSent] = useState(false);

  const handleSendBigHug = () => {
    playSoundEffect('fanfare');
    setHugSent(true);

    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.7 },
      colors: ['#ff1493', '#ff69b4', '#ffd700', '#ec4899']
    });
  };

  return (
    <section className="relative py-16 px-4 z-20 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full glass-card p-6 sm:p-10 rounded-3xl border-2 border-amber-400/50 shadow-[0_0_80px_rgba(251,191,36,0.3)] relative overflow-hidden"
      >
        {/* Glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
            <span>WITH WARMEST WISHES FROM MOHIT</span>
            <span className="text-base">🫂💋</span>
          </div>

          {/* Mohit Sharma's Portrait Image Frame */}
          <div className="relative mx-auto w-44 h-44 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-r from-amber-300 via-rose-500 to-pink-500 shadow-[0_0_40px_rgba(251,191,36,0.6)]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-amber-200/30 bg-rose-950">
              <img
                src={mohitImg}
                alt="Mohit Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 right-4 bg-amber-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
              <Crown className="w-3.5 h-3.5" />
              <span>Mohit Sharma</span>
            </div>
          </div>

          <div>
            <h3 className="text-3xl sm:text-5xl font-extrabold font-handwriting text-amber-300 text-glow-gold">
              Happy Birthday Wiwi Adawiyah Robiya! 💋😘✨
            </h3>
            <p className="text-pink-100 text-base sm:text-xl font-handwriting mt-3 leading-relaxed max-w-lg mx-auto">
              "Something immensely special, sweet, and adorable is waiting for you, my queen! May your days be filled with endless smiles, pure joy, and sweetness!"
            </p>
          </div>

          {/* Big Hug Request Box */}
          <div className="p-5 rounded-2xl bg-black/60 border border-pink-400/30 space-y-3">
            <h4 className="text-lg font-bold text-pink-200 flex items-center justify-center gap-2">
              <span className="text-2xl">🫂</span>
              <span>Can I get the biggest, warmest birthday hug from you right now, Robiya?</span>
            </h4>

            {!hugSent ? (
              <button
                onClick={handleSendBigHug}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-amber-500 text-white font-extrabold text-base shadow-xl shadow-rose-600/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 mx-auto cursor-pointer"
              >
                <span className="text-xl">🫂</span>
                <span>GIVE MOHIT A BIG BIRTHDAY HUG! 💖💋</span>
              </button>
            ) : (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="p-3 rounded-xl bg-emerald-600/30 border border-emerald-400 text-emerald-200 font-bold text-base animate-bounce flex items-center justify-center gap-2"
              >
                <span>HUG DELIVERED SUCCESSFULLY! 🫂💖💋</span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MohitEndingSection;
