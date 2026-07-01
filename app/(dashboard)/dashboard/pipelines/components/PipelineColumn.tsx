"use client";

import { Candidate } from "@/services/candidate";
import CandidateCard from "./CandidateCard";
import { Stage, STAGE_BADGE } from "@/services/constants";

interface Props {
    stage: Stage;
    candidates: Candidate[];
    onDropCandidate: (
        candidateId: string,
        stage: Stage
    ) => void;
}

export default function PipelineColumn({
    stage,
    candidates,
    onDropCandidate,
}: Props) {
    return (
        <div
            className="rounded-lg border bg-muted/30 p-4"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                const id = e.dataTransfer.getData("candidateId");
                onDropCandidate(id, stage);
            }}
        >
            <div className="flex justify-between mb-4">
                <h2 className={`font-semibold text-sm rounded-xs px-3 ${STAGE_BADGE[stage] ?? "bg-slate-50 text-slate-600 border border-slate-100"
        }`}>{stage}</h2>

                <span className={`rounded-full h-5 w-5 flex items-center justify-center font-bold text-sm ${STAGE_BADGE[stage] ?? "bg-slate-50 text-slate-600 border border-slate-100"}`}>{candidates.length}</span>
            </div>

            <div className="space-y-3">
                {candidates.map((candidate) => (
                    <CandidateCard
                        key={candidate.id}
                        candidate={candidate}
                    />
                ))}
            </div>
        </div>
    );
}