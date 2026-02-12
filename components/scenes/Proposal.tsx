"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface ProposalProps {
    onAccept: () => void;
}

export default function Proposal({ onAccept }: ProposalProps) {
    const [noCount, setNoCount] = useState(0);

    const handleAccept = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8B0000', '#FFD700', '#ffffff']
        });
        onAccept();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 relative z-20">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-[#fdfbf7] p-8 md:p-12 shadow-2xl rounded-sm max-w-lg w-full relative"
            >
                {/* Vintage Paper Texture & Effects */}
                <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none rounded-sm" />
                <div className="absolute inset-0 border border-stone-200 m-2 rounded-sm pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-8">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-6xl"
                    >
                        💌
                    </motion.div>

                    <h2 className="font-handwriting text-4xl md:text-5xl text-deep-red leading-tight">
                        Will you be my Valentine?
                    </h2>

                    <p className="font-typewriter text-stone-600 text-sm md:text-base italic">
                        (There is only one right answer...)
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 mt-4 w-full justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleAccept}
                            className="bg-deep-red text-white font-typewriter uppercase tracking-widest py-3 px-8 rounded shadow-lg hover:bg-red-900 transition-colors text-sm md:text-base"
                        >
                            Yes, Absolutely!
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleAccept}
                            className="bg-white text-deep-red border-2 border-deep-red font-typewriter uppercase tracking-widest py-3 px-8 rounded shadow-lg hover:bg-red-50 transition-colors text-sm md:text-base"
                        >
                            Yes! (But Faster) 🏃‍♀️
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
