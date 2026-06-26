"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Candidate } from "@/services/candidate";
import { formatDate } from "@/services/formatdate";
import { Star } from "lucide-react";
import CandidateViewModal from "../../components/CandidateViewModel";
import { useState } from "react";

interface Props {
    candidate: Candidate;
}

export default function CandidateCard({ candidate }: Props) {

    const [selectedId, setSelectedId] = useState("");
    const [open, setOpen] = useState(false);

    function StarRating({ rating }: { rating: number }) {
        return (
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i <= rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-slate-100 text-slate-200"
                            }`}
                    />
                ))}
            </div>
        );
    }

    return (
        <Card
            draggable
            onDragStart={(e) =>
                e.dataTransfer.setData("candidateId", candidate.id)
            }
            className="cursor-grab rounded-md bg-card active:cursor-grabbing"
            onClick={() => {
                setSelectedId(candidate.id);
                setOpen(true);
            }}
        >
            <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold uppercase">{candidate.name}</h3>

                <p className="text-sm text-muted-foreground">
                    {candidate.headline}
                </p>

                <div className='flex items-center gap-2 text-muted-foreground'>
                    <span>Rating : {candidate.rating} / 5</span>
                    <StarRating rating={candidate.rating} />
                </div>

                <p className="text-xs text-muted-foreground">
                    {candidate.location}
                </p>
                <p className={`text-xs text-muted-foreground text-end`}>
                    {formatDate(candidate.createdAt)}
                </p>
                <hr />
                <p className={`text-xs capitalize font-bold `}>
                    {candidate?.job.title}
                </p>
            </CardContent>
            <CandidateViewModal
                id={selectedId}
                open={open}
                onOpenChange={setOpen}
            />
        </Card>
    );
}