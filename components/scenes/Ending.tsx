"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Ending({ onReplay }: { onReplay: () => void }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: { x: number; y: number; radius: number; alpha: number; speed: number }[] = [];
        let shootingStars: { x: number; y: number; len: number; speed: number; angle: number; opacity: number }[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < 300; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.2,
                    alpha: Math.random(),
                    speed: Math.random() * 0.02,
                });
            }
        };

        const createShootingStar = () => {
            if (Math.random() < 0.015) { // Slightly rarer
                shootingStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * (canvas.height / 3),
                    len: Math.random() * 100 + 50,
                    speed: Math.random() * 12 + 8,
                    angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
                    opacity: 1
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Removed solid fill to allow CSS gradient background to show through if needed, 
            // but here we want a specific deep night sky.
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, "#050510");
            gradient.addColorStop(1, "#1a1a2e");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
                star.alpha += star.speed * (Math.random() > 0.5 ? 1 : -1);
                if (star.alpha < 0.1) star.alpha = 0.1;
                if (star.alpha > 0.8) star.alpha = 0.8;
            });

            // Draw & update shooting stars
            createShootingStar();
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const s = shootingStars[i];

                ctx.beginPath();
                const gradientStroke = ctx.createLinearGradient(
                    s.x, s.y,
                    s.x - s.len * Math.cos(s.angle),
                    s.y - s.len * Math.sin(s.angle)
                );
                gradientStroke.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
                gradientStroke.addColorStop(1, `rgba(255,255,255,0)`);

                ctx.strokeStyle = gradientStroke;
                ctx.lineWidth = 2;
                ctx.lineCap = "round";
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x - s.len * Math.cos(s.angle), s.y - s.len * Math.sin(s.angle));
                ctx.stroke();

                s.x += s.speed * Math.cos(s.angle);
                s.y += s.speed * Math.sin(s.angle);
                s.opacity -= 0.01;

                if (s.x > canvas.width || s.y > canvas.height || s.opacity <= 0) {
                    shootingStars.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener("resize", resize);
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />

            <div className="z-10 text-center space-y-12 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-handwriting mb-6 text-warm-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        Forever & Always
                    </h1>
                    <div className="w-24 h-px bg-white/30 mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl font-typewriter text-white/80 max-w-lg mx-auto leading-loose tracking-wide">
                        "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
                    </p>
                </motion.div>

                <motion.button
                    onClick={onReplay}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    transition={{ delay: 3, duration: 1 }}
                    className="px-8 py-3 border border-white/40 rounded-full text-xs font-typewriter tracking-[0.3em] uppercase hover:border-white transition-all duration-500"
                >
                    Replay Our Story
                </motion.button>
            </div>
        </div>
    );
}
