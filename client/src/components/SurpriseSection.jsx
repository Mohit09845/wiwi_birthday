import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { playSoundEffect } from './AudioControl';
import { Gift, Sparkles, Heart, ChevronRight, ChevronLeft } from 'lucide-react';

import wiwiSurprise from '../assets/wiwi_surprise.png';
import wiwiMohit1 from '../assets/wiwi-mohit1.jpg';
import wiwiMohit2 from '../assets/wiwi-mohit2.jpg';
import wiwiMohit3 from '../assets/wiwi-mohit3.jpg';

const galleryPhotos = [
  {
    id: 1,
    url: wiwiMohit1,
    title: 'Mohit & Choco Eating Moment 🍔',
    caption: 'Eating delicious snacks and making sweet memories together!'
  },
  {
    id: 2,
    url: wiwiMohit2,
    title: 'Mohit & Choco Lift Moment 💕',
    caption: 'Lifting you up with sweet smiles and joyful moments!'
  },
  {
    id: 3,
    url: wiwiMohit3,
    title: 'Mohit & Choco Nature Moment 🌸',
    caption: 'Beautiful nature vibes and lovely sweet memories together!'
  }
];

const SurpriseSection = () => {
  const [unwrapped, setUnwrapped] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const handleUnwrap = () => {
    playSoundEffect('fanfare');

    const count = 180;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ff69b4', '#ffd700'] });
    fire(0.2, { spread: 60, colors: ['#ff1493', '#ffffff'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });

    setUnwrapped(true);
  };

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % galleryPhotos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  return (
    <section className="relative min-h-screen py-12 sm:py-16 px-4 z-20 flex flex-col items-center justify-center">
      {/* Container header */}
      <div className="text-center max-w-3xl mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-400/40 text-pink-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
        >
          <Gift className="w-4 h-4 text-amber-300 animate-bounce" />
          <span>MOHIT'S SPECIAL BIRTHDAY SURPRISE</span>
          <span className="text-base">💋</span>
        </motion.div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
          Robiya's Birthday <span className="text-rose-400 text-glow-pink">Surprise 🎁</span>
        </h2>
        <p className="text-pink-200/90 text-base sm:text-xl font-handwriting mt-2">
          "Tap on the magical surprise box below to unlock sweet birthday wishes and photos!"
        </p>
      </div>

      {/* Main Surprise Card Box */}
      {!unwrapped ? (
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleUnwrap}
          className="relative max-w-md w-full glass-card p-5 sm:p-6 rounded-3xl border-2 border-rose-500/40 shadow-[0_0_50px_rgba(244,63,94,0.4)] cursor-pointer group text-center overflow-hidden"
        >
          <div className="relative z-10">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-5 border-2 border-pink-300/30">
              <img
                src={wiwiSurprise}
                alt="Birthday Surprise Box"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="bg-rose-600/90 text-white p-4 rounded-full shadow-2xl animate-pulse group-hover:scale-125 transition-transform">
                  <Gift className="w-10 h-10" />
                </div>
              </div>
            </div>

            <button
              onClick={handleUnwrap}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-600 to-amber-500 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-rose-600/40 hover:shadow-pink-500/70 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 animate-spin" />
              <span>UNWRAP SURPRISE BOX! 🎁💋</span>
            </button>
          </div>
        </motion.div>
      ) : (
        /* Unwrapped Revealed Section */
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="max-w-3xl w-full glass-card p-5 sm:p-8 rounded-3xl border-2 border-rose-400/60 shadow-[0_0_80px_rgba(244,63,94,0.6)] text-center relative"
        >
          {/* Sweet Kisses & Birthday Wish Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-rose-900/80 via-pink-900/80 to-rose-950/80 border-2 border-amber-400/60 shadow-2xl"
          >
            <h3 className="text-2xl sm:text-4xl font-extrabold font-handwriting text-amber-300 text-glow-gold">
              Something immensely special, sweet, and adorable is waiting for you, my queen! 💋😘✨
            </h3>
            <p className="text-pink-200 mt-2 text-sm sm:text-lg font-medium max-w-xl mx-auto">
              "Sending you endless sweetness, smiles, and warm birthday hugs from Mohit! 🫂💖"
            </p>
          </motion.div>

          {/* Wiwi's Photo Gallery Carousel */}
          <div className="relative mb-4">
            <h4 className="text-xl font-bold text-white mb-3 flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <span>Robiya's Birthday Spotlight</span>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            </h4>

            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border-2 border-pink-400/40 shadow-2xl bg-black/60">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePhotoIdx}
                  src={galleryPhotos[activePhotoIdx].url}
                  alt={galleryPhotos[activePhotoIdx].title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-rose-600 text-white border border-pink-300/30 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-rose-600 text-white border border-pink-300/30 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Caption Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-left">
                <h5 className="text-lg font-bold text-amber-300 font-display">
                  {galleryPhotos[activePhotoIdx].title}
                </h5>
                <p className="text-pink-100 text-xs sm:text-sm font-handwriting mt-0.5">
                  {galleryPhotos[activePhotoIdx].caption}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setUnwrapped(false)}
            className="mt-2 px-5 py-2 rounded-full glass-card text-pink-300 hover:text-white border border-pink-500/30 text-xs font-semibold transition-all cursor-pointer"
          >
            Wrap Box Back 🎁
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default SurpriseSection;
