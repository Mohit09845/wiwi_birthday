import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { playSoundEffect } from './AudioControl';
import { Send, Heart, Sparkles, Lock, MessageSquare, CheckCircle } from 'lucide-react';

const SecretMessageForm = () => {
  const [message, setMessage] = useState('');
  const [secretType, setSecretType] = useState('secret_thought');
  const [mood, setMood] = useState('🥰 Lovely');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [previousNotes, setPreviousNotes] = useState([]);
  const [hugCount, setHugCount] = useState(0);

  // Fetch secrets sent previously
  const fetchSecrets = async () => {
    try {
      const res = await fetch('/api/secrets');
      const data = await res.json();
      if (data.success && data.data) {
        setPreviousNotes(data.data);
      }
    } catch (e) {
      console.log('Failed to fetch secrets:', e);
    }
  };

  useEffect(() => {
    fetchSecrets();
  }, []);

  const handleSendHug = () => {
    playSoundEffect('pop');
    setHugCount((h) => h + 1);
    confetti({
      particleCount: 50,
      spread: 70,
      colors: ['#ff1493', '#ff69b4', '#ffd700']
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    playSoundEffect('fanfare');

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.8 },
      colors: ['#ff1493', '#ff69b4', '#f43f5e', '#ffd700']
    });

    try {
      const res = await fetch('/api/secrets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, secretType, mood })
      });

      const data = await res.json();

      if (data.success) {
        setSubmittedMessage(data.data);
        setMessage('');
        fetchSecrets();
      }
    } catch (err) {
      const mockNote = {
        _id: 'note_' + Date.now(),
        sender: 'Wiwi Adawiyah Robiya',
        message,
        mood,
        createdAt: new Date()
      };
      setSubmittedMessage(mockNote);
      setPreviousNotes((prev) => [mockNote, ...prev]);
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen py-12 sm:py-16 px-4 z-20 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center max-w-3xl mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-400/40 text-pink-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
          <Lock className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>ROBIYA'S SECRET & HUGS BOX</span>
          <span className="text-base">🫂💋</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
          Wiwi's Secret <span className="text-rose-400 text-glow-pink">Note for Mohit 💌</span>
        </h2>
        <p className="text-pink-200/90 text-base sm:text-xl font-handwriting mt-2 max-w-xl mx-auto">
          "Wiwi Robiya, share any secret, sweet thought, or memory with Mohit Sharma! And don't forget to send a big warm hug!"
        </p>
      </div>

      {/* Hug Request Interactive Widget */}
      <div className="mb-8 glass-card p-4 sm:p-5 rounded-2xl border border-rose-400/50 max-w-md w-full text-center shadow-lg">
        <h4 className="text-lg font-bold text-amber-300 font-display flex items-center justify-center gap-2">
          <span>Can I get a big warm birthday hug from you right now? 🫂💖</span>
        </h4>
        <button
          onClick={handleSendHug}
          className="mt-3 px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mx-auto cursor-pointer"
        >
          <span className="text-lg">🫂</span>
          <span>SEND MOHIT A BIG BIRTHDAY HUG! ({hugCount})</span>
        </button>
      </div>

      {/* Secret Message Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full glass-card p-5 sm:p-10 rounded-3xl border-2 border-rose-500/40 shadow-[0_0_60px_rgba(244,63,94,0.3)] relative overflow-hidden"
      >
        <form onSubmit={handleSubmit} className="relative z-10 space-y-5 sm:space-y-6">
          {/* Category Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-pink-200 text-xs sm:text-sm font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Type of Note</span>
              </label>
              <select
                value={secretType}
                onChange={(e) => setSecretType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-pink-500/30 text-rose-200 focus:outline-none focus:border-rose-400 transition-colors text-sm"
              >
                <option value="secret_thought">🔐 Secret Thought for Mohit</option>
                <option value="sweet_note">💖 Sweet Birthday Note</option>
                <option value="birthday_wish">🎂 Special Wish / Promise</option>
                <option value="memory">🌟 Favorite Memory</option>
              </select>
            </div>

            <div>
              <label className="block text-pink-200 text-xs sm:text-sm font-semibold mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Your Current Mood</span>
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-pink-500/30 text-rose-200 focus:outline-none focus:border-rose-400 transition-colors text-sm"
              >
                <option value="🥰 Lovely">🥰 Lovely & Happy</option>
                <option value="👑 Feeling Queen">👑 Feeling Like A Queen</option>
                <option value="😊 Shy & Cute">😊 Shy & Cute</option>
                <option value="🍓 Fruity & Sweet">🍓 Fruity & Sweet</option>
              </select>
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-pink-200 text-xs sm:text-sm font-semibold mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-pink-400" />
              <span>Write Your Secret / Note to Mohit Sharma</span>
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Mohit, here is my secret thought for you..."
              required
              className="w-full px-4 py-3.5 rounded-2xl bg-black/70 border border-rose-500/40 text-white placeholder-pink-300/40 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-500/30 transition-all font-sans text-sm sm:text-base leading-relaxed shadow-inner"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !message.trim()}
            className={`w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-600 to-amber-500 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-rose-600/40 hover:shadow-pink-500/70 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer ${
              !message.trim() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Send className="w-5 h-5" />
            <span>{isSubmitting ? 'SENDING TO MOHIT...' : 'SEND SECRET TO MOHIT 💌💋'}</span>
          </button>
        </form>

        {/* Success Alert Banner */}
        <AnimatePresence>
          {submittedMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6 p-4 rounded-2xl bg-rose-600/30 border border-rose-400 text-pink-100 flex items-start gap-3"
            >
              <CheckCircle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-300">Secret Sent Successfully! 💖</h4>
                <p className="text-xs sm:text-sm text-pink-200 mt-1">
                  "Your secret message has been delivered safely to Mohit Sharma!"
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Submitted Notes Showcase Feed */}
      {previousNotes.length > 0 && (
        <div className="max-w-2xl w-full mt-10 space-y-4">
          <h3 className="text-lg font-bold text-pink-200 text-center flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span>Wiwi's Sent Notes ({previousNotes.length})</span>
          </h3>

          {previousNotes.map((note) => (
            <motion.div
              key={note._id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-4 sm:p-5 rounded-2xl border border-pink-500/20 text-pink-100 space-y-2"
            >
              <div className="flex items-center justify-between text-xs text-pink-300">
                <span className="font-bold text-amber-300">{note.sender || 'Wiwi Adawiyah Robiya'}</span>
                <span>{note.mood}</span>
              </div>
              <p className="text-white font-handwriting text-base sm:text-lg leading-relaxed">
                "{note.message}"
              </p>
              <div className="text-right text-[11px] text-pink-400/60">
                {new Date(note.createdAt).toLocaleDateString()} at {new Date(note.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SecretMessageForm;
