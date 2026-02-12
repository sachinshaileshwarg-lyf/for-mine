"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function GiftBox({ onNext }: { onNext: () => void }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-12 relative">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-deep-red/5 blur-3xl rounded-full scale-150 pointer-events-none" />

            <div className="relative w-56 h-56 cursor-pointer group" onClick={() => setIsOpen(true)}>

                {/* Shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-12 bg-black/20 blur-xl rounded-full" />

                {/* Lid */}
                <motion.div
                    initial={{ y: 0, rotate: 0 }}
                    animate={{
                        y: isOpen ? -300 : 0,
                        rotate: isOpen ? -30 : 0,
                        opacity: isOpen ? 0 : 1
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute -top-4 -left-2 w-[calc(100%+16px)] h-16 bg-[#8B0000] z-20 shadow-xl rounded-sm flex items-center justify-center"
                >
                    {/* Lid Ribbon (Horizontal) */}
                    <div className="w-full h-8 bg-[#D4AF37] opacity-90 absolute shadow-sm" />
                    {/* Lid Ribbon (Vertical) */}
                    <div className="h-full w-8 bg-[#D4AF37] opacity-90 absolute shadow-sm" />

                    {/* Bow */}
                    <div className="absolute -top-8 w-16 h-16 bg-[#D4AF37] rounded-full blur-[2px] opacity-80" />
                    <div className="absolute -top-8 w-16 h-16 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#B8860B] shadow-inner relative z-10" />
                        <div className="absolute w-12 h-12 border-4 border-[#D4AF37] rounded-full rounded-br-none -rotate-45 -translate-x-3" />
                        <div className="absolute w-12 h-12 border-4 border-[#D4AF37] rounded-full rounded-bl-none rotate-45 translate-x-3" />
                    </div>
                </motion.div>

                {/* Box Body */}
                <div className="absolute bottom-0 left-0 w-full h-48 bg-[#600000] z-10 shadow-lg flex items-center justify-center overflow-visible rounded-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#400000] opacity-100 rounded-sm" />
                    {/* Vertical Ribbon */}
                    <div className="h-full w-8 bg-[#D4AF37] shadow-sm relative z-10" />

                    {/* Message Inside */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            scale: isOpen ? 1.1 : 0.5,
                            y: isOpen ? -200 : 50
                        }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="absolute z-30 w-72 p-6 text-center bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-stone-200"
                    >
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-r border-b border-stone-200"></div>

                        <p className="font-handwriting text-deep-red text-xl font-bold mb-4">Heyyy… cheating ah? 👀</p>
                        <p className="font-typewriter text-stone-600 text-sm leading-relaxed mb-2">
                            This gift is not digital.
                        </p>
                        <p className="font-typewriter text-stone-600 text-sm leading-relaxed mb-2">
                            You’ll have to wait and take it from me in person…
                        </p>
                        <p className="font-typewriter text-deep-red text-sm font-bold leading-relaxed">
                            and I promise it’s worth the wait. 💌
                        </p>
                    </motion.div>
                </div>
            </div>

            {isOpen && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    onClick={onNext}
                    className="relative px-8 py-3 border border-stone-300 rounded-full font-typewriter text-stone-500 hover:text-deep-red hover:border-deep-red transition-all duration-300 text-xs tracking-[0.2em] uppercase bg-warm-white/50 backdrop-blur-sm"
                >
                    Continue
                </motion.button>
            )}
        </div>
    );
}
