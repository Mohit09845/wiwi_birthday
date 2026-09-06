import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { playSoundEffect } from './AudioControl';
import { Lock, Unlock, Sparkles, Eye, X } from 'lucide-react';

// Import all user images from assets
import catWiwi from '../assets/cat-wiwi.jpg';
import chessChoco from '../assets/chess-choco.png';
import chocoChildhood from '../assets/choco-childhood.jpg';
import chocoMohitCat from '../assets/choco-mohit-cat.jpg';
import flower1 from '../assets/flower1.jpg';
import flower2 from '../assets/flower2.jpg';
import flower3 from '../assets/flower3.jpg';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import kissWiwi from '../assets/kiss-wiwi.jpg';
import mohitCake from '../assets/mohit_cake.jpg';
import mumuChuchu from '../assets/mumu-chuchu.jpg';
import previousBirthday from '../assets/previous-birthday.jpg';
import wiwiCatPose from '../assets/wiwi-cat-pose.jpg';
import wiwiCat from '../assets/wiwi-cat.jpg';
import wiwiFav from '../assets/wiwi-fav.jpg';
import wiwiFruity from '../assets/wiwi-fruity.jpg';
import wiwiHappyMood from '../assets/wiwi-happy-mood.jpg';
import wiwiHungry from '../assets/wiwi-hungry.jpg';
import wiwiHungry2 from '../assets/wiwi-hungry2.jpg';
import wiwiMirror from '../assets/wiwi-mirror.jpg';
import wiwiMohit1 from '../assets/wiwi-mohit1.jpg';
import wiwiMohit2 from '../assets/wiwi-mohit2.jpg';
import wiwiMohit3 from '../assets/wiwi-mohit3.jpg';
import wiwiMohit4 from '../assets/wiwi-mohit4.jpg';
import wiwiMohit5 from '../assets/wiwi-mohit5.jpg';
import wiwiMohit6 from '../assets/wiwi-mohit6.jpg';
import wiwiMoment from '../assets/wiwi-moment.jpg';
import wiwiMood from '../assets/wiwi-mood.jpg';
import wiwiMood2 from '../assets/wiwi-mood2.jpg';
import wiwiMood3 from '../assets/wiwi-mood3.jpg';
import wiwiNails from '../assets/wiwi-nails.jpg';
import wiwiSleepy from '../assets/wiwi-sleepy.jpg';
import bigboobs from '../assets/bigboobs.jpg';

