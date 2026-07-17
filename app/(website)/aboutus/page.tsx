'use client'
import {
    BriefcaseBusiness,
    Users,
    BarChart3,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    const features = [
        {
            icon: BriefcaseBusiness,
            title: "Job Management",
            description:
                "Create, organize, and manage job openings with an intuitive recruitment workflow.",
        },
        {
            icon: Users,
            title: "Candidate Pipeline",
            description:
                "Track candidates from application to hiring with customizable hiring stages.",
        },
        {
            icon: BarChart3,
            title: "Recruitment Analytics",
            description:
                "Monitor hiring performance with insightful dashboards and recruitment metrics.",
        },
        {
            icon: ShieldCheck,
            title: "Secure Access",
            description:
                "Role-based authentication ensures recruiters, managers, and admins have appropriate access.",
        },
    ];

    return (
        <main className="bg-background ">
            {/* Hero */}
            <section className="relative flex min-h-120 pb-10 w-full flex-col items-center justify-center overflow-hidden">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.5}
                    duration={3}
                    repeatDelay={0.5}
                    className={cn(
                        "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-20%] h-[200%] skew-y-0 text-orange-600"
                    )}
                />
                <div className="mx-auto max-w-6xl px-3 py-24 text-center">
                    <span className="rounded-full bg-background border border-orange-600/80 px-4 py-2 text-sm font-medium text-orange-600">
                        ✨ About TalentDesk
                    </span>

                    <h1 className="mt-6 text-5xl max-w-2xl text-center font-extrabold tracking-tight md:text-6xl bg-linear-to-r from-orange-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                        Simplifying The Modern Recruitment
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-auto lg:text-center text-muted-foreground lg:leading-7">
                        TalentDesk is a modern Applicant Tracking System (ATS) built to help
                        recruiters, HR teams, and organizations manage the complete hiring
                        process—from creating job openings to onboarding top talent.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="mx-auto max-w-6xl px-3 py-20 mb-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-center lg:text-start">
                            Built for Recruiters, Designed for Teams
                        </h2>

                        <p className="mt-6 text-muted-foreground text-center lg:text-start lg:leading-6 text-lg">
                            Hiring the right talent shouldn't be complicated. Traditional
                            recruitment often involves scattered spreadsheets, endless email
                            threads, and manual candidate tracking.
                        </p>

                        <p className="mt-4 text-muted-foreground text-center lg:text-start lg:leading-6 text-lg">
                            TalentDesk centralizes every stage of recruitment into a single
                            platform, enabling recruiters to collaborate, organize candidates,
                            monitor hiring progress, and make faster, data-driven decisions.
                        </p>
                    </div>

                    <div className="rounded-2xl border bg-card p-8 shadow-sm">
                        <h3 className="text-2xl font-semibold">
                            Why Teams Choose TalentDesk
                        </h3>

                        <div className="mt-4 space-y-2">
                            {[
                                "Centralized candidate management",
                                "Custom hiring pipeline",
                                "Recruiter collaboration",
                                "Interview scheduling",
                                "Hiring analytics",
                                "Secure role-based access",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-600" />
                                    <span className="text-muted-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="bg-card py-20">
                <div className="mx-auto max-w-6xl px-3">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold">
                            Everything You Need to Hire Better
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            Powerful tools designed to streamline every step of the recruitment
                            process.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="rounded-xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="mb-5 inline-flex rounded-lg bg-orange-600/10 p-3 text-orange-600">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="font-semibold lg:text-lg">{feature.title}</h3>

                                    <p className="mt-2 lg:text-sm text-lg lg:leading-5 text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="bg-card pb-20">
                <div className="bg-card rounded-lg border mx-auto max-w-6xl py-10 px-3 flex items-center justify-center flex-col">
                    <h2 className="text-center text-3xl font-bold">Our Mission</h2>

                    <p className="mx-auto mt-4 max-w-3xl lg:text-center text-justify lg:leading-6 text-muted-foreground">
                        Our mission is to make recruitment faster, smarter, and more
                        collaborative by providing recruiters with intuitive tools that
                        reduce administrative work and improve hiring decisions.
                    </p>
                    <Button className='mx-auto mt-5 font-semibold text-sm rounded-full text-white bg-orange-600 shadow-lg shadow-orange-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl px-6 cursor-pointer' >
                       <Link href='/services' className="flex items-center justify-center gap-2">
                        Know More <ArrowRight />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}