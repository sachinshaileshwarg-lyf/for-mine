import { useEffect, useRef, useState } from "react";

interface MusicPlayerProps {
    shouldPlay?: boolean;
}

export default function MusicPlayer({ shouldPlay = false }: MusicPlayerProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    // User should place 'music.mp3' in the public/ directory.
    // Fallback included to prevent runtime errors if file is missing.
    const [audioSrc, setAudioSrc] = useState("/audio/dude-feb14bgm.mp3");

    const handleAudioError = () => {
        console.log("Local audio not found, switching to fallback.");
        if (audioSrc === "/music.mp3") {
            setAudioSrc("https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3?filename=piano-moment-11116.mp3");
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            if (shouldPlay) {
                audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    }, [shouldPlay]);

    // ... keeping the rest but removing the initial autoplay effect that runs on mount
    // ... togglePlay logic remains for manual control


    // ... keeping the rest but removing the initial autoplay effect that runs on mount

    return (
        <audio
            ref={audioRef}
            src={audioSrc}
            onError={handleAudioError}
            loop
        />
    );
}
