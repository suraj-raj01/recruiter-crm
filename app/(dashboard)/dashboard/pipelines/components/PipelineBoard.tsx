"use client";

import { Stage, STAGES } from "@/services/constants";
import PipelineColumn from "./PipelineColumn";
import { Candidate } from "@/services/candidate";

interface Props {
    candidates: Candidate[];
    onMove: (
        candidateId: string,
        stage: Stage
    ) => void;
}

export default function PipelineBoard({
    candidates,
    onMove,
}: Props) {
    return (
        <div className="grid md:grid-cols-4 gap-5">
            {STAGES.map((stage) => (
                <PipelineColumn
                    key={stage}
                    stage={stage}
                    candidates={candidates.filter(
                        (c) => c.stage === stage
                    )}
                    onDropCandidate={onMove}
                />
            ))}
        </div>
    );
}