"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    Loader2,
    CheckCircle2,
    Upload,
    FileText,
    AlertTriangle,
    BarChart3,
    Search,
    BriefcaseBusiness,
    GraduationCap,
    FileBadge,
} from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { toast } from "sonner";

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

const steps = [
    "Uploading Resume...",
    "Extracting Text...",
    "Parsing Resume...",
    "Checking ATS Formatting...",
    "Analyzing Keywords...",
    "Calculating ATS Score...",
];

type ATSResult = {
    score: number;
    message: string;
};

export default function ResumeAtsChecker() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState("");
    const [result, setResult] = useState<ATSResult | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    const checkATS = async (resume: File) => {
        try {
            setDialogOpen(true);
            setLoading(true);
            setProgress(0);
            setCurrentStep("");

            for (let i = 0; i < steps.length; i++) {
                setCurrentStep(steps[i]);
                await new Promise((resolve) => setTimeout(resolve, 900));
                setProgress(Math.round(((i + 1) / steps.length) * 100));
            }

            /**
             * Replace this section with your API call.
             *
             * Example:
             *
             * const formData = new FormData();
             * formData.append("resume", resume);
             *
             * const response = await fetch("/api/ats", {
             *   method: "POST",
             *   body: formData,
             * });
             *
             * const data = await response.json();
             */

            const fakeScore = Math.floor(Math.random() * 21) + 75;

            setResult({
                score: fakeScore,
                message:
                    fakeScore >= 90
                        ? "Excellent Resume!"
                        : fakeScore >= 80
                            ? "Great Resume!"
                            : fakeScore >= 70
                                ? "Good Resume!"
                                : "Needs Improvement",
            });

            toast.success("ATS Analysis Completed Successfully ✅");
        } catch (error) {
            toast.error("Unable to analyze resume.");
            console.error(error);
        } finally {
            setLoading(false);
            setDialogOpen(false);
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0];

        if (!selected) return;

        if (
            ![
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ].includes(selected.type)
        ) {
            toast.error("Only PDF or DOC files are supported.");
            return;
        }

        if (selected.size > 8 * 1024 * 1024) {
            toast.error("Maximum file size is 8MB.");
            return;
        }

        setFile(selected);
        const url = URL.createObjectURL(selected)
        setPdfUrl(url);
        await checkATS(selected);
    };

    return (
        <main className="bg-background">
            {/* Hero */}

            <section className="">
                <div className="mx-auto max-w-6xl px-3 py-20 text-center">
                    <span className="rounded-full bg-background border border-orange-600/80 px-4 py-2 text-sm font-medium text-orange-600">
                        🚀 Check ATS Score Free
                    </span>

                    <h1 className="mt-6 text-5xl font-bold md:text-6xl bg-linear-to-r from-orange-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">
                        Check Your Resume Score

                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Upload your resume and receive an ATS compatibility score with
                        keyword analysis, formatting suggestions, and actionable
                        improvements.
                    </p>
                </div>
            </section>

            {/* Upload + Score */}

            <section className="mx-auto max-w-6xl px-3 py-16">
                <div className="grid lg:grid-cols-2">
                    {/* Upload Card */}
                    <Card className="border-2 border-dashed rounded-t-2xl lg:rounded-t-xs lg:rounded-l-2xl p-10 flex flex-col items-center justify-center text-center">
                        <Upload className="h-14 w-14 text-orange-600" />

                        <h2 className="mt-5 text-2xl font-bold">
                            Upload Resume
                        </h2>

                        <p className="mt-3 text-muted-foreground">
                            Upload your PDF or DOCX resume for ATS analysis.
                        </p>

                        <Input
                            id="resume-upload"
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                        />

                        <Button
                            asChild
                            className="mt-5 bg-orange-600 hover:bg-orange-600/80 text-white px-4 font-bold"
                            disabled={loading}
                        >
                            <label
                                htmlFor="resume-upload"
                                className="cursor-pointer"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Checking...
                                    </>
                                ) : (
                                    <>
                                        <Upload className="mr-2 h-4 w-4" />
                                        {file ? "Change Resume" : "Choose Resume"}
                                    </>
                                )}
                            </label>
                        </Button>

                        {file && (
                            <p className="mt-4 text-sm text-muted-foreground truncate max-w-xs">
                                {file.name}
                            </p>
                        )}
                    </Card>

                    {/* Score Card */}
                    <Card className="rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-xs p-10 flex flex-col items-center justify-center">
                        <div
                            className="relative flex h-45 w-45 items-center justify-center rounded-full bg-accent"
                            style={{
                                background: `conic-gradient(
                                #379c09 ${result?.score! * 3.6}deg,
                                #1524 ${result?.score! * 3.6}deg 360deg
                            )`,
                            }}>
                            <div className="flex h-38 w-38 flex-col items-center justify-center rounded-full bg-card">
                                <h2 className="text-5xl font-bold">{result?.score || "00"}</h2>

                                <p className="text-muted-foreground">ATS Score</p>
                            </div>
                        </div>

                        <p className="mt-6 text-lg font-semibold text-green-600">
                            {result?.message ?? "Upload Resume"}
                        </p>

                        <p className="mt-2 text-center text-muted-foreground">
                            {result
                                ? "Your resume has been successfully analyzed."
                                : "Upload your resume to generate an ATS compatibility report."}
                        </p>
                    </Card>
                </div>

                {/* Preview */}
                {pdfUrl && (
                    <Card className="mt-8 overflow-hidden rounded-2xl">
                        <div className="flex flex-col gap-4 border-b p-5 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">
                                    Resume Preview
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {file?.name}
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    onClick={() => window.open(pdfUrl, "_blank")}
                                >
                                    Preview Full Screen
                                </Button>

                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        setPdfUrl(null);
                                        setFile(null);
                                        setResult(null);
                                        toast.success("Resume removed successfully ✅");
                                    }}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>

                        <iframe
                            src={pdfUrl}
                            title="Resume Preview"
                            className="min-h-150 w-full"
                        />
                    </Card>
                )}
            </section>

            {/* Analysis */}

            <section className="bg-muted/40 py-20">
                <div className="mx-auto max-w-6xl px-3">

                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold">
                            {!result?.score ? (<span>Upload Resume To See </span>) : ""}  ATS Analysis Report
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            Here's how your resume performs across important ATS categories.
                        </p>
                    </div>

                    {result?.score ? (
                        <div className="grid gap-6 md:grid-cols-2">
                            {analysis.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Card key={item.title} className="px-5 py-5 rounded-lg">
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
                                            <div
                                                className="relative flex h-18 w-18 items-center justify-center rounded-full"
                                                style={{
                                                    background: `conic-gradient(
                                            #379c09 ${item.progress! * 3.6}deg,
                                            #1524 ${item.progress! * 3.6}deg 360deg
                                        )`,
                                                }}>
                                                <div className="flex h-15 w-15 flex-col items-center justify-center rounded-full bg-card">
                                                    <h2 className="text-lg font-bold">{item.progress + " % " || "--"}</h2>

                                                    {/* <p className="text-muted-foreground">ATS Score</p> */}
                                                </div>
                                            </div>
                                        </div>

                                    </Card>
                                );
                            })}
                        </div>
                    ) : (
                        <Card className='rounded-lg blur-xs text-center font-bold text-3xl py-10'>
                            <div className="grid gap-6 md:grid-cols-2">
                                {analysis.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <Card key={item.title} className="px-5 py-5 rounded-lg">
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
                                                <div
                                                    className="relative flex h-18 w-18 items-center justify-center rounded-full"
                                                    style={{
                                                        background: `conic-gradient(
                                            #379c09 ${item.progress! * 3.6}deg,
                                            #1524 ${item.progress! * 3.6}deg 360deg
                                        )`,
                                                    }}>
                                                    <div className="flex h-15 w-15 flex-col items-center justify-center rounded-full bg-card">
                                                        <h2 className="text-lg font-bold">{item.progress + " % " || "--"}</h2>

                                                        {/* <p className="text-muted-foreground">ATS Score</p> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </Card>
                                    );
                                })}
                            </div>
                        </Card>
                    )}
                </div>
            </section>

            {/* Suggestions */}

            {result?.score ? (
                <section className="mx-auto max-w-6xl px-3 py-20">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold">
                            Suggestions to Improve
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

                        {[
                            "Add more industry-specific keywords from the job description.",
                            "Quantify your achievements using numbers and metrics.",
                            "Avoid using tables, images, and text boxes.",
                            "Keep section headings simple and ATS-friendly.",
                            "Include technical skills relevant to your target role.",
                        ].map((tip) => (
                            <Card key={tip} className="flex p-5 rounded-lg text-sm">
                                <AlertTriangle className="h-10 w-10 text-orange-600 p-2 rounded-md bg-orange-700/20" />
                                <p>{tip}</p>
                            </Card>
                        ))}
                    </div>
                </section>
            ) : (
                <section className="mx-auto max-w-6xl px-3 py-20">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold">
                            Upload Resume To See Suggestions to Improve
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 blur-xs lg:grid-cols-3 gap-3">

                        {[
                            "Add more industry-specific keywords from the job description.",
                            "Quantify your achievements using numbers and metrics.",
                            "Avoid using tables, images, and text boxes.",
                            "Keep section headings simple and ATS-friendly.",
                            "Include technical skills relevant to your target role.",
                        ].map((tip) => (
                            <Card key={tip} className="flex p-5 rounded-lg text-sm">
                                <AlertTriangle className="h-10 w-10 text-orange-600 p-2 rounded-md bg-orange-700/20" />
                                <p>{tip}</p>
                            </Card>
                        ))}
                    </div>
                </section>
            )}

            {/* Features */}

            <section className="bg-muted/40 py-20">
                <div className="mx-auto max-w-6xl px-3">
                    <div className="grid gap-6 md:grid-cols-3">
                        <Card className="p-8 text-center rounded-lg">
                            <FileText className="mx-auto h-10 w-10 text-orange-600" />
                            <h3 className="mt-4 text-lg font-bold">Resume Parsing</h3>
                            <p className="text-sm text-muted-foreground">
                                Extracts and analyzes every section of your resume.
                            </p>
                        </Card>

                        <Card className="p-8 text-center rounded-lg">
                            <Search className="mx-auto h-10 w-10 text-orange-600" />
                            <h3 className="mt-4 text-lg font-bold">Keyword Analysis</h3>
                            <p className="text-sm text-muted-foreground">
                                Finds missing keywords recruiters are looking for.
                            </p>
                        </Card>

                        <Card className="p-8 text-center rounded-lg">
                            <BarChart3 className="mx-auto h-10 w-10 text-orange-600" />
                            <h3 className="mt-4 text-lg font-bold">ATS Score</h3>
                            <p className="text-sm text-muted-foreground">
                                Get a detailed compatibility score instantly.
                            </p>
                        </Card>

                    </div>

                </div>
            </section>
            <Dialog open={dialogOpen}>
                <DialogContent className="sm:max-w-md rounded-lg">
                    <DialogHeader>
                        <DialogTitle>Analyzing Resume</DialogTitle>

                        <DialogDescription>
                            Please wait while our AI evaluates your resume.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6">
                        <Progress value={progress} />

                        <div className="flex items-center gap-3">
                            <Loader2 className="h-5 w-5 animate-spin text-orange-600" />

                            <span className="font-medium">
                                {currentStep}
                            </span>
                        </div>

                        <p className="text-sm text-muted-foreground">
                            {progress}% Completed
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </main>
    );
}