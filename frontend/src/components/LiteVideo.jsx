import { useState } from "react";
import { Play } from "lucide-react";

export function LiteVideo({ videoId, title, aspect = "aspect-video", playing, onPlay, testId = "video-play", rounded = "rounded-3xl" }) {
    const [internal, setInternal] = useState(false);
    const isPlaying = playing !== undefined ? playing : internal;

    const start = () => {
        setInternal(true);
        onPlay && onPlay();
    };

    if (isPlaying) {
        return (
            <div className={`${aspect} w-full overflow-hidden ${rounded}`}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        );
    }

    return (
        <button
            type="button"
            onClick={start}
            data-testid={testId}
            aria-label={`Play video: ${title}`}
            className={`group relative block ${aspect} w-full overflow-hidden ${rounded} bg-[#150826]`}
        >
            <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-95"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-[#0d0518]/80 via-transparent to-[#0d0518]/30" />
            <span className="play-pulse absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f4c95d] text-[#2a1a05] shadow-xl transition group-hover:scale-110 sm:h-20 sm:w-20">
                <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
            </span>
        </button>
    );
}
