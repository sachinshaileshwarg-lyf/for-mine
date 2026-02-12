"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface EnvelopeProps {
    onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        if (isOpen) return;
        setIsOpen(true);
        setTimeout(onOpen, 2500); // Wait for full sequence
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
            {/* Background with grain is handled globally, but we add a specific vignette here */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] pointer-events-none" />

            <motion.div
                className="relative cursor-pointer group z-20"
                onClick={handleOpen}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 1 }}
            >
                {/* Envelope Body */}
                <div className="relative w-[340px] h-[240px] md:w-[500px] md:h-[350px] bg-[#F5E6D3] shadow-2xl rounded-sm flex items-center justify-center border border-[#E6D0B3] overflow-visible">

                    {/* Paper Texture Overlay for Envelope */}
                    <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply rounded-sm pointer-events-none" />

                    {/* Top Flap */}
                    <motion.div
                        initial={{ rotateX: 0 }}
                        animate={{ rotateX: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-[#EBDDC8] origin-top z-30 shadow-md"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                            backfaceVisibility: "hidden",
                        }}
                    >
                        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none" />
                    </motion.div>

                    {/* Inner Flap (Darker inside) */}
                    <div
                        className="absolute top-0 left-0 w-full h-1/2 bg-[#DBC8B0] origin-top z-10"
                        style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                    />

                    {/* Letter Slide Out */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{
                            y: isOpen ? -150 : 0,
                            zIndex: isOpen ? 40 : 0
                        }}
                        transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
                        className="absolute w-[90%] h-[95%] bg-white shadow-sm flex flex-col items-center justify-center p-6 border border-stone-100"
                    >
                        {/* Paper Texture for Letter */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none" />

                        <p className="font-handwriting text-3xl md:text-4xl text-deep-red/80 mb-4">My Dearest,</p>
                        <div className="w-12 h-px bg-deep-red/20 mb-4" />
                        <p className="font-typewriter text-xs md:text-sm text-stone-500 text-center leading-relaxed">
                            A story of us.<br />
                            Written in the stars.<br />
                            Forever yours.
                        </p>
                    </motion.div>

                    {/* Front Pocket */}
                    <div
                        className="absolute bottom-0 left-0 w-full h-full z-20 pointer-events-none"
                        style={{ clipPath: "polygon(0 100%, 50% 50%, 100% 100%)" }}
                    >
                        <div className="w-full h-full bg-[#EBDDC8] shadow-inner"></div>
                    </div>
                    <div
                        className="absolute bottom-0 left-0 w-full h-full z-20 pointer-events-none"
                        style={{ clipPath: "polygon(0 0, 0 100%, 50% 50%)", background: "#F0E1CD" }}
                    />
                    <div
                        className="absolute bottom-0 right-0 w-full h-full z-20 pointer-events-none"
                        style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 50%)", background: "#F0E1CD" }}
                    />

                    {/* Seal */}
                    <motion.div
                        animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.8 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[40%] text-deep-red z-40 drop-shadow-md"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-deep-red rounded-full flex items-center justify-center shadow-lg border-2 border-red-900/20">
                            <span className="font-handwriting text-white text-xl md:text-2xl pt-1">Love</span>
                        </div>
                    </motion.div>

                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-16 text-center font-typewriter text-deep-red/60 text-sm md:text-base tracking-[0.2em] uppercase"
                >
                    {isOpen ? "Opening..." : "Click to Open"}
                </motion.p>
            </motion.div>


        </div>
    );
}
