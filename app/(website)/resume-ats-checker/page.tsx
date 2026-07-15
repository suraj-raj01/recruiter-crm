"use client";

import {
    Upload,
    FileText,
    CheckCircle2,
    AlertTriangle,
    BarChart3,
    Search,
    BriefcaseBusiness,
    GraduationCap,
    FileBadge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const analysis = [
    {
        title: "Contact Information",
        icon: CheckCircle2,
        status: "Excellent",
        progress: 100,
    },
    {
        title: "Skills Match",
        icon: Search,
        status: "Good",
        progress: 82,
    },
    {
        title: "Experience",
        icon: BriefcaseBusiness,
        status: "Needs Improvement",
        progress: 68,
    },
    {
        title: "Education",
        icon: GraduationCap,
        status: "Good",
        progress: 88,
    },
    {
        title: "ATS Formatting",
        icon: FileBadge,
        status: "Excellent",
        progress: 96,
    },
];

export default function ResumeAtsChecker() {
    return (
        <main className="bg-background">
            {/* Hero */}

            <section className="border-b">
                <div className="mx-auto max-w-6xl px-3 py-20 text-center">
                    <span className="rounded-full bg-orange-600/10 px-4 py-2 text-sm font-medium text-orange-600">
                        Free ATS Resume Checker
                    </span>

                    <h1 className="mt-6 text-4xl font-bold md:text-6xl">
                        Check Your Resume ATS Score
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Upload your resume and receive an ATS compatibility score with
                        keyword analysis, formatting suggestions, and actionable
                        improvements.
                    </p>
                </div>
            </section>

            {/* Upload + Score */}

            <section className="mx-auto grid max-w-6xl gap-8 px-3 py-16 lg:grid-cols-2">

                <Card className="rounded-2xl border-2 border-dashed p-10">
                    <div className="flex flex-col items-center text-center">
                        <Upload className="h-14 w-14 text-orange-600" />

                        <h2 className="mt-5 text-2xl font-bold">
                            Upload Resume
                        </h2>

                        <p className="mt-3 text-muted-foreground">
                            Drag & drop your resume here or click below.
                        </p>

                        <Button className="mt-8">
                            <Upload className="mr-2 h-4 w-4" />
                            Choose Resume
                        </Button>

                        <p className="mt-4 text-sm text-muted-foreground">
                            PDF • DOC • DOCX • Max 5 MB
                        </p>
                    </div>
                </Card>

                <Card className="flex flex-col items-center justify-center rounded-2xl p-10">
                    <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[14px] border-orange-600">
                        <div className="text-center">
                            <p className="text-5xl font-bold">84</p>
                            <p className="text-muted-foreground">ATS Score</p>
                        </div>
                    </div>

                    <p className="mt-6 text-lg font-semibold text-green-600">
                        Great Resume!
                    </p>

                    <p className="mt-2 text-center text-muted-foreground">
                        Your resume is ATS-friendly but can still be optimized for better
                        keyword matching.
                    </p>
                </Card>
            </section>

            {/* Analysis */}

            <section className="bg-muted/40 py-20">
                <div className="mx-auto max-w-6xl px-3">

                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold">
                            ATS Analysis Report
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            Here's how your resume performs across important ATS categories.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {analysis.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Card key={item.title} className="p-6">

                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center gap-3">

                                            <div className="rounded-lg bg-orange-600/10 p-3 text-orange-600">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold">{item.title}</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {item.status}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="font-bold">
                                            {item.progress}%
                                        </span>
                                    </div>

                                    <Progress
                                        value={item.progress}
                                        className="mt-5"
                                    />
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Suggestions */}

            <section className="mx-auto max-w-6xl px-3 py-20">

                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold">
                        Suggestions to Improve
                    </h2>
                </div>

                <div className="space-y-4">

                    {[
                        "Add more industry-specific keywords from the job description.",
                        "Quantify your achievements using numbers and metrics.",
                        "Avoid using tables, images, and text boxes.",
                        "Keep section headings simple and ATS-friendly.",
                        "Include technical skills relevant to your target role.",
                    ].map((tip) => (
                        <Card key={tip} className="flex gap-4 p-5">
                            <AlertTriangle className="mt-1 h-5 w-5 text-orange-500" />
                            <p>{tip}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Features */}

            <section className="bg-muted/40 py-20">

                <div className="mx-auto max-w-6xl px-3">

                    <div className="grid gap-6 md:grid-cols-3">

                        <Card className="p-8 text-center">
                            <FileText className="mx-auto h-10 w-10 text-orange-600" />
                            <h3 className="mt-4 font-bold">Resume Parsing</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Extracts and analyzes every section of your resume.
                            </p>
                        </Card>

                        <Card className="p-8 text-center">
                            <Search className="mx-auto h-10 w-10 text-orange-600" />
                            <h3 className="mt-4 font-bold">Keyword Analysis</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Finds missing keywords recruiters are looking for.
                            </p>
                        </Card>

                        <Card className="p-8 text-center">
                            <BarChart3 className="mx-auto h-10 w-10 text-orange-600" />
                            <h3 className="mt-4 font-bold">ATS Score</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Get a detailed compatibility score instantly.
                            </p>
                        </Card>

                    </div>

                </div>
            </section>
        </main>
    );
}