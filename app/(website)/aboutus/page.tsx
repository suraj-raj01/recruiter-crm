import {
    BriefcaseBusiness,
    Users,
    BarChart3,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";

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
        <main className="min-h-screen bg-background">
            {/* Hero */}
            <section className="border-b h-150 flex items-center">
                <div className="mx-auto max-w-6xl px-3 py-24 text-center">
                    <span className="rounded-full bg-orange-600/20 px-4 py-2 text-sm font-medium text-orange-600">
                       ✨ About TalentDesk
                    </span>

                    <h1 className="mt-6 text-4xl max-w-2xl font-bold tracking-tight md:text-6xl">
                        Simplifying Modern Recruitment
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground lg:leading-7">
                        TalentDesk is a modern Applicant Tracking System (ATS) built to help
                        recruiters, HR teams, and organizations manage the complete hiring
                        process—from creating job openings to onboarding top talent.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="mx-auto max-w-6xl px-3 py-20">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Built for Recruiters, Designed for Teams
                        </h2>

                        <p className="mt-6 text-muted-foreground leading-8">
                            Hiring the right talent shouldn't be complicated. Traditional
                            recruitment often involves scattered spreadsheets, endless email
                            threads, and manual candidate tracking.
                        </p>

                        <p className="mt-4 text-muted-foreground leading-8">
                            TalentDesk centralizes every stage of recruitment into a single
                            platform, enabling recruiters to collaborate, organize candidates,
                            monitor hiring progress, and make faster, data-driven decisions.
                        </p>
                    </div>

                    <div className="rounded-2xl border bg-card p-8 shadow-sm">
                        <h3 className="text-2xl font-semibold">
                            Why Teams Choose TalentDesk
                        </h3>

                        <div className="mt-8 space-y-5">
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
            <section className="bg-muted/40 py-20">
                <div className="mx-auto max-w-6xl px-3">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">
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

                                    <h3 className="font-semibold">{feature.title}</h3>

                                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="mx-auto max-w-6xl px-3 py-20">
                <div className="rounded-2xl border bg-card p-10 md:p-16">
                    <h2 className="text-center text-3xl font-bold">Our Mission</h2>

                    <p className="mx-auto mt-6 max-w-3xl text-center lg:leading-7 text-muted-foreground">
                        Our mission is to make recruitment faster, smarter, and more
                        collaborative by providing recruiters with intuitive tools that
                        reduce administrative work and improve hiring decisions.
                    </p>
                </div>
            </section>
        </main>
    );
}