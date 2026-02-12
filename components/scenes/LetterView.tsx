"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LetterViewProps {
    onContinue: () => void;
}

const letterContent = [
    "I don’t even know where to begin… but I just wanted to say thank you.",
    "Thank you for loving me in ways I never knew I needed. Thank you for your patience, your care, your small efforts that might look simple to the world, but mean everything to me. Every message, every call, every little thing you do… I notice it all. And I carry it in my heart every single day.",
    "You came into my life so quietly, but somehow you became my biggest peace, my happiest place, and my favorite person.",
    "There are so many moments where I just sit and think, “How did I get someone like her?” And in those moments, I feel nothing but gratitude.",
    "I may not always say it perfectly, and I may not always find the right words, but please know this one thing will always be true:",
    "I am really, thankful for your love. For your efforts. For choosing me, again and again.",
    "One thing I promise is… my heart will always hold you gently, with the same love, the same care, and the same honesty. And if the world gives me another lifetime… ",
    "I would just look for you again. Hold your hand again. And love you… all over again."
];

export default function LetterView({ onContinue }: LetterViewProps) {
    const [displayedLines, setDisplayedLines] = useState<string[]>(Array(letterContent.length).fill(""));
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (currentLineIndex >= letterContent.length) {
            setIsFinished(true);
            return;
        }

        const currentFullLine = letterContent[currentLineIndex];

        if (charIndex < currentFullLine.length) {
            const timeout = setTimeout(() => {
                setDisplayedLines(prev => {
                    const newLines = [...prev];
                    newLines[currentLineIndex] = currentFullLine.slice(0, charIndex + 1);
                    return newLines;
                });
                setCharIndex(prev => prev + 1);
            }, 30); // Typing speed
            return () => clearTimeout(timeout);
        } else {
            // Line finished, move to next
            const timeout = setTimeout(() => {
                setCurrentLineIndex(prev => prev + 1);
                setCharIndex(0);
            }, 500); // Pause between lines
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, charIndex]);


    return (
        <div className="relative w-full max-w-4xl bg-[#fdfbf7] p-8 md:p-12 shadow-2xl rounded-sm mx-4 flex flex-col items-center min-h-[60vh]">
            {/* Paper Texture */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none rounded-sm" />

            <div className="relative z-10 flex flex-col gap-6 text-center w-full">
                <h2 className="font-handwriting text-4xl text-deep-red mb-4">My Little Rakshh,</h2>

                <div className="flex flex-col gap-2 font-typewriter text-stone-700 leading-normal text-sm md:text-base min-h-[200px]">
                    {displayedLines.map((line, i) => (
                        <p key={i} className="min-h-[1.5em]">
                            {line}
                            {i === currentLineIndex && !isFinished && (
                                <span className="animate-pulse inline-block w-0.5 h-4 bg-deep-red ml-1 align-middle" />
                            )}
                        </p>
                    ))}
                </div>

                {isFinished && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-end mr-8 mt-4"
                    >
                        <p className="font-handwriting text-2xl text-deep-red">
                            Forever yours, <br /> Sash
                        </p>
                    </motion.div>
                )}

                {isFinished && (
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onContinue}
                        className="mt-8 px-8 py-3 bg-deep-red text-white font-typewriter uppercase tracking-widest text-xs rounded hover:bg-red-900 transition-colors shadow-lg self-center"
                    >
                        See Your Surprises
                    </motion.button>
                )}
            </div>
        </div>
    );
}
