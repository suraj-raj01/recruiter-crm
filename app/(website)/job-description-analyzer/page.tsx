"use client";

import {
    BriefcaseBusiness,
    Upload,
    FileText,
    Search,
    CheckCircle2,
    AlertTriangle,
    Sparkles,
    Target,
    BarChart3,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function JobDescriptionAnalyzer() {
    const [input, setInput] = useState("")
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [jdFile, setjdFile] = useState<File | null>(null);


    const handleChange = (e:any) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }   

    const handleFileChange = (e:any) => {
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0] || null)
    }   

    const handleJDChange = (e:any) => {
        console.log(e.target.files[0])
        setjdFile(e.target.files[0] || null)
    }   

    return (
        <section className="bg-background -mt-20 py-40">
            <div className="mx-auto max-w-6xl px-3">
                {/* Hero */}
                <div className="mx-auto max-w-3xl text-center">
                    <Badge className="bg-background border border-orange-600/80 text-orange-600 hover:bg-orange-600/90 text-sm rounded-full py-4 px-5">
                       🤖 AI Powered
                    </Badge>

                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Job Description Analyzer
                    </h1>

                    <p className="mt-5 text-lg text-muted-foreground">
                        Analyze any job description, discover required skills,
                        identify important keywords, and optimize your resume to
                        improve your ATS score.
                    </p>
                </div>

                {/* Main */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {/* Input */}
                    <Card className="rounded-lg p-8 h-fit">
                        <div className="flex items-center gap-3">
                            <BriefcaseBusiness className="text-orange-600" />
                            <h2 className="text-2xl font-bold">
                                Job Description
                            </h2>
                        </div>

                        <Textarea
                            placeholder="Paste the  complete job description here..."
                            className="mt-6 min-h-72 p-3 resize-none"
                            onChange={handleChange}
                        />

                        {/* inputs */}
                        <div className="flex flex-wrap gap-4">
                            <Input
                                id="image-upload"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                onChange={handleJDChange}
                            />

                            <Button
                                asChild
                                className="mt-8 bg-orange-600 hover:bg-orange-700"
                            >
                                <label htmlFor="image-upload" className="px-4 text-white cursor-pointer">
                                    <FileText className="mr-1 h-4 w-4" />
                                    Upload JD
                                </label>
                            </Button>

                            <Input
                                id="image-upload"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                onChange={handleFileChange}
                            />

                            <Button
                                asChild
                                className="mt-8 bg-orange-600 hover:bg-orange-700"
                            >
                                <label htmlFor="image-upload" className="px-4 text-white cursor-pointer">
                                    <FileText className="mr-1 h-4 w-4" />
                                    Resume
                                </label>
                            </Button>
                        </div>
                            {selectedFile?.name}

                        <Button
                            className="mt-3 h-12 w-full text-white bg-orange-600 text-base hover:bg-orange-700"
                        >
                            <Search className="mr-2 h-5 w-5" />
                            Analyze Job Description
                        </Button>
                    </Card>

                    {/* Results */}
                    <Card className={`${input.length>70?'blur-none':'blur-md'} rounded-lg p-8`}>
                        <div className="flex items-center gap-3">
                            <Sparkles className="text-orange-600" />
                            <h2 className="text-2xl font-bold">
                                Analysis Report
                            </h2>
                        </div>

                        {/* Match */}
                        <div className="mt-8 text-center">
                            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-12 border-green-500">
                                <div>
                                    <h2 className="text-5xl font-bold">87%</h2>
                                    <p className="text-muted-foreground">
                                        Match Score
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <Card className="p-5 rounded-lg">
                                <Target className="text-orange-600" />

                                <h3 className="mt-4 text-3xl font-bold">
                                    18
                                </h3>

                                <p className="text-muted-foreground">
                                    Keywords Found
                                </p>
                            </Card>

                            <Card className="p-5 rounded-lg">
                                <BarChart3 className="text-orange-600" />

                                <h3 className="mt-4 text-3xl font-bold">
                                    6
                                </h3>

                                <p className="text-muted-foreground">
                                    Missing Skills
                                </p>
                            </Card>
                        </div>

                        {/* Keyword Match */}
                        <div className="mt-10">
                            <div className="mb-2 flex justify-between">
                                <span className="font-medium">
                                    Keyword Match
                                </span>

                                <span className="font-semibold">87%</span>
                            </div>

                            <Progress value={87} />
                        </div>

                        {/* Skills */}
                        <div className="mt-10">
                            <h3 className="font-semibold">
                                Required Skills
                            </h3>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {[
                                    "React",
                                    "Next.js",
                                    "TypeScript",
                                    "Node.js",
                                    "MongoDB",
                                    "REST API",
                                    "Git",
                                    "Redux",
                                ].map((skill) => (
                                    <Badge
                                        key={skill}
                                        className="bg-green-100 text-green-700 hover:bg-green-100"
                                    >
                                        <CheckCircle2 className="mr-1 h-3 w-3" />
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Missing */}
                        <div className="mt-8">
                            <h3 className="font-semibold">
                                Missing Keywords
                            </h3>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {[
                                    "AWS",
                                    "Docker",
                                    "CI/CD",
                                    "Jest",
                                    "GraphQL",
                                ].map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="destructive"
                                    >
                                        <AlertTriangle className="mr-1 h-3 w-3" />
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Suggestions */}
                        <Card className="mt-10 rounded-lg border-orange-200 bg-orange-50 p-5 dark:bg-orange-950/20">
                            <h3 className="font-semibold">
                                AI Suggestions
                            </h3>

                            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                                <li>
                                    Add Docker and AWS experience to your
                                    resume.
                                </li>

                                <li>
                                    Mention REST API development in project
                                    descriptions.
                                </li>

                                <li>
                                    Include CI/CD tools like GitHub Actions.
                                </li>

                                <li>
                                    Highlight TypeScript and Next.js in your
                                    summary.
                                </li>
                            </ul>
                        </Card>
                    </Card>
                </div>
            </div>
        </section>
    );
}