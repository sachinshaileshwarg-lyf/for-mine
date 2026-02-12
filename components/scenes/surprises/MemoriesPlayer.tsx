"use client";

import { motion } from "framer-motion";
import { Play, ArrowLeft } from "lucide-react";
import { useState, useRef } from "react";

export interface MemoriesPlayerProps {
    onNext: () => void;
}

/**
 * MemoriesPlayer component - Unique name to resolve build/casing issues
 */
export function MemoriesPlayer({ onNext }: MemoriesPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">

            {/* Back Button */}
            <button
                onClick={onNext}
                className="absolute top-8 left-8 z-50 text-white/50 hover:text-white flex items-center gap-2 font-typewriter text-xs uppercase tracking-widest"
            >
                <ArrowLeft className="w-4 h-4" /> Back
            </button>

            {!isPlaying ? (
                <div className="relative w-full h-full flex items-center justify-center bg-stone-950 cursor-pointer group" onClick={handlePlay}>
                    {/* Placeholder */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay animate-pulse"></div>
                    <div className="z-30 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5 shadow-[0_0_50px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                            <Play className="fill-white text-white ml-2 w-10 h-10 opacity-80" />
                        </div>
                        <p className="mt-8 font-typewriter text-stone-500 tracking-[0.5em] text-sm uppercase animate-pulse">
                            Play Video
                        </p>
                    </div>
                </div>
            ) : (
                <div className="relative w-full h-full">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-contain"
                        autoPlay
                        controls
                        src="/video/feb14video.MOV"
                        onError={(e) => {
                            console.error("Video failed to load");
                            // Keep playing but maybe show a toast or just stay in this state
                        }}
                    />

                    {/* Scanlines Overlay - subtle */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
                </div>
            )}
        </div>
    );
}
