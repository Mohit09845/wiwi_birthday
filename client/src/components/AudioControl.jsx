import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Heart } from 'lucide-react';

// Sound effect utility exported for other components
export const playSoundEffect = (type = 'pop') => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    if (type === 'pop') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === 'fanfare') {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.5);
      });
    }
  } catch (e) {
    // Ignore audio restrictions if user hasn't interacted
  }
};

const AudioControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const isLoopingRef = useRef(false);

  const toggleMusic = () => {
    if (isPlaying) {
      isLoopingRef.current = false;
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      startSynthesizedMelody();
      setIsPlaying(true);
    }
  };

  const startSynthesizedMelody = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      } else if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      isLoopingRef.current = true;
      playMelodyLoop();
    } catch (e) {
      console.log('Audio init failed:', e);
    }
  };

  const playMelodyLoop = () => {
    if (!isLoopingRef.current || !audioCtxRef.current) return;
    const ctx = audioCtxRef.current;

    // Happy Birthday romantic music sequence notes (freq in Hz)
    const melody = [
      { f: 261.63, d: 0.3 }, { f: 261.63, d: 0.3 }, { f: 293.66, d: 0.6 }, { f: 261.63, d: 0.6 }, { f: 349.23, d: 0.6 }, { f: 329.63, d: 1.0 },
      { f: 261.63, d: 0.3 }, { f: 261.63, d: 0.3 }, { f: 293.66, d: 0.6 }, { f: 261.63, d: 0.6 }, { f: 392.00, d: 0.6 }, { f: 349.23, d: 1.0 },
      { f: 261.63, d: 0.3 }, { f: 261.63, d: 0.3 }, { f: 523.25, d: 0.6 }, { f: 440.00, d: 0.6 }, { f: 349.23, d: 0.6 }, { f: 329.63, d: 0.6 }, { f: 293.66, d: 0.8 },
      { f: 466.16, d: 0.3 }, { f: 466.16, d: 0.3 }, { f: 440.00, d: 0.6 }, { f: 349.23, d: 0.6 }, { f: 392.00, d: 0.6 }, { f: 349.23, d: 1.2 }
    ];

    let timeOffset = ctx.currentTime + 0.1;

    melody.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note.f, timeOffset);

      gain.gain.setValueAtTime(0.001, timeOffset);
      gain.gain.linearRampToValueAtTime(0.12, timeOffset + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, timeOffset + note.d * 0.95);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(timeOffset);
      osc.stop(timeOffset + note.d);

      timeOffset += note.d * 0.9;
    });

    const totalDuration = (timeOffset - ctx.currentTime) * 1000;
    setTimeout(() => {
      if (isLoopingRef.current) {
        playMelodyLoop();
      }
    }, totalDuration);
  };

  useEffect(() => {
    return () => {
      isLoopingRef.current = false;
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleMusic}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 shadow-lg ${
          isPlaying
            ? 'bg-rose-600/80 border-rose-400 text-white shadow-rose-500/40 animate-pulse'
            : 'bg-black/40 border-pink-500/30 text-pink-300 hover:bg-rose-950/60'
        } backdrop-blur-md cursor-pointer`}
        title={isPlaying ? 'Mute Music' : 'Play Romantic Birthday Music'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-5 h-5 animate-bounce" />
            <span className="text-xs font-semibold tracking-wider">MUSIC ON 🎵</span>
          </>
        ) : (
          <>
            <VolumeX className="w-5 h-5" />
            <span className="text-xs font-semibold tracking-wider">PLAY MUSIC 💖</span>
          </>
        )}
      </button>
    </div>
  );
};

export default AudioControl;
