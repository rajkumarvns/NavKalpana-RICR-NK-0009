import React, { useEffect, useRef } from 'react';
import '../../styles/dfly/ParticlesBackground.css';

const ParticlesBackground = () => {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: -9999, y: -9999 });
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);
  
      // Store particles
      const particles = [];
  
      class Particle {
        constructor() {
          this.reset();
        }
  
        reset() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = Math.random() * 0.4 - 0.2;
          this.vy = Math.random() * 0.4 - 0.2;
          this.baseSize = Math.random() * 2 + 1;
          this.size = this.baseSize;
          this.burst = false;
        }
  
        update() {
          const dx = this.x - mouse.current.x;
          const dy = this.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
  
          if (dist < 150) {
            const angle = Math.atan2(dy, dx);
            const force = (150 - dist) / 150;
            this.vx += Math.cos(angle) * force * 1.5;
            this.vy += Math.sin(angle) * force * 1.5;
          }
  
          this.x += this.vx;
          this.y += this.vy;
  
          this.vx *= 0.95;
          this.vy *= 0.95;
  
          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;
  
          const pulse = Math.sin(Date.now() / 200 + this.x + this.y) * 1.5;
          this.size = Math.max(1, this.baseSize + pulse);
  
          // Optional burst
          if (!this.burst && Math.random() < 0.0015) {
            this.vx *= 3;
            this.vy *= 3;
            this.size *= 2.5;
            this.burst = true;
            setTimeout(() => (this.burst = false), 300);
          }
        }
  
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
          ctx.shadowColor = 'white';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0; // Reset blur
        }
      }
  
      // Create 100 particles
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
  
      const animate = () => {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
          p.update();
          p.draw();
        });
        requestAnimationFrame(animate);
      };
  
      animate();
  
      // Resize canvas
      const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener('resize', handleResize);
  
      // Mouse move
      const handleMouseMove = (e) => {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
      };
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', () => {
        mouse.current.x = -9999;
        mouse.current.y = -9999;
      });
  
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return <canvas ref={canvasRef} className="particles-canvas" />;
  };
  
  export default ParticlesBackground;