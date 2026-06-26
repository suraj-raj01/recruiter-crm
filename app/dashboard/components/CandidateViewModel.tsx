"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Loader2, Star } from "lucide-react";
import { Candidate } from "@/types/api";
import AddNoteModal from "./AddNoteModel";

interface CandidateViewModalProps {
    id: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CandidateViewModal({
    id,
    open,
    onOpenChange,
}: CandidateViewModalProps) {
    const [candidate, setCandidate] = useState<Candidate | null>(null);
    const [loading, setLoading] = useState(false);
    const [stage, setStage] = useState("");
    const [updatingStage, setUpdatingStage] = useState(false);
    const [openNote, setOpenNote] = useState(false);
    const [selectedId, setSelectedId] = useState("");

    useEffect(() => {
        if (open && id) {
            loadCandidate();
        }
    }, [open, id]);

    const loadCandidate = async () => {
        try {
            setLoading(true);
            const res = await api.getCandidate(id);
            const candidateData = res?.candidate as any;
            setCandidate(candidateData);
            setStage(candidateData?.stage || "");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleStageChange = async (value: string) => {
        const previousStage = stage;
        setStage(value); // Optimistic update
        try {
            setUpdatingStage(true);
            await api.updateCandidate(id, {
                stage: value,
            });
            setCandidate((prev) =>
                prev ? { ...prev, stage: value } : prev
            );
        } catch (err) {
            console.error(err);
            // Rollback if API fails
            setStage(previousStage);
        } finally {
            setUpdatingStage(false);
        }
    };

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
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="md:max-w-3xl w-full rounded-sm ">
                <DialogHeader>
                    <DialogTitle>Candidate Details</DialogTitle>
                    <DialogDescription>
                        View candidate information.
                    </DialogDescription>
                </DialogHeader>

                {loading ? (
                    <div className="flex justify-center py-10">
                        <Loader2 className="h-6 w-6 animate-spin" />
                    </div>
                ) : candidate ? (
                    <div className="space-y-5">
                        <div>
                            <h2 className="text-2xl font-bold">
                                {candidate.name}
                            </h2>

                            <p className="text-muted-foreground">
                                {candidate.headline}
                            </p>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Email
                                </p>

                                <p>{candidate.email}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Phone
                                </p>

                                <p>{candidate.phone || "-"}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Location
                                </p>

                                <p>{candidate.location || "-"}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Experience
                                </p>

                                <p>{candidate?.experience || "-"}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Stage
                                </p>

                                <Select
                                    value={stage}
                                    onValueChange={handleStageChange}
                                    disabled={updatingStage}
                                >
                                    <SelectTrigger className="md:max-w-30 rounded-sm">
                                        <SelectValue placeholder="Select Stage" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Applied">Applied</SelectItem>
                                            <SelectItem value="Screen">Screening</SelectItem>
                                            <SelectItem value="Interview">Interview</SelectItem>
                                            <SelectItem value="Offer">Offer</SelectItem>
                                            <SelectItem value="Hired">Hired</SelectItem>
                                            <SelectItem value="Rejected">Rejected</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Rating
                                </p>
                                <div className='flex items-center gap-2'>
                                    <Badge className="bg-muted text-slate-500">{candidate.rating ?? 0}/5</Badge>
                                    <StarRating rating={candidate.rating ?? 0} />
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Applied Job
                                </p>

                                <p>{candidate.job?.title ?? "N/A"}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Source
                                </p>

                                <p>{candidate.source ?? "Other"}</p>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h4 className="font-semibold mb-2">
                                Skills
                            </h4>

                            <div className="flex flex-wrap gap-2">
                                {candidate.skills?.length ? (
                                    candidate.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))
                                ) : (
                                    <p className="text-muted-foreground">
                                        No skills available.
                                    </p>
                                )}
                            </div>
                        </div>

                        {candidate.notes && (
                            <>
                                <Separator />

                                <div>
                                    <h4 className="font-semibold mb-2">
                                        Notes
                                    </h4>

                                    <div className="text-muted-foreground flex flex-wrap gap-2">
                                        {candidate.notes.map((note, idx) => (
                                            <Badge className="bg-muted text-slate-400" key={idx}>{note?.body}</Badge>
                                        ))}
                                    </div>
                                    <Badge className='mt-3 cursor-pointer' onClick={() => {
                                        setSelectedId(candidate?.id);
                                        setOpenNote(true);
                                    }}>+ Notes</Badge>
                                    <AddNoteModal
                                        id={selectedId}
                                        open={openNote}
                                        onOpenChange={setOpenNote}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground">
                        Candidate not found.
                    </p>
                )}
            </DialogContent>
        </Dialog>
    );
}