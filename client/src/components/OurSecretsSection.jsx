import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import { playSoundEffect } from './AudioControl';
import confetti from 'canvas-confetti';

const secretsList = [
  {
    id: 1,
    title: 'Secret #1: Matching Moles 📍',
    content: 'We both have a mole on our chest and face! Such a sweet matching coincidence!'
  },
  {
    id: 2,
    title: 'Secret #2: The Bee Bite 🐝',
    content: 'We both got a bee bite on the exact same hand and exact same place on our palm!'
  },
  {
    id: 3,
    title: 'Secret #3: Special Secret Note 🤫',
    content: 'you have m size boobs and m size ass and your pussy hole is small with clit coming out'
  },
  {
    id: 4,
    title: 'Secret #4: Movie Marathon & Tudor 🎬🍿',
    content: 'We both watched Tudor and so many amazing movies together!'
  },
  {
    id: 5,
    title: 'Secret #5: Sweet Kisses 💋',
    content: 'I love when you give me sweet kisses!'
  },
  {
    id: 6,
    title: 'Secret #6: Teasing Moments 🙈',
    content: 'You saw my cute legendary panties ehhhh! 🙈'
  },
  {
    id: 7,
    title: 'Secret #7: Private Special Code 🔐',
    content: 'We both watched porn together first time hehehe'
  },
  {
    id: 8,
    title: 'Secret #8: Mumu & Chuchu Smiles 🥰',
    content: 'I love when you smile bright and call me Mumu!'
  },
  {
    id: 9,
    title: 'Secret #9: Gorgeous Nails 💅',
    content: 'I really, really love your beautiful nails and eyes!'
  }
];

const OurSecretsSection = () => {
  const [unlockedSecrets, setUnlockedSecrets] = useState({});

  const handleUnlockSecret = (id, e) => {
    playSoundEffect('pop');

    const rect = e.target.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors: ['#ff1493', '#ff69b4', '#ffd700']
    });

    setUnlockedSecrets((prev) => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <section className="relative py-12 sm:py-16 px-4 z-20 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-400/40 text-pink-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
          <span>OUR PRIVATE SECRET MEMORIES</span>
          <span className="text-base">🤫💖</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
          Mohit & Robiya's <span className="text-rose-400 text-glow-pink">Secret Box 🔒</span>
        </h2>
        <p className="text-pink-200/90 text-sm sm:text-lg font-handwriting mt-2 max-w-xl mx-auto">
          "Tap on each secret lock to reveal our private memories and sweet moments together!"
        </p>
      </div>

      {/* Secrets Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {secretsList.map((item) => {
          const isUnlocked = unlockedSecrets[item.id];

          return (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-5 rounded-3xl border border-pink-500/30 shadow-lg flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h4 className="text-base font-bold text-amber-300 font-display">
                    {item.title}
                  </h4>
                  {isUnlocked ? (
                    <Unlock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <Lock className="w-4 h-4 text-rose-400 flex-shrink-0 animate-pulse" />
                  )}
                </div>

                {!isUnlocked ? (
                  <div className="py-6 text-center space-y-2 bg-black/40 rounded-2xl border border-pink-500/20">
                    <p className="text-xs text-pink-300 font-handwriting">
                      Tap kiss to unlock this secret! 💋
                    </p>
                    <button
                      onClick={(e) => handleUnlockSecret(item.id, e)}
                      className="px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5 mx-auto"
                    >
                      <span>💋 UNLOCK SECRET</span>
                    </button>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3.5 rounded-2xl bg-black/60 border border-pink-400/30 text-pink-100 font-handwriting text-base leading-relaxed"
                  >
                    "{item.content}"
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Prominent Heartfelt Message Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-900/90 via-pink-900/90 to-rose-950/90 border-2 border-amber-400/70 shadow-[0_0_60px_rgba(244,63,94,0.5)] text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Heart className="w-32 h-32 text-rose-300 fill-rose-300" />
        </div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>FOREVER PROMISE</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-extrabold font-handwriting text-amber-300 text-glow-gold leading-tight">
            "I am always there for you in every situation no matter what!"
          </h3>

          <div className="pt-2">
            <p className="text-xl sm:text-3xl font-extrabold text-pink-200 font-display text-glow-pink">
              Your Mumu is for you, my Chuchu! 🫂💋💖
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurSecretsSection;
