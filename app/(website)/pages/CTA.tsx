import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="w-full">
            <div className="mx-auto py-20 max-w-full overflow-hidden bg-linear-to-tr from-orange-600/60 via-indigo-500 to-orange-600/80 shadow-sm">
                <div className="relative py-16 text-center px-3 lg:px-16">
                    {/* Background Blur */}
                    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-10 [background-image:linear-linear(to_right,#fff_1px,transparent_1px),linear-linear(to_bottom,#fff_1px,transparent_1px)] bg-size-[40px_40px]" />

                    <div className="relative z-10">
                        <span className="inline-flex items-center rounded-full border border-orange-600/80 bg-card px-4 py-1 text-sm font-medium text-orange-600 backdrop-blur">
                            🚀 Recruit Smarter
                        </span>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
                            Start Managing Recruitment Better
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-orange-100 md:text-lg">
                            Simplify hiring with an all-in-one recruitment platform. Track
                            candidates, manage job postings, collaborate with your hiring
                            team, and streamline every stage of your recruitment workflow.
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/auth/login"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-orange-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50 hover:shadow-2xl w-full lg:w-fit justify-center"
                            >
                                {/* <UserPlus size={20} /> */}
                                Get Started
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/"
                                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 w-full lg:w-fit justify-center"
                            >
                                Learn More
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-orange-100">
                            <span>✓ Candidate Tracking</span>
                            <span>✓ Team Collaboration</span>
                            <span>✓ Analytics Dashboard</span>
                            <span>✓ Role-Based Access</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}