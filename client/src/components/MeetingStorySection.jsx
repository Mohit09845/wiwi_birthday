import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

import chessChoco from '../assets/chess-choco.png';
import chocoMohitCat from '../assets/choco-mohit-cat.jpg';
import wiwiMohit2 from '../assets/wiwi-mohit2.jpg';
import wiwiMohit3 from '../assets/wiwi-mohit3.jpg';
import wiwiMohit6 from '../assets/wiwi-mohit6.jpg';
import mumuChuchu from '../assets/mumu-chuchu.jpg';

const storyChapters = [
  {
    id: 1,
    emoji: '🌑',
    label: 'The Lost Chapter',
    title: 'Drifting Alone…',
    color: 'from-slate-700/80 to-slate-900/80',
    borderColor: 'border-slate-500/40',
    glowColor: 'shadow-slate-500/20',
    text: `Every story has a before. For Mohit, it was a quiet, hollow stretch of time — old friendships had slowly crumbled, and the group chats he once lived in started feeling like ghost towns. He wasn't broken, just... drifting. Looking for something he couldn't name.

Then one day, in a random Telegram English-Uzbek group, a name appeared. Robiya.`,
    image: null
  },
  {
    id: 2,
    emoji: '🤝',
    label: 'First Hello',
    title: 'A Stranger in the Group',
    color: 'from-indigo-900/80 to-slate-900/80',
    borderColor: 'border-indigo-500/40',
    glowColor: 'shadow-indigo-500/20',
    text: `She wasn't having her best days. Her father had passed away recently, and the grief sat heavy on her shoulders. Mohit noticed her — not romantically at first, just humanly. He reached out.

They talked. He gave her advice. She shared her heart a little — cautiously, like testing the temperature of water before diving in. She even asked him about some confusing situation with her ex. And then, there was Axrorjon — another complicated chapter of her life she cautiously walked him through.

Mohit listened. That was enough to begin.`,
    image: null
  },
  {
    id: 3,
    emoji: '🎭',
    label: 'The Mafia Games',
    title: 'Cheater Caught. Account Blocked. 😂',
    color: 'from-purple-900/80 to-rose-950/80',
    borderColor: 'border-purple-500/40',
    glowColor: 'shadow-purple-500/20',
    text: `Then came Mafia nights on Telegram — the group games that reveal people's true personalities. Mohit, being the chaotic genius he is, didn't just play… he showed up with THREE accounts to cheat his way through the game. 😂

Robiya — sharp as ever — caught on. And promptly BLOCKED him. No warnings. No appeals. Done.

But the story doesn't end there. Not long after, Mohit was in a voice chat with Whozrew, and in true Mohit fashion... he made fun of Robiya. Out loud. In front of everyone.

Somehow — she unblocked him after. (We're still not entirely sure why. Maybe she found it funny. Maybe she's too kind. Maybe both.)`,
    image: null
  },
  {
    id: 4,
    emoji: '🌱',
    label: 'Growing Closer',
    title: 'She Started Sharing Things…',
    color: 'from-emerald-900/80 to-teal-950/80',
    borderColor: 'border-emerald-500/40',
    glowColor: 'shadow-emerald-500/20',
    text: `After the block-unblock drama, something shifted. Choco — as Mohit now called her — started opening up, slowly and carefully. Little things at first. Thoughts, feelings, pieces of her everyday life. 

They were getting closer. But there was still a comfortable distance — like two people standing at the edge of a frozen lake, not quite ready to step onto the ice together. Close, but careful.`,
    image: wiwiMohit3
  },
  {
    id: 5,
    emoji: '♟️',
    label: 'Chess & Movies',
    title: 'Mohit Taught Choco Chess 👑',
    color: 'from-amber-900/80 to-rose-950/80',
    borderColor: 'border-amber-500/40',
    glowColor: 'shadow-amber-500/20',
    text: `Then came the chess era. Mohit sat down — virtually — and taught Robiya how to play chess. Move by move, piece by piece. She was learning. He was teaching. And somewhere in between the pawns and bishops, they were spending real, genuine time together.

Then came the movie nights. They'd pick something, hit play, and watch it together. Commentary, reactions, teasing each other about who cried — all of it. Those were the real moments. Simple, warm, impossible to fake.

And oh, the teasing. A LOT of teasing. Like two people who know exactly which buttons to press and press them anyway — because it makes the other laugh.`,
    image: chessChoco
  },
  {
    id: 6,
    emoji: '📞',
    label: 'The Calls',
    title: 'Secrets Exchanged on Late Night Calls…',
    color: 'from-rose-900/80 to-pink-950/80',
    borderColor: 'border-rose-500/40',
    glowColor: 'shadow-rose-500/20',
    text: `Then the calls started. Long ones. Deep ones.

Robiya told him things — a lot of things. Secrets she probably hadn't spoken out loud to many people. And Mohit? He did the same. All of it. The real stuff. The raw stuff. The things you only say when you trust someone completely.

There's something that happens when two people share their secrets without fear of judgment. The walls come down. The real versions of people show up.

That's what happened here.`,
    image: wiwiMohit6
  },
  {
    id: 7,
    emoji: '🪞',
    label: 'Like Mirrors',
    title: 'We Know Everything About Each Other',
    color: 'from-fuchsia-900/80 to-rose-950/80',
    borderColor: 'border-fuchsia-500/40',
    glowColor: 'shadow-fuchsia-500/20',
    text: `Now? They're like mirrors. Mohit knows Robiya's stories, her fears, her favorite things, her moods. Robiya knows his — all of them. The good parts, the embarrassing parts, the parts nobody else knows.

Slowly, without a formal announcement, without a label — Mohit started feeling something more. More invested. More interested. More... at home when she's around. Like Robiya is just his own person, naturally.

Maybe Robiya feels something too. Maybe. Mohit isn't entirely sure. But he suspects.

And this is where the story is right now — not a fairytale ending, not a grand confession — just two people who found each other in the most unexpected place, and somehow can't imagine not having the other around.`,
    image: mumuChuchu
  }
];

