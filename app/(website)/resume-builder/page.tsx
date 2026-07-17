"use client";

import {
    User,
    BriefcaseBusiness,
    GraduationCap,
    Award,
    Code2,
    FileText,
    Download,
    Save,
    Eye,
    Plus,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const sections = [
    { title: "Personal Info", icon: User },
    { title: "Summary", icon: FileText },
    { title: "Experience", icon: BriefcaseBusiness },
    { title: "Education", icon: GraduationCap },
    { title: "Skills", icon: Code2 },
    { title: "Projects", icon: Award },
];

export default function ResumeBuilder() {
    return (
        <section className="bg-muted/30 py-10">
            <div className="mx-auto max-w-6xl px-3">
                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h1 className="text-4xl font-bold">
                            Resume Builder
                        </h1>

                        <p className="mt-2 text-muted-foreground">
                            Create a professional ATS-friendly resume with live preview.
                        </p>
                    </div>

                    <div className="flex gap-1 lg:gap-3">
                        <Button variant="outline">
                            <Save className="mr-1 h-4 w-4" />
                            Save Draft
                        </Button>

                        <Button variant="outline">
                            <Eye className="mr-1 h-4 w-4" />
                            Preview
                        </Button>

                        <Button className="bg-orange-600 text-white hover:bg-orange-700">
                            <Download className="mr-1 h-4 w-4" />
                            Download PDF
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-2">
                    {/* Sidebar */}
                    <Card className="h-fit rounded-2xl p-5">
                        <h2 className="mb-5 text-lg font-semibold">
                            Resume Sections
                        </h2>

                        <div className="space-y-2">
                            {sections.map((item) => (
                                <button
                                    key={item.title}
                                    className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-orange-950/20"
                                >
                                    <item.icon size={18} />

                                    <span>{item.title}</span>
                                </button>
                            ))}
                        </div>

                        <Separator className="my-5" />

                        <Button className="w-full">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Section
                        </Button>
                    </Card>

                    {/* Editor */}
                    <Card className="h-fit rounded-2xl p-6">
                        <h2 className="text-xl font-semibold">
                            Edit Section
                        </h2>

                        <div className="mt-6 space-y-5">
                            <div>
                                <label className="text-sm font-medium">
                                    Full Name
                                </label>

                                <Input
                                    placeholder="John Doe"
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">
                                    Job Title
                                </label>

                                <Input
                                    placeholder="Frontend Developer"
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">
                                    Professional Summary
                                </label>

                                <Textarea
                                    className="mt-2 min-h-40"
                                    placeholder="Write a professional summary..."
                                />
                            </div>

                            <Button className="w-full text-white bg-orange-600 hover:bg-orange-700">
                                Save Changes
                            </Button>
                        </div>
                    </Card>
                    {/* Resume Preview */}
                    <Card className="overflow-hidden rounded-2xl">
                        <div className="border-b bg-muted/40 px-6 py-4">
                            <h2 className="font-semibold">
                                Live Resume Preview
                            </h2>
                        </div>

                        <div className="flex justify-center bg-muted/20 p-8">
                            <div className="min-h-fit w-full max-w-200 rounded-md border bg-white p-10 shadow-lg">
                                <h1 className="text-3xl font-bold text-black">
                                    Suraj Kumar
                                </h1>

                                <p className="mt-2 text-gray-600">
                                    Full Stack MERN Developer
                                </p>

                                <Separator className="my-6" />

                                <h2 className="font-bold text-black">
                                    Professional Summary
                                </h2>

                                <p className="mt-2 text-sm leading-7 text-gray-700">
                                    Passionate Full Stack Developer with
                                    experience building scalable web
                                    applications using React, Next.js, Node.js,
                                    Express, MongoDB and TypeScript.
                                </p>

                                <Separator className="my-6" />

                                <h2 className="font-bold text-black">
                                    Skills
                                </h2>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {[
                                        "React",
                                        "Next.js",
                                        "TypeScript",
                                        "Node.js",
                                        "MongoDB",
                                        "Express",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded bg-gray-100 px-3 py-1 text-sm text-black"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>

                    
                </div>
            </div>
        </section>
    );
}