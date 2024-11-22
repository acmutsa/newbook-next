import clsx from "clsx";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PROFILE_MAX_OVERALL_SCORE } from "@/lib/constants";

export default function ScoreIcon({
    score
}: {
    score: number;
}) {
    // Set percent to NaN if no score given, 0 if score's less than 0, max score if it's more than the max,
    // and ( score / max score ) if it falls within parameters
    const scorePercent = ( score == undefined ) ? NaN
                                                : ( score < 0 ) ? 0
                                                                : ( score > PROFILE_MAX_OVERALL_SCORE ) ? PROFILE_MAX_OVERALL_SCORE
                                                                                        : ( score / PROFILE_MAX_OVERALL_SCORE );

    return (
        <Avatar>
            <AvatarFallback className={clsx(
                "font-bold shadow-[inset_0_0_0.25em_0.05em_#000]",
                {
                    "shadow-score-0": ( scorePercent >= 0 ) && ( scorePercent < 0.2 ),
                    "shadow-score-1": ( scorePercent >= 0.2 ) && ( scorePercent < 0.4 ),
                    "shadow-score-2": ( scorePercent >= 0.4 ) && ( scorePercent < 0.6 ),
                    "shadow-score-3": ( scorePercent >= 0.6 ) && ( scorePercent < 0.8 ),
                    "shadow-score-4": ( scorePercent >= 0.8 ),
                },
            )}>
                { score ? score.toFixed(1) : "N/A"}
            </AvatarFallback>
        </Avatar>
    );
}