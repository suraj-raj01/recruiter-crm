'use client'
import Link from "next/link";
import { BriefcaseBusiness, Mail, ExternalLink, Link2Icon } from "lucide-react";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { LinkedinLogoIcon } from "@phosphor-icons/react";

export default function Footer() {
    return (
        <footer className="border-t bg-card">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-3 py-10">
                <div className="grid gap-8 md:grid-cols-2 lg:text-start text-center">
                    {/* Brand */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <BriefcaseBusiness className="h-6 w-6 text-primary" />
                            <h3 className="text-lg font-semibold">
                                Talent Desk
                            </h3>
                        </div>

                        <p className="text-sm text-start leading-6 text-muted-foreground">
                            Recruiter CRM & ATS platform built
                            with the Latest tech stack to streamline job postings,
                            candidate management, hiring pipelines, interview
                            tracking, notes, and recruitment analytics.
                        </p>
                    </div>

                    <section className="flex flex-row w-full items-start justify-around lg:justify-between">
                        {/* Quick Links */}
                        <div>
                            <h4 className="mb-3 text-sm text-start font-semibold uppercase tracking-wide">
                                Quick Links
                            </h4>

                            <div className="flex flex-col gap-2 text-sm text-start">
                                <Link
                                    href="/"
                                    className="text-muted-foreground transition hover:text-foreground"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-muted-foreground transition hover:text-foreground"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/services"
                                    className="text-muted-foreground transition hover:text-foreground"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/resume-builder"
                                    className="text-muted-foreground transition hover:text-foreground"
                                >
                                    Resume Builder
                                </Link>
                                <Link
                                    href="/bg-remover"
                                    className="text-muted-foreground transition hover:text-foreground"
                                >
                                    Background Remover
                                </Link>

                                <Link
                                    href="/resume-ats-checker"
                                    className="text-muted-foreground transition hover:text-foreground"
                                >
                                    Resume ATS Checker
                                </Link>
                            </div>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="mb-3 text-start text-sm font-semibold uppercase tracking-wide">
                                Resources
                            </h4>

                            <div className="flex flex-col gap-2 lg:items-start items-start justify-start">
                                <Link
                                    href="/auth/login"
                                    className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                                >
                                    <Mail className="h-4 w-4" />
                                    Demo Account
                                </Link>

                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Live Demo
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/suraj-kumar-1965b0296/"
                                    className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                                >
                                    <LinkedinLogoIcon className="h-4 w-4" />
                                    LinkedIn
                                </Link>
                                <Link
                                    href="https://github.com/suraj-raj01"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                                >
                                    <GithubLogoIcon className="h-4 w-4" />
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 border-t pt-6 text-sm text-muted-foreground md:flex-row">
                    <p className="text-center lg:text-start">
                        Everything is reserved by TalentDesk Copyright © {new Date().getFullYear()} 
                    </p>

                    <div className="flex flex-col items-center justify-center">
                        Designed & Developed by{" "}
                        <br />
                        <Link href='https://portfolio-suraj-puce.vercel.app/' className="font-medium text-muted-foreground uppercase flex items-center gap-2 justify-center">
                            Suraj Kumar <Link2Icon className="4-3 w-4" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end gap-3">
                        <Link
                            href="/privacy-policy"
                            className="text-muted-foreground transition hover:text-foreground"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms-of-service"
                            className="text-muted-foreground transition hover:text-foreground"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}