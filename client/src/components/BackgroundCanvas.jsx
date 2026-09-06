import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Optimize particle count for mobile screens (16 on mobile, 35 on desktop)
    const isMobile = width < 640;
    const particleCount = isMobile ? 16 : 35;
    const particles = [];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * (isMobile ? 8 : 12) + 5;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = -Math.random() * 0.9 - 0.2;
        this.opacity = Math.random() * 0.6 + 0.3;
        this.color = [
          '#ff69b4', '#ff1493', '#ffb6c1', '#db2777', '#f43f5e', '#fb7185', '#ffd700'
        ][Math.floor(Math.random() * 7)];
        this.type = Math.random() > 0.5 ? 'heart' : 'sparkle';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset();
          this.y = height + 20;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        
        // Skip shadowBlur on mobile for ultra performance
        if (!isMobile) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = this.color;
        }

        if (this.type === 'heart') {
          ctx.beginPath();
          const d = this.size;
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-d / 2, -d / 2, -d, d / 3, 0, d);
          ctx.bezierCurveTo(d, d / 3, d / 2, -d / 2, 0, 0);
          ctx.fill();
        } else {
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * this.size,
                       -Math.sin((18 + i * 72) * Math.PI / 180) * this.size);
            ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * (this.size / 2),
                       -Math.sin((54 + i * 72) * Math.PI / 180) * (this.size / 2));
          }
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let lastTime = 0;
    const fps = isMobile ? 30 : 60;
    const interval = 1000 / fps;

    const render = (currentTime) => {
      animationFrameId = requestAnimationFrame(render);
      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Solid background clear
      ctx.fillStyle = '#0b020a';
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transform-gpu"
    />
  );
};

export default BackgroundCanvas;
