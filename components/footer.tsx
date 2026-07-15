import Link from "next/link";
import { BriefcaseBusiness, Mail, ExternalLink } from "lucide-react";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-3 py-10">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <BriefcaseBusiness className="h-6 w-6 text-primary" />
                            <h3 className="text-lg font-semibold">
                                Recruiter CRM
                            </h3>
                        </div>

                        <p className="text-sm leading-6 text-muted-foreground">
                            A portfolio-grade Recruiter CRM & ATS platform built
                            with the MERN stack to streamline job postings,
                            candidate management, hiring pipelines, interview
                            tracking, notes, and recruitment analytics.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">
                            Quick Links
                        </h4>

                        <div className="flex flex-col gap-2 text-sm">
                            <Link
                                href="/"
                                className="text-muted-foreground transition hover:text-foreground"
                            >
                                Home
                            </Link>

                            <Link
                                href="/jobs"
                                className="text-muted-foreground transition hover:text-foreground"
                            >
                                Jobs
                            </Link>

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

                    {/* Resources */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">
                            Resources
                        </h4>

                        <div className="flex flex-col gap-3">
                            <a
                                href="https://github.com/yourusername/recruiter-crm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                            >
                                <GithubLogoIcon className="h-4 w-4" />
                                GitHub Repository
                            </a>

                            <a
                                href="mailto:suraj@talentdeck.dev"
                                className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                            >
                                <Mail className="h-4 w-4" />
                                Demo Account
                            </a>

                            <a
                                href="/"
                                className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-3 border-t pt-6 text-sm text-muted-foreground md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Recruiter CRM / ATS Platform.
                        Built with React, Node.js, Express, MongoDB, JWT
                        Authentication, and Tailwind CSS.
                    </p>

                    <p>
                        Designed & Developed by{" "}
                        <span className="font-medium text-foreground uppercase">
                            Suraj Kumar
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}