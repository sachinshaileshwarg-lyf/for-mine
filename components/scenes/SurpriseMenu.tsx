"use client";

import { motion } from "framer-motion";
import { Video, Gift } from "lucide-react";

interface SurpriseMenuProps {
    onSelectVideo: () => void;
    onSelectGift: () => void;
}

export default function SurpriseMenu({ onSelectVideo, onSelectGift }: SurpriseMenuProps) {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center z-10">
            <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSelectVideo}
                className="w-64 h-48 bg-black/90 rounded-lg flex flex-col items-center justify-center gap-4 text-white shadow-2xl border border-white/10 group overflow-hidden relative"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-deep-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Video className="w-12 h-12 text-white/80 group-hover:text-white transition-colors" />
                <span className="font-typewriter uppercase tracking-widest text-sm z-10">Play Memories</span>
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSelectGift}
                className="w-64 h-48 bg-[#fdfbf7] rounded-lg flex flex-col items-center justify-center gap-4 text-deep-red shadow-2xl border border-stone-200 group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-deep-red/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Gift className="w-12 h-12 text-deep-red/80 group-hover:scale-110 transition-transform duration-500" />
                <span className="font-typewriter uppercase tracking-widest text-sm z-10">Open Gift</span>
            </motion.button>
        </div>
    );
}