const MeetingStorySection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-12 sm:py-20 px-4 z-20 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-3xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-400/40 text-pink-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
          <span>HOW IT ALL BEGAN</span>
          <span className="text-base">📖💫</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white font-display"
        >
          The Story of{' '}
          <span className="text-rose-400 text-glow-pink">Mohit & Choco 🍫</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-pink-200/80 text-sm sm:text-lg font-handwriting mt-3 max-w-2xl mx-auto"
        >
          "From a random Telegram group to knowing each other's deepest secrets — this is how two strangers became something beautifully undefined. 🌙"
        </motion.p>
      </div>

      {/* Photo Banner - 3 pics */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl grid grid-cols-3 gap-3 sm:gap-4 mb-14"
      >
        {[
          { src: chessChoco, label: 'Chess Lessons ♟️' },
          { src: chocoMohitCat, label: 'Our Vibe Together 🐱' },
          { src: wiwiMohit2, label: 'Mohit & Choco Moments 💕' }
        ].map((photo, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04, y: -4 }}
            className="relative rounded-2xl overflow-hidden border-2 border-pink-500/30 shadow-lg shadow-rose-900/40 aspect-[3/4] sm:aspect-square"
          >
            <img
              src={photo.src}
              alt={photo.label}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
              <p className="text-white text-[10px] sm:text-xs font-bold text-center">
                {photo.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Story Timeline */}
      <div className="w-full max-w-3xl space-y-4">
        {storyChapters.map((chapter, idx) => {
          const isOpen = expandedId === chapter.id;
          return (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              {/* Chapter Card */}
              <div
                className={`rounded-3xl border ${chapter.borderColor} bg-gradient-to-br ${chapter.color} shadow-lg ${chapter.glowColor} overflow-hidden`}
              >
                {/* Header / Toggle Button */}
                <button
                  onClick={() => toggle(chapter.id)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="text-3xl sm:text-4xl flex-shrink-0">{chapter.emoji}</span>
                    <div className="min-w-0">
                      <span className="block text-[10px] sm:text-xs text-pink-300 font-bold uppercase tracking-widest">
                        {chapter.label}
                      </span>
                      <h3 className="text-base sm:text-xl font-extrabold text-white font-display leading-snug">
                        {chapter.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0 p-2 rounded-full bg-white/10 group-hover:bg-rose-600/50 transition-colors">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-pink-200" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-pink-200" />
                    )}
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-5 sm:pb-6 space-y-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

                        {chapter.image && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="w-full max-h-64 sm:max-h-80 rounded-2xl overflow-hidden border border-pink-400/20"
                          >
                            <img
                              src={chapter.image}
                              alt={chapter.title}
                              className="w-full h-full object-cover object-top"
                            />
                          </motion.div>
                        )}

                        <p className="text-pink-100/90 font-handwriting text-base sm:text-lg leading-relaxed whitespace-pre-line">
                          {chapter.text}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Closing Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-14 w-full max-w-3xl p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-rose-950/90 via-pink-900/80 to-fuchsia-950/90 border-2 border-amber-400/50 shadow-[0_0_80px_rgba(244,63,94,0.4)] text-center relative overflow-hidden"
      >
        {/* Background glow hearts */}
        <div className="absolute -top-6 -right-6 opacity-10">
          <Heart className="w-40 h-40 text-rose-300 fill-rose-300" />
        </div>
        <div className="absolute -bottom-8 -left-8 opacity-10">
          <Heart className="w-32 h-32 text-rose-300 fill-rose-300" />
        </div>

        <div className="relative z-10">
          <p className="text-pink-300 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            📖 And the story continues…
          </p>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-handwriting text-amber-300 text-glow-gold leading-tight mb-4">
            "No labels. No rush. Just two people who somehow became home to each other and sometimes miss you when you are not here."
          </h3>
          <p className="text-pink-200 text-sm sm:text-lg font-medium max-w-xl mx-auto">
            Maybe it's friendship. Maybe it's something more. Whatever it is — it's real, it's warm, and on your birthday, Choco, Mohit just wants you to know…
          </p>
          <p className="mt-4 text-xl sm:text-3xl font-extrabold text-rose-300 font-display text-glow-pink">
            He's really, really glad he met you and he really feels so comfortabe with you. 💖🫂
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default MeetingStorySection;
