import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { playSoundEffect } from './AudioControl';
import { Heart, Sparkles } from 'lucide-react';

const balloonColors = [
  { bg: 'from-pink-500 to-rose-600', shadow: 'rgba(244, 63, 94, 0.5)' },
  { bg: 'from-amber-400 to-rose-500', shadow: 'rgba(251, 191, 36, 0.5)' },
  { bg: 'from-purple-500 to-pink-600', shadow: 'rgba(168, 85, 247, 0.5)' },
  { bg: 'from-red-500 to-pink-700', shadow: 'rgba(239, 68, 68, 0.5)' },
  { bg: 'from-rose-400 to-amber-300', shadow: 'rgba(251, 113, 133, 0.5)' },
];

const wishesPool = [
  "Why are you so dangerously cute today Robiya? 😏🔥",
  "You owe Mohit a big warm birthday hug right now! 🫂💋",
  "10/10 Cuteness rating confirmed! 😉✨",
  "Eyes blessed every single time you smile! 💋✨",
  "If you are happy then give a long kiss to Mohit! 😉💖",
  "Happy Birthday Queen Wiwi Robiya! 👑💋"
];

const BalloonPop = () => {
  const [balloons, setBalloons] = useState([]);
  const [popCount, setPopCount] = useState(0);
  const [activeWish, setActiveWish] = useState(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const maxBalloons = isMobile ? 6 : 9;

    const interval = setInterval(() => {
      setBalloons((prev) => {
        if (prev.length >= maxBalloons) return prev;
        const newBalloon = {
          id: Date.now() + Math.random(),
          left: Math.random() * 80 + 10,
          color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
          speed: Math.random() * 6 + 10,
          size: Math.random() * 15 + (isMobile ? 60 : 75),
          wish: wishesPool[Math.floor(Math.random() * wishesPool.length)]
        };
        return [...prev, newBalloon];
      });
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  const handlePop = (id, wish, e) => {
    e.stopPropagation();
    playSoundEffect('pop');

    const rect = e.target.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { x, y },
      colors: ['#ff69b4', '#ff1493', '#ffd700', '#ff4500']
    });

    setPopCount((c) => c + 1);
    setActiveWish(wish);

    setBalloons((prev) => prev.filter((b) => b.id !== id));

    setTimeout(() => {
      setActiveWish(null);
    }, 3000);
  };

  return (
    <div className="relative min-h-[50vh] py-10 px-4 z-20 flex flex-col items-center justify-center transform-gpu">
      {/* Section Header */}
      <div className="text-center max-w-2xl mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-300 text-xs sm:text-sm mb-2">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>INTERACTIVE BIRTHDAY FUN</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
          Pop Robiya's <span className="text-rose-400 text-glow-pink">Love Balloons 🎈</span>
        </h2>
        <p className="text-pink-200/80 mt-1 text-xs sm:text-base font-handwriting">
          Click the floating balloons to pop them and unlock playful birthday notes from Mohit!
        </p>

        {/* Counter Badge */}
        <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-500/40 text-amber-300 font-bold text-xs sm:text-sm shadow-md">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>Balloons Popped: {popCount} 🎈</span>
        </div>
      </div>

      {/* Wish Display Toast */}
      <AnimatePresence>
        {activeWish && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 z-50 px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-xs sm:text-base shadow-xl border border-pink-300 flex items-center gap-2.5 backdrop-blur-md animate-bounce max-w-[90vw] text-center"
          >
            <span className="text-xl">💌</span>
            <span>{activeWish}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Balloon Container */}
      <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden rounded-3xl glass-card border border-pink-500/20 shadow-xl">
        {balloons.map((balloon) => (
          <motion.div
            key={balloon.id}
            initial={{ y: '110%', opacity: 0.9, x: 0 }}
            animate={{
              y: '-20%',
              x: [0, 12, -12, 0],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              y: { duration: balloon.speed, ease: 'linear' },
              x: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }}
            style={{
              left: `${balloon.left}%`,
              width: `${balloon.size}px`,
              height: `${balloon.size * 1.25}px`
            }}
            onClick={(e) => handlePop(balloon.id, balloon.wish, e)}
            className="absolute bottom-0 cursor-pointer group select-none pointer-events-auto"
          >
            {/* Balloon Body */}
            <div
              className={`w-full h-full rounded-t-full rounded-b-[45%] bg-gradient-to-tr ${balloon.color.bg} flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110`}
            >
              <span className="text-white/90 font-bold text-[10px] sm:text-xs">Pop Me!</span>
            </div>
            <div className="w-1.5 h-1.5 bg-pink-700 mx-auto -mt-1 rounded-sm" />
            <div className="w-0.5 h-10 bg-pink-300/40 mx-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BalloonPop;
