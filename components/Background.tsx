'use client';

import { useEffect, useRef } from 'react';

const codeSnippets = [
    'import React from "react";',
    'function App() {',
    '  const [state, setState] = useState(null);',
    '  return <Component />;',
    '}',
    'const data = await fetch("/api/data");',
    'if (error) throw new Error("Failed");',
    'npm install next react react-dom',
    'git commit -m "Initial commit"',
    'console.log("Hello World");',
    'export default function Page() {}',
    'array.map(item => item.id)',
    'useEffect(() => {}, []);',
    'def main():',
    'import pandas as pd',
    'if __name__ == "__main__":',
    'print("Hello World")',
    'class MyModel(nn.Module):',
    'pip install numpy pandas',
    'git status',
    'git add .',
    'git push origin main',
    'git pull origin main',
    'npm run build',
    'npm run start',
    'npm run dev',
    'npm run test',
];

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
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.3 + 0.1;
    }

    update() {
        const { width, height } = this.bounds();
        this.y -= this.speed;
        if (this.y < -50) {
            this.y = height + 50;
            this.x = Math.random() * width;
            this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }
    }

    draw(context: CanvasRenderingContext2D) {
        context.font = '14px "Geist Mono", monospace';
        context.fillStyle = getComputedStyle(document.body).getPropertyValue('--foreground');
        context.globalAlpha = this.opacity;
        context.fillText(this.text, this.x, this.y);
    }
}

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
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

            particles.forEach(particle => {
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

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
}
