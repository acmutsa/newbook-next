import clsx from "clsx";
import { PROFILE_MAX_OVERALL_SCORE } from "@/lib/constants";

export default function ScoreCard({
    score
}: {
    score: number;
}) {
    // Set percent to NaN if no score given, 0 if score's less than 0, MAX_SCORE if it's more than the max,
    // and score / MAX_SCORE if it falls within parameters
    const scorePercent = ( score == undefined ) ? NaN
                                                : ( score < 0 ) ? 0
                                                                : ( score > PROFILE_MAX_OVERALL_SCORE ) ? PROFILE_MAX_OVERALL_SCORE
                                                                                                        : ( score / PROFILE_MAX_OVERALL_SCORE );
    
    return (
        <div className={clsx(
            "flex flex-col items-center place-content-center p-6 rounded-xl bg-card font-black shadow-[0_0_1em_0.05em_rgb(0_0_0_/_0.3)]",
            {
                "shadow-score-0": ( scorePercent >= 0 ) && ( scorePercent < 0.2 ),
                "shadow-score-1": ( scorePercent >= 0.2 ) && ( scorePercent < 0.4 ),
                "shadow-score-2": ( scorePercent >= 0.4 ) && ( scorePercent < 0.6 ),
                "shadow-score-3": ( scorePercent >= 0.6 ) && ( scorePercent < 0.8 ),
                "shadow-score-4": ( scorePercent >= 0.8 ),
            },
        )}>
            <div className="text-6xl whitespace-nowrap">
                { ( !Number.isNaN(scorePercent) ) ? score.toFixed(1) : "N/A" }
            </div>
            <div className="text-2xl text-slate-500">
                
                { ( !Number.isNaN(scorePercent) ) &&    <>
                                                            <span className="sr-only">out of</span>
                                                            <span className="not-sr-only">/ </span>
                                                            {PROFILE_MAX_OVERALL_SCORE}
                                                        </>
                }
            </div>
        </div>
    )
}