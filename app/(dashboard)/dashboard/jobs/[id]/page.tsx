'use client';

import { Card, CardContent} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Save, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { HeaderCard } from "../../components/HeaderCard";
import { api } from "@/services/api";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

const EMPLOYMENT_TYPES = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Remote",
];

const JOB_STATUSES = [
    "Open",
    "Closed",
    "Paused",
];

const PRIORITIES = [
    "Low",
    "Medium",
    "High",
];

const emptyForm = {
    title: "",
    department: "",
    location: "",
    employmentType: "Full-time",
    status: "Open",
    hiringManager: "",
    salaryRange: "",
    priority: "Medium",
    skills: "",
    description: "",
};


export default function UpdateJobs() {
    const [form, setForm] = useState(emptyForm);
    const [saving, setSaving] = useState(false);
    const params = useParams();
    const id = params?.id as string;


    const fetchJobById = async () => {
        try {
            const res = await api.getJob(id);
            setForm({
                ...res.jobs,
                skills: res.jobs.skills.join(", "),
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(()=>{
        fetchJobById();
    },[id])

    const update = (
        key: keyof typeof form,
        value: string
    ) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const router = useRouter();
    const submit = async (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        try {
            setSaving(true);
            await api.updateJob(id,form);
            toast.success("Job updated successfully")
            router.push("/dashboard/jobs")
        } catch (error) {
            console.error(error);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="w-full p-4">
            <section className="w-full">
                <HeaderCard
                    title="JOBS"
                    description="Manage all jobs and track their hiring pipeline."
                    buttontitle="See Jobs"
                    link="/dashboard/jobs"
                />

                <form onSubmit={submit}>
                    <Card className="max-w-full mx-auto rounded-sm lg:px-10 px-0 lg:py-10 py-5">
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <Label>Job Title</Label>
                                    <Input
                                        value={form.title}
                                        onChange={(e) => update("title", e.target.value)}
                                        placeholder="Frontend Developer"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Department</Label>
                                    <Input
                                        value={form.department}
                                        onChange={(e) => update("department", e.target.value)}
                                        placeholder="Engineering"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Location</Label>
                                    <Input
                                        value={form.location}
                                        onChange={(e) => update("location", e.target.value)}
                                        placeholder="Noida"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Hiring Manager</Label>
                                    <Input
                                        value={form.hiringManager}
                                        onChange={(e) => update("hiringManager", e.target.value)}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Employment Type</Label>

                                    <Select
                                        value={form.employmentType}
                                        onValueChange={(value) =>
                                            update("employmentType", value)
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>

                                        <SelectContent>
                                            {EMPLOYMENT_TYPES.map((item) => (
                                                <SelectItem key={item} value={item}>
                                                    {item}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Status</Label>

                                    <Select
                                        value={form.status}
                                        onValueChange={(value) =>
                                            update("status", value)
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>

                                        <SelectContent>
                                            {JOB_STATUSES.map((item) => (
                                                <SelectItem key={item} value={item}>
                                                    {item}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Priority</Label>

                                    <Select
                                        value={form.priority}
                                        onValueChange={(value) =>
                                            update("priority", value)
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>

                                        <SelectContent>
                                            {PRIORITIES.map((item) => (
                                                <SelectItem key={item} value={item}>
                                                    {item}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Salary Range</Label>
                                    <Input
                                        value={form.salaryRange}
                                        onChange={(e) =>
                                            update("salaryRange", e.target.value)
                                        }
                                        placeholder="₹8L - ₹12L"
                                    />
                                </div>

                            </div>

                            <div className="space-y-2">
                                <Label>Skills (write skills with comma separated)</Label>

                                <Input
                                    value={form.skills}
                                    onChange={(e) =>
                                        update("skills", e.target.value)
                                    }
                                    placeholder="React, Node.js, MongoDB"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Description</Label>

                                <Textarea
                                    rows={6}
                                    value={form.description}
                                    onChange={(e) =>
                                        update("description", e.target.value)
                                    }
                                    placeholder="Write job description..."
                                />
                            </div>

                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    disabled={saving}
                                    className="min-w-36"
                                >
                                    {saving ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            {id ? "Updating...":"Saving..."}
                                        </>
                                    ) : (
                                        <>
                                            <Save className="mr-2 h-4 w-4" />
                                                {id ? "Update Job" :"Save Job"}
                                        </>
                                    )}
                                </Button>
                            </div>

                        </CardContent>
                    </Card>
                </form>
            </section>
        </div>
    );
}