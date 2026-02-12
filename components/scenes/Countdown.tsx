"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ForeverCountdown({ onNext }: { onNext: () => void }) {
    const messages = [
        "Counting down the moments...",
        "Until I hold you again...",
        "Until our next adventure...",
        "Until forever begins."
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev < messages.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    setTimeout(onNext, 2000); // Auto proceed after last message
                    return prev;
                }
            });
        }, 2500);

        return () => clearInterval(interval);
    }, [onNext]);

    return (
        <div className="flex items-center justify-center min-h-[50vh] text-center px-4">
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
                transition={{ duration: 1.5 }}
                className="font-handwriting text-3xl md:text-5xl text-deep-red drop-shadow-sm"
            >
                {messages[index]}
            </motion.div>
        </div>
    );
}
