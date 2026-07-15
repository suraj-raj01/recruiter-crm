'use client'
import { Loader2, Save, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SOURCES, STAGES } from "@/services/constants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Job } from "@/types/api";
import { api } from "@/services/api";
import { Card } from "@/components/ui/card";
import { HeaderCard } from "../../components/HeaderCard";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";

const emptyForm = {
    name: "",
    email: "",
    phone: "",
    location: "",
    headline: "",
    source: "LinkedIn",
    stage: "Applied",
    rating: 4,
    jobId: "",
    skills: "",
    salaryExpectation: "",
    noticePeriod: "",
    resumeUrl: "",
    nextStep: "Recruiter follow-up",
    nextStepDueDate: ""
};

export default function UpdateCandidate() {
    const [form, setForm] = useState(emptyForm);
    const [saving, setSaving] = useState(false);
    const [jobs, setJobs] = useState<Job[]>([]);

    const params = useParams();
    const id = params?.id as string;
    
    const loadCandidate = async () => {
        try {
            const res = await api.getCandidate(id);
            // setJobs(res.candidate);
            setForm(res.candidate as any)
        } catch (err) {
            console.log(err);
        }
    };
    
    const fetchJobs = async () => {
        try {
            const res = await api.getJobs();
            setJobs(res.jobs);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchJobs();
        loadCandidate();
    }, []);

    const update = (key: keyof typeof form, value: any) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setSaving(true);
            await api.updateCandidate(id,{
                ...form,
            } as any);
            toast.success("Candidate updated successfully")
            useRouter().push("/dashboard/candidate")
        } catch (err) {
            console.log(err);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="w-full p-4" >
            <HeaderCard
                title="Candidates"
                description="Create the candidates and track their hiring pipeline."
                buttontitle="See Candidates"
                link="/dashboard/candidate"
            />
            <Card className="w-full md:px-10 md:py-8 p-3">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={submit}>
                    <div>
                        <Label>Name</Label>
                        <Input
                            value={form.name}
                            placeholder="Candidate name"
                            onChange={(e) =>
                                update("name", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={form.email}
                            placeholder="Email"
                            onChange={(e) =>
                                update("email", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <Label>Phone</Label>
                        <Input
                            type="number"
                            value={form.phone}
                            placeholder="Phone"
                            onChange={(e) =>
                                update("phone", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <Label>Location</Label>
                        <Input
                            type="string"
                            value={form.location}
                            placeholder="Location"
                            onChange={(e) =>
                                update("location", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <Label>Headline</Label>
                        <Input
                            type="string"
                            value={form.headline}
                            placeholder="Headline"
                            onChange={(e) =>
                                update("headline", e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <Label>Job</Label>
                        <Select
                            value={form.jobId}
                            onValueChange={(v) => update("jobId", v)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Job" />
                            </SelectTrigger>

                            <SelectContent>
                                {jobs.map((job) => (
                                    <SelectItem
                                        key={job.id}
                                        value={job.id}
                                    >
                                        {job.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label>Stage</Label>
                        <Select
                            value={form.stage}
                            onValueChange={(v) =>
                                update("stage", v)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                {STAGES.map((stage) => (
                                    <SelectItem
                                        key={stage}
                                        value={stage}
                                    >
                                        {stage}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Source</Label>
                        <Select
                            value={form.source}
                            onValueChange={(v) =>
                                update("source", v)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                {SOURCES.map((source) => (
                                    <SelectItem
                                        key={source}
                                        value={source}
                                    >
                                        {source}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Rating</Label>
                        <Input
                            type="number"
                            value={form.rating}
                            onChange={(e) =>
                                update("rating", e.target.value)
                            }
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Label>Skills</Label>
                        <Input
                            placeholder="React, Node.js, MongoDB"
                            value={form.skills}
                            onChange={(e) =>
                                update("skills", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <Label>Salary</Label>
                        <Input
                            type="number"
                            value={form.salaryExpectation}
                            placeholder="Salary"
                            onChange={(e) =>
                                update("salaryExpectation", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <Label>Notice period</Label>
                        <Input
                            type="number"
                            value={form.noticePeriod}
                            placeholder="Notice period"
                            onChange={(e) =>
                                update("noticePeriod", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <Label>Next step</Label>
                        <Input
                            type="string"
                            value={form.nextStep}
                            onChange={(e) =>
                                update("nextStep", e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <Label>Due date</Label>
                        <Input
                            type="date"
                            value={form.nextStepDueDate}
                            onChange={(e) =>
                                update("nextStepDueDate", e.target.value)
                            }
                        />
                    </div>

                    <div className="md:col-span-2">
                        <Label>Resume or Portfolio URL</Label>
                        <Input
                            value={form.resumeUrl}
                            placeholder="Paste your resume url or portfolio url"
                            onChange={(e) =>
                                update("resumeUrl", e.target.value)
                            }
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-6">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() =>
                                setForm({
                                    ...emptyForm,
                                    jobId: jobs[0]?.id ?? "",
                                })
                            }
                        >
                            Reset
                        </Button>

                        <Button
                            type="submit"
                            disabled={saving}
                        >
                            {saving ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Updating...
                                </>
                            ) : (
                                <>
                                    <Save className="mr-2 h-4 w-4" />
                                    Update Candidate
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}