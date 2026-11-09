"use client";

import { useEffect, useRef } from "react";
import { CODE_SNIPPETS } from "@/constants/codeSnippets";

class Particle {
  x: number;
  y: number;
  text: string;
  speed: number;
  opacity: number;
  bounds: () => { width: number; height: number };

  constructor(boundsProvider: () => { width: number; height: number }) {
    this.bounds = boundsProvider;
    const { width, height } = this.bounds();
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
    this.speed = Math.random() * 0.5 + 0.1;
    this.opacity = Math.random() * 0.3 + 0.1;
  }

  update() {
    const { width, height } = this.bounds();
    this.y -= this.speed;
    if (this.y < -50) {
      this.y = height + 50;
      this.x = Math.random() * width;
      this.text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.font = '14px "Geist Mono", monospace';
    context.fillStyle = getComputedStyle(document.body).getPropertyValue(
      "--foreground",
    );
    context.globalAlpha = this.opacity;
    context.fillText(this.text, this.x, this.y);
  }
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scale the backing store to the device pixel ratio so the drifting code
    // renders crisply on phone/retina displays instead of upscaled and fuzzy.
    const applySize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    applySize();

    // Helper to get current dimensions
    const getBounds = () => ({ width, height });

    const particles: Particle[] = [];
    // Fewer drifting snippets on small screens: they are mostly occluded by
    // the content cards there, and this is a continuous rAF loop on battery.
    const particleCount = width < 768 ? 8 : 20;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(getBounds));
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;

    const animate = () => {
      draw();
      frameId = requestAnimationFrame(animate);
    };

    const start = () => {
      cancelAnimationFrame(frameId);
      if (motionQuery.matches) {
        // Honour the OS setting: paint one static frame, then stop.
        draw();
        return;
      }
      frameId = requestAnimationFrame(animate);
    };

    start();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      applySize();
    };

    window.addEventListener("resize", handleResize);
    motionQuery.addEventListener("change", start);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
