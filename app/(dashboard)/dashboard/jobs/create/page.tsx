'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
import { Save, Loader2, File } from "lucide-react";
import { useState } from "react";
import { HeaderCard } from "../../components/HeaderCard";
import { api } from "@/services/api";
import { Job } from "@/types/api";
import { useRouter } from "next/navigation";
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


export default function CreateJobs() {
    const [form, setForm] = useState(emptyForm);
    const [saving, setSaving] = useState(false);

    const update = (
        key: keyof typeof form,
        value: string
    ) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const submit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        try {
            setSaving(true);

            await api.createJob({
                ...form,
                skills: form.skills
                    .split(",")
                    .map((skill) => skill.trim())
                    .filter(Boolean),
            } as Job);
            setForm(emptyForm);
            toast.success("Job created successfully")
            useRouter().push("/dashboard/jobs")
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
                    buttontitle="All Jobs"
                    link="/dashboard/jobs"
                />
                <div className="pb-4 mx-auto flex items-center justify-end gap-2">
                    <Button variant='outline' className="font-bold flex items-center justify-center gap-2"><File/> Import file</Button>
                    <Button variant='default' className="font-bold flex items-center justify-center gap-2"> <File />Demo file</Button>
                </div>
                <form onSubmit={submit}>
                    <Card className="max-w-full mx-auto rounded-sm md:px-10 md:py-10 py-5 px-0">
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
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="mr-2 h-4 w-4" />
                                            Save Job
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