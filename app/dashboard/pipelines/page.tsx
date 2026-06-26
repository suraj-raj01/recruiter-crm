"use client";

import { api } from "@/services/api";
import { Candidate } from "@/services/candidate";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import PipelineBoard from "./components/PipelineBoard";
import { Stage } from "@/services/constants";

export default function PipelinePage() {
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        loadCandidates();
    }, []);

    async function loadCandidates() {
        const res = await api.getCandidates();
        setCandidates(res?.candidates);
        console.log(res)
    }

    async function moveCandidate(
        candidateId: string,
        stage: Stage
    ) {
        try {
            // console.log(candidateId,'id')
            await api.moveCandidate(candidateId, stage);
            setCandidates((prev) =>
                prev.map((candidate) =>
                    candidate.id === candidateId
                        ? { ...candidate, stage }
                        : candidate
                )
            );

            toast.success("Candidate moved successfully");
        } catch {
            toast.error("Unable to move candidate");
        }
    }

    return (
        <div className="p-5 min-h-screen">
            <PipelineBoard
                candidates={candidates}
                onMove={moveCandidate}
            />
        </div>
    );
}