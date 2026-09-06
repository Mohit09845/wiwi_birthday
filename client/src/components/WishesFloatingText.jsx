import React from 'react';
import { motion } from 'framer-motion';

const floatingTextItems = [
  { text: "Happy Birthday Robiya! 🎂", color: "from-pink-400 to-rose-500", top: "10%", left: "4%", delay: 0 },
  { text: "Dangerously Cute Robiya 😏🔥", color: "from-rose-400 to-amber-300", top: "22%", left: "75%", delay: 1 },
  { text: "Who allowed you to look this fine? 😉💋", color: "from-purple-400 to-pink-400", top: "62%", left: "6%", delay: 2 },
  { text: "Special Queen Wiwi 👑", color: "from-amber-300 to-rose-400", top: "78%", left: "72%", delay: 1.5 },
  { text: "Sending 1000 Kisses & Hugs! 💋🫂", color: "from-red-400 to-pink-500", top: "42%", left: "82%", delay: 0.5 },
  { text: "Eyes blessed every time you smile! ✨😉", color: "from-emerald-300 to-pink-400", top: "86%", left: "30%", delay: 2.5 },
];

const bigStickers = [
  { symbol: "💋", size: "text-5xl sm:text-8xl", top: "16%", left: "68%", duration: 7 },
  { symbol: "💖", size: "text-6xl sm:text-9xl", top: "58%", left: "80%", duration: 9 },
  { symbol: "🫂", size: "text-5xl sm:text-8xl", top: "38%", left: "4%", duration: 8 },
  { symbol: "🎂", size: "text-4xl sm:text-7xl", top: "80%", left: "12%", duration: 6 },
  { symbol: "🎀", size: "text-5xl sm:text-8xl", top: "28%", left: "12%", duration: 10 },
  { symbol: "✨", size: "text-4xl sm:text-7xl", top: "8%", left: "38%", duration: 5 },
];

const WishesFloatingText = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transform-gpu">
      {/* Floating Colorful Text Pill Badges */}
      {floatingTextItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.7, 1, 0.7],
            y: [0, -25, 0],
            x: [0, 15, -10, 0],
            rotate: [-2, 3, -2]
          }}
          transition={{
            duration: 9 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay
          }}
          style={{ top: item.top, left: item.left }}
          className="absolute hidden sm:block"
        >
          <div className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-xs sm:text-sm shadow-lg shadow-pink-900/30 border border-white/20 backdrop-blur-xs tracking-wide text-glow-pink opacity-90`}>
            {item.text}
          </div>
        </motion.div>
      ))}

      {/* Floating Big Stickers (Kiss Marks & Hugs) */}
      {bigStickers.map((sticker, idx) => (
        <motion.div
          key={`sticker-${idx}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.4, 0.85, 0.4],
            scale: [0.9, 1.12, 0.9],
            y: [0, -30, 10, 0],
            rotate: [0, 12, -12, 0]
          }}
          transition={{
            duration: sticker.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx * 0.8
          }}
          style={{ top: sticker.top, left: sticker.left }}
          className={`absolute ${sticker.size} filter drop-shadow-[0_0_15px_rgba(244,63,94,0.5)] cursor-pointer pointer-events-auto hover:scale-125 transition-transform duration-300`}
        >
          {sticker.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default WishesFloatingText;
