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

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { Job } from "@/types/dashboard";
import { formatDate } from "@/services/formatdate";

interface JobViewModalProps {
    id: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function JobViewModal({
    id,
    open,
    onOpenChange,
}: JobViewModalProps) {
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (open && id) {
            loadJob();
        }
    }, [open, id]);

    const loadJob = async () => {
        try {
            setLoading(true);
            const res = await api.getJob(id);
            setJob(res?.jobs as Job);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const statusColor = (status: string) => {
        switch (status) {
            case "Open":
                return "bg-green-100 text-green-700";

            case "Closed":
                return "bg-red-100 text-red-700";

            case "Paused":
                return "bg-yellow-100 text-yellow-700";

            default:
                return "bg-slate-100 text-slate-700";
        }
    };

    const priorityColor = (priority: string) => {
        switch (priority) {
            case "High":
                return "bg-red-100 text-red-700";

            case "Medium":
                return "bg-yellow-100 text-yellow-700";

            case "Low":
                return "bg-green-100 text-green-700";

            default:
                return "bg-slate-100 text-slate-700";
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-3xl md:px-10 md:py-5">
                <DialogHeader>
                    <DialogTitle>Job Details</DialogTitle>

                    <DialogDescription>
                        View complete job information.
                    </DialogDescription>
                </DialogHeader>

                {loading ? (
                    <div className="flex justify-center py-10">
                        <Loader2 className="h-6 w-6 animate-spin" />
                    </div>
                ) : job ? (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold">{job.title}</h2>

                            <p className="text-muted-foreground">
                                {job.department}
                            </p>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Department
                                </p>

                                <p>{job.department}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Location
                                </p>

                                <p>{job.location}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Employment Type
                                </p>

                                <p>{job.employmentType}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Hiring Manager
                                </p>

                                <p>{job.hiringManager}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Salary Range
                                </p>

                                <p>{job.salaryRange}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Status
                                </p>

                                <Badge className={statusColor(job.status)}>
                                    {job.status}
                                </Badge>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Priority
                                </p>

                                <Badge className={priorityColor(job.priority)}>
                                    {job.priority}
                                </Badge>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Job Posted
                                </p>

                                <p>
                                    {formatDate(job.createdAt)}
                                </p>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h4 className="font-semibold mb-2">
                                Description
                            </h4>

                            <p className="text-muted-foreground whitespace-pre-wrap">
                                {job.description || "No description available."}
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h4 className="font-semibold mb-2">
                                Required Skills
                            </h4>

                            <div className="flex flex-wrap gap-2">
                                {job.skills?.length ? (
                                    job.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                        >
                                            {skill}
                                        </Badge>
                                    ))
                                ) : (
                                    <p className="text-muted-foreground">
                                        No skills added.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground py-10">
                        Job not found.
                    </p>
                )}
            </DialogContent>
        </Dialog>
    );
}