const storySections = [
  {
    id: 'section-1',
    title: 'Chapter 1: Dangerously Cute Queen Robiya 👑💅',
    description: 'Why are you looking so fine? Every picture steals all the attention! 😉✨',
    images: [
      { src: wiwiHappyMood, title: 'Dangerously Cute Smile 😏', caption: 'That bright, glowing smile that lights up everything around!' },
      { src: wiwiFav, title: 'Flawless Style 💖', caption: 'Looking 10/10 stylish and adorable!' },
      { src: wiwiMirror, title: 'Mirror Selfie Queen 🪞', caption: 'Who allowed you to look this fine? 🔥' },
      { src: wiwiNails, title: 'Gorgeous Nails 💅', caption: 'Aesthetic hands and beautiful nail art!' },
      { src: wiwiMood, title: 'Sweet Charm ✨', caption: 'Pure aesthetic cuteness!' },
      { src: wiwiMood2, title: 'Charming Expressions 🥰', caption: 'Eyes blessed every time you smile!' },
      { src: wiwiMood3, title: 'Charming Robiya 🎀', caption: 'Always stealing the spotlight!' },
      { src: bigboobs, title: 'Stunning Queen 👑', caption: 'Glamorous and drop-dead gorgeous!' }
    ]
  },
  {
    id: 'section-2',
    title: 'Chapter 2: Flowers & Blooming Cuteness 🌸🌷',
    description: 'Flowers bloom, but Robiya is the prettiest flower of them all! 😉💐',
    images: [
      { src: flower1, title: 'Flowers for Queen Robiya 🌹', caption: 'Who gave flowers permission to try matching Robiya\'s beauty? 😉' },
      { src: flower2, title: 'Blooming Pink Petals 💐', caption: 'Fresh, sweet, and blooming with joy!' },
      { src: flower3, title: 'Aesthetic Rose Vibes 🌷', caption: 'Soft rose petals and sweet aesthetics!' },
      { src: wiwiFruity, title: 'Fruity Sweetness 🍓', caption: 'Fresh, sweet, and delicious energy!' },
      { src: catWiwi, title: 'Soft Cat Companion 🐈', caption: 'Robiya and her fluffy cat bestie!' }
    ]
  },
  {
    id: 'section-3',
    title: 'Chapter 3: Foodie Delights & Cozy Moods 🍔🍕',
    description: 'Food tastes 10x better when shared with the cutest foodie! 😏🍟',
    images: [
      { src: food1, title: 'Feast Time! 🍔', caption: 'Warning: Extremely cute foodie in action!' },
      { src: food2, title: 'Delicious Treats 🍜', caption: 'Enjoying tasty snacks with happy eyes!' },
      { src: food3, title: 'Cravings Satisfied 🍕', caption: 'Good food + Robiya\'s company = Pure perfection!' },
      { src: wiwiHungry, title: 'Hungry Cuteness 🍩', caption: 'When food cravings hit, cuteness reaches 1000%!' },
      { src: wiwiHungry2, title: 'Treat Time! 🍦', caption: 'The happiest foodie ever!' },
      { src: wiwiSleepy, title: 'Cozy Sleepyhead 💤', caption: 'Soft, cute, sleepy cozy vibes!' }
    ]
  },
  {
    id: 'section-4',
    title: 'Chapter 4: Childhood Cuteness & Special Cats 🍼♟️',
    description: 'Adorable right from childhood to being a chess master! 🥺💖',
    images: [
      { src: chocoChildhood, title: 'Choco Childhood Memories 🍼', caption: 'Super cute and adorable right from childhood!' },
      { src: mumuChuchu, title: 'Mumu & Chuchu Cuteness 🐱', caption: 'The cutest little furry besties!' },
      { src: chessChoco, title: 'Chess Master Choco ♟️', caption: 'Smart, clever, and endlessly cute!' },
      { src: wiwiCatPose, title: 'Cute Cat Pose 🐱', caption: 'The cutest cat pose ever captured!' },
      { src: wiwiCat, title: 'Cozy Kitty Moments 🐾', caption: 'Sweet bonding with cute cats!' }
    ]
  },
  {
    id: 'section-5',
    title: 'Chapter 5: Mohit & Robiya\'s Sweetest Memories 🌟✨',
    description: 'Every picture captured together carries warmth, laughter, and sweet friendship!',
    images: [
      { src: previousBirthday, title: 'Golden Birthday Celebrations 🎈', caption: 'Unforgettable smiles and birthday candles!' },
      { src: mohitCake, title: 'Birthday Sparklers 🎂', caption: 'Glowing candles and birthday joy!' },
      { src: kissWiwi, title: 'Sweet Kisses 💋', caption: 'Sweet kiss moments filled with warmth!' },
      { src: wiwiMoment, title: 'Precious Moments 🌟', caption: 'Memories to cherish forever!' },
      { src: wiwiMohit1, title: 'Together Moment #1 📸', caption: 'Smiling bright together!' },
      { src: wiwiMohit2, title: 'Together Moment #2 💕', caption: 'Laughter and happy vibes!' },
      { src: wiwiMohit3, title: 'Together Moment #3 🌸', caption: 'Lovely moments and warm memories!' },
      { src: wiwiMohit4, title: 'Together Moment #4 ✨', caption: 'Cute candid photo!' },
      { src: wiwiMohit5, title: 'Together Moment #5 💖', caption: 'Pure joy and smiles!' },
      { src: wiwiMohit6, title: 'Together Moment #6 🌟', caption: 'Unforgettable times together!' },
      { src: chocoMohitCat, title: 'Choco & Cat Fun 🐱🍫', caption: 'Mohit pulling tail of choco!' }
    ]
  }
];

