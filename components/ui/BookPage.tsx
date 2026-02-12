"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BookPageProps {
    children: React.ReactNode;
    className?: string;
    pageNum?: number;
}

export default function BookPage({ children, className, pageNum }: BookPageProps) {
    return (
        <div className={cn("relative w-full h-full bg-[#fdfbf7] shadow-inner overflow-hidden flex flex-col", className)}>
            {/* Paper Texture */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none" />

            {/* Page Content */}
            <div className="relative z-10 w-full h-full p-4 md:p-12 flex flex-col">
                {children}
            </div>

            {/* Page Number */}
            {pageNum !== undefined && (
                <div className="absolute bottom-4 w-full text-center text-stone-400 font-typewriter text-xs z-20">
                    - {pageNum} -
                </div>
            )}

            {/* Binding Shadow */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-20" />
        </div>
    );
}
