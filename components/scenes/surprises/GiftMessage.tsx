"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function GiftMessage({ onBack }: { onBack: () => void }) {
    return (
        <div className="relative flex flex-col items-center justify-center text-center p-8">
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 12 }}
                className="text-8xl mb-8"
            >
                🎁
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-handwriting text-3xl md:text-5xl text-deep-red mb-4"
            >
                A Special Gift...
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="font-typewriter text-stone-700 text-lg md:text-xl tracking-wide max-w-md leading-relaxed"
            >
                Wait for your gift in person... ❤️
            </motion.p>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={onBack}
                className="mt-12 flex items-center gap-2 text-stone-500 hover:text-deep-red transition-colors font-typewriter text-xs uppercase tracking-widest"
            >
                <ArrowLeft className="w-4 h-4" /> Back to Menu
            </motion.button>
        </div>
    );
}