const CuteStoryTimeline = () => {
  const [unlockedSections, setUnlockedSections] = useState({
    'section-1': false,
    'section-2': false,
    'section-3': false,
    'section-4': false,
    'section-5': false
  });

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleUnlock = (sectionId, e) => {
    playSoundEffect('pop');

    const rect = e.target.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 70,
      origin: { x, y },
      colors: ['#ff1493', '#ff69b4', '#f43f5e', '#ffd700']
    });

    setUnlockedSections((prev) => ({
      ...prev,
      [sectionId]: true
    }));
  };

  return (
    <section className="relative min-h-screen py-10 sm:py-16 px-4 z-20 flex flex-col items-center transform-gpu">
      {/* Section Header */}
      <div className="text-center max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-400/40 text-pink-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
          <span>ROBIYA'S KISS-TO-UNLOCK MEMORY STORY</span>
          <span className="text-base">💋</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
          Wiwi Robiya's <span className="text-rose-400 text-glow-pink">Cute Story 📖</span>
        </h2>
        <p className="text-pink-200/90 text-sm sm:text-lg font-handwriting mt-2 max-w-xl mx-auto">
          "Each chapter of Robiya's cute memories is locked with a sweet heart lock! Give a kiss 💋 to unlock each chapter!"
        </p>
      </div>

      {/* Story Sections */}
      <div className="w-full max-w-5xl space-y-10 sm:space-y-14">
        {storySections.map((section) => {
          const isUnlocked = unlockedSections[section.id];

          return (
            <div
              key={section.id}
              className="glass-card p-5 sm:p-7 rounded-3xl border-2 border-pink-500/30 shadow-xl relative overflow-hidden transition-all duration-300"
            >
              {/* Header bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-pink-500/20">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-amber-300 font-display flex items-center gap-2">
                    <span>{section.title}</span>
                  </h3>
                  <p className="text-pink-200/80 text-xs sm:text-sm font-handwriting mt-1">
                    {section.description}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  {isUnlocked ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/30 border border-emerald-400 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                      <Unlock className="w-3.5 h-3.5" /> UNLOCKED 💋
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/40 border border-rose-400 text-pink-200 text-xs font-bold uppercase tracking-wider animate-pulse">
                      <Lock className="w-3.5 h-3.5 text-amber-300" /> LOCKED 🔒
                    </span>
                  )}
                </div>
              </div>

              {/* Content area: Locked View vs Unlocked Grid */}
              {!isUnlocked ? (
                <div className="py-10 px-4 text-center bg-black/40 rounded-2xl border border-pink-500/20 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-rose-950/80 border-2 border-rose-400/50 flex items-center justify-center text-rose-400 shadow-md animate-bounce">
                    <Lock className="w-8 h-8 text-amber-300" />
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white font-handwriting">
                    This Memory Chapter is Locked!
                  </h4>
                  <p className="text-pink-300 text-xs max-w-sm">
                    Robiya, tap the kiss button below to unlock all {section.images.length} cute photos in this chapter!
                  </p>

                  <button
                    onClick={(e) => handleUnlock(section.id, e)}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-amber-500 text-white font-extrabold text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-lg">💋</span>
                    <span>KISS TO UNLOCK 🔓</span>
                  </button>
                </div>
              ) : (
                /* Unlocked Photos Grid */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5"
                >
                  {section.images.map((img, imgIdx) => (
                    <motion.div
                      key={imgIdx}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedPhoto(img)}
                      className="glass-card rounded-2xl overflow-hidden border border-pink-400/30 group cursor-pointer shadow-md hover:shadow-pink-500/40 transition-all duration-200 flex flex-col"
                    >
                      <div className="relative h-40 sm:h-52 w-full overflow-hidden bg-black/60">
                        <img
                          src={img.src}
                          alt={img.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="p-2 rounded-full bg-rose-600/90 text-white shadow-lg">
                            <Eye className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      <div className="p-3 flex-1 flex flex-col justify-between bg-black/50">
                        <div>
                          <h5 className="text-xs sm:text-sm font-bold text-amber-300 font-display line-clamp-1">
                            {img.title}
                          </h5>
                          <p className="text-pink-200/90 text-[11px] sm:text-xs font-handwriting mt-0.5 line-clamp-2 leading-tight">
                            {img.caption}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full glass-card p-3 sm:p-5 rounded-3xl border border-pink-400/50 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 hover:bg-rose-600 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[65vh] rounded-2xl overflow-hidden mb-3 bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain max-h-[65vh] mx-auto"
                />
              </div>

              <div className="text-center px-2 py-1">
                <h4 className="text-lg sm:text-xl font-bold text-amber-300 font-display">
                  {selectedPhoto.title}
                </h4>
                <p className="text-pink-200 text-xs sm:text-sm font-handwriting mt-0.5">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CuteStoryTimeline;
