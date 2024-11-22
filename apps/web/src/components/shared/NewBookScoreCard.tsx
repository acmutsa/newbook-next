import clsx from "clsx";

const MAX_SCORE = 5;

export default function ScoreCard({
    score
}: {
    score: number;
}) {
    // Set percent to NaN if no score given, 0 if score's less than 0, MAX_SCORE if it's more than the max,
    // and score / MAX_SCORE if it falls within parameters
    const scorePercent = ( score == undefined ) ? NaN
                                                : ( score < 0 ) ? 0
                                                                : ( score > MAX_SCORE ) ? MAX_SCORE
                                                                                        : ( score / MAX_SCORE );
    
    return (
        <div className={clsx(
            "flex flex-col items-center place-content-center p-6 rounded-xl bg-card font-black shadow-[0_0_1em_0.05em_#000]",
            {
                "shadow-score-0": ( scorePercent >= 0 ) && ( scorePercent < 0.2 ),
                "shadow-score-1": ( scorePercent >= 0.2 ) && ( scorePercent < 0.4 ),
                "shadow-score-2": ( scorePercent >= 0.4 ) && ( scorePercent < 0.6 ),
                "shadow-score-3": ( scorePercent >= 0.6 ) && ( scorePercent < 0.8 ),
                "shadow-score-4": ( scorePercent >= 0.8 ),
            },
        )}>
            <div className="text-6xl">
                { score.toFixed(1) ?? NaN }
            </div>
            <div className="text-2xl text-slate-500">
                <span className="sr-only">out of</span>
                <span className="not-sr-only">/ </span>
                { MAX_SCORE ?? NaN }
            </div>
        </div>
    )
}