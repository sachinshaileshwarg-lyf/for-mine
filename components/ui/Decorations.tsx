"use client";

import { motion } from "framer-motion";

export const Tape = ({ className, rotate = 0 }: { className?: string; rotate?: number }) => (
    <div
        className={`absolute w-32 h-8 bg-white/40 backdrop-blur-[1px] shadow-sm transform ${className}`}
        style={{
            transform: `rotate(${rotate}deg)`,
            maskImage: "url(https://www.transparenttextures.com/patterns/cream-paper.png)",
            maskSize: "cover"
        }}
    />
);

export const DoodleHeart = ({ className }: { className?: string }) => (
    <svg className={`w-12 h-12 text-deep-red/60 ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 88.9C50 88.9 12.5 56.6 12.5 32.5C12.5 19.2 23.2 10.5 35 10.5C43 10.5 48 16 50 20.5C52 16 57 10.5 65 10.5C76.8 10.5 87.5 19.2 87.5 32.5C87.5 56.6 50 88.9 50 88.9Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleStar = ({ className }: { className?: string }) => (
    <svg className={`w-8 h-8 text-yellow-500/60 ${className}`} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 2L30 18H48L34 29L39 45L25 35L11 45L16 29L2 18H20L25 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
