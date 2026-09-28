export function SuhaAI({ expression = "idle", className = "", label = "Suha AI assistant" }) {
    const isThinking = expression === "thinking";
    const isCelebrate = expression === "celebrate" || expression === "happy";
    const isCurious = expression === "curious";

    const smile =
        expression === "thinking"
            ? "M74 156 Q100 162 126 156"
            : isCelebrate
              ? "M70 150 Q100 176 130 150"
              : isCurious
                ? "M78 154 Q100 166 122 154"
                : "M72 152 Q100 170 128 152";

    return (
        <div className={`suha-float ${className}`} role="img" aria-label={label}>
            <svg viewBox="0 0 200 230" className="h-auto w-full drop-shadow-[0_18px_40px_rgba(168,85,247,0.45)]">
                <defs>
                    <radialGradient id="suhaGlow" cx="50%" cy="45%" r="55%">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="suhaHead" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="55%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#5b21b6" />
                    </linearGradient>
                    <linearGradient id="suhaFace" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#faf5ff" />
                        <stop offset="100%" stopColor="#e9dffc" />
                    </linearGradient>
                    <linearGradient id="suhaBody" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#38104d" />
                    </linearGradient>
                </defs>

                <circle cx="100" cy="110" r="92" fill="url(#suhaGlow)" className="glow-pulse" />

                {/* halo */}
                <g className="suha-halo">
                    <ellipse cx="100" cy="34" rx="34" ry="9" fill="none" stroke="#f4c95d" strokeWidth="2.5" strokeDasharray="6 7" opacity="0.9" />
                </g>
                <ellipse cx="100" cy="34" rx="24" ry="6" fill="none" stroke="#e9dffc" strokeWidth="1.5" opacity="0.7" />

                <g className="suha-breathe" style={isCurious ? { transform: "rotate(-3deg)" } : undefined}>
                    {/* head */}
                    <path
                        d="M100 42 C142 42 164 74 164 110 C164 150 138 178 100 178 C62 178 36 150 36 110 C36 74 58 42 100 42 Z"
                        fill="url(#suhaHead)"
                        stroke="#d8b4fe"
                        strokeWidth="1.5"
                    />
                    {/* side audio dots */}
                    <circle cx="40" cy="112" r="7" fill="#f4c95d" opacity="0.95" />
                    <circle cx="160" cy="112" r="7" fill="#f4c95d" opacity="0.95" />
                    {/* face plate */}
                    <path
                        d="M100 66 C132 66 148 86 148 112 C148 140 128 160 100 160 C72 160 52 140 52 112 C52 86 68 66 100 66 Z"
                        fill="url(#suhaFace)"
                    />
                    {/* brows */}
                    {isCurious ? (
                        <>
                            <path d="M66 88 Q78 80 90 86" stroke="#4c1d95" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                            <path d="M110 92 Q122 88 134 92" stroke="#4c1d95" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                        </>
                    ) : isThinking ? (
                        <>
                            <path d="M66 90 Q78 86 90 90" stroke="#4c1d95" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                            <path d="M110 90 Q122 86 134 90" stroke="#4c1d95" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                        </>
                    ) : (
                        <>
                            <path d="M66 90 Q78 84 90 89" stroke="#4c1d95" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                            <path d="M110 89 Q122 84 134 90" stroke="#4c1d95" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                        </>
                    )}
                    {/* eyes */}
                    {isCelebrate ? (
                        <g stroke="#38104d" strokeWidth="5" strokeLinecap="round" fill="none">
                            <path d="M68 112 Q78 102 88 112" />
                            <path d="M112 112 Q122 102 132 112" />
                        </g>
                    ) : (
                        <g className="suha-eyes">
                            <g style={isThinking ? { transform: "translateY(-4px)" } : undefined}>
                                <ellipse cx="78" cy="112" rx="8.5" ry="10" fill="#38104d" />
                                <ellipse cx="122" cy="112" rx="8.5" ry="10" fill="#38104d" />
                                <circle cx="81" cy="108" r="2.6" fill="#fff" />
                                <circle cx="125" cy="108" r="2.6" fill="#fff" />
                            </g>
                        </g>
                    )}
                    {/* blush */}
                    <circle cx="64" cy="134" r="7" fill="#ec4899" opacity="0.28" />
                    <circle cx="136" cy="134" r="7" fill="#ec4899" opacity="0.28" />
                    {/* smile */}
                    <path d={smile} stroke="#38104d" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                </g>

                {/* body base */}
                <g className="suha-breathe">
                    <path d="M70 182 Q100 172 130 182 L138 206 Q100 220 62 206 Z" fill="url(#suhaBody)" stroke="#a855f7" strokeWidth="1.2" />
                    <circle cx="100" cy="196" r="5" fill="#f4c95d" />
                </g>

                {/* celebrate sparkles */}
                {isCelebrate && (
                    <g fill="#f4c95d">
                        <path d="M30 60 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 Z" />
                        <path d="M170 70 l2.4 6.4 6.4 2.4 -6.4 2.4 -2.4 6.4 -2.4 -6.4 -6.4 -2.4 6.4 -2.4 Z" />
                        <path d="M160 30 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" opacity="0.8" />
                    </g>
                )}
                {/* thinking dots */}
                {isThinking && (
                    <g fill="#e9dffc">
                        <circle cx="168" cy="60" r="3.4" />
                        <circle cx="178" cy="46" r="4.4" opacity="0.8" />
                        <circle cx="190" cy="30" r="5.4" opacity="0.6" />
                    </g>
                )}
            </svg>
        </div>
    );
}
