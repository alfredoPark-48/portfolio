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

    canvas.width = width;
    canvas.height = height;

    // Helper to get current dimensions
    const getBounds = () => ({ width, height });

    const particles: Particle[] = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(getBounds));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
