"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            let currentText = "";
            let currentIndex = 0;

            const interval = setInterval(() => {
                if (currentIndex < text.length) {
                    currentText += text[currentIndex];
                    setDisplayedText(currentText);
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 50); // Typing speed

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay]);

    return <span>{displayedText}</span>;
};

export default function VintageLetter({ onNext }: { onNext: () => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullyOpen, setIsFullyOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setIsFullyOpen(true), 800);
        }
    }, [isOpen]);

    return (
        <div className="flex items-center justify-center min-h-[60vh] perspective-[1000px]">
            {!isOpen ? (
                <motion.div
                    initial={{ scale: 0.9, rotate: -2, y: 0 }}
                    whileHover={{ scale: 1.05, rotate: 1, y: -5 }}
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer bg-[#FDF6E3] w-72 h-48 shadow-lg border border-[#E6D0B3] flex items-center justify-center relative p-6 group"
                >
                    {/* Paper Texture */}
                    <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none" />

                    <div className="absolute inset-0 border-4 border-double border-[#DABBA9] m-3 opacity-60"></div>

                    <div className="text-center z-10">
                        <p className="font-handwriting text-3xl text-stone-600 group-hover:text-deep-red transition-colors">Read Me</p>
                        <div className="w-12 h-12 bg-deep-red/10 rounded-full mx-auto mt-2 flex items-center justify-center">
                            <span className="text-deep-red text-xl">♥</span>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-[#FDF6E3] max-w-lg w-full shadow-2xl overflow-hidden origin-top"
                >
                    {/* Paper Texture */}
                    <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none" />

                    {/* Crease marks for folded look */}
                    <div className="absolute top-1/3 left-0 w-full h-px bg-stone-300/30" />
                    <div className="absolute top-2/3 left-0 w-full h-px bg-stone-300/30" />

                    <div className="p-8 md:p-12 relative z-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="space-y-6 font-handwriting text-xl md:text-2xl text-stone-800 leading-relaxed"
                        >
                            <p className="text-deep-red">My Dearest,</p>

                            <div className="min-h-[120px]">
                                {isFullyOpen && (
                                    <p>
                                        <TypewriterText
                                            text="I wanted to take a moment to tell you just how much you mean to me. You are the poetry in my silent days and the melody in my busy life."
                                            delay={0}
                                        />
                                    </p>
                                )}
                            </div>

                            <div className="min-h-[100px]">
                                {isFullyOpen && (
                                    <p>
                                        <TypewriterText
                                            text="Every day with you feels like a page from a story I never want to end. Thank you for being my love, my partner, and my best friend."
                                            delay={7000}
                                        />
                                    </p>
                                )}
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 14 }}
                                className="text-right mt-8 text-deep-red"
                            >
                                Forever yours,
                            </motion.p>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 15 }}
                            onClick={onNext}
                            className="absolute bottom-4 right-8 text-xs font-typewriter text-stone-400 hover:text-stone-600 uppercase tracking-widest mt-8"
                        >
                            Close Letter
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
