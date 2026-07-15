import {
    BriefcaseBusiness,
    Users,
    ClipboardList,
    CalendarDays,
    BarChart3,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Job Management",
        description:
            "Create, publish, and manage job openings with customizable job details and hiring workflows.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Candidate Tracking",
        description:
            "Monitor every applicant from application to hiring with an organized recruitment pipeline.",
        icon: Users,
    },
    {
        title: "Application Management",
        description:
            "Review resumes, organize candidate profiles, and maintain complete hiring records.",
        icon: ClipboardList,
    },
    {
        title: "Interview Scheduling",
        description:
            "Coordinate interviews, manage schedules, and keep recruiters and candidates informed.",
        icon: CalendarDays,
    },
    {
        title: "Recruitment Analytics",
        description:
            "Track hiring metrics, recruitment performance, and team productivity with insightful dashboards.",
        icon: BarChart3,
    },
    {
        title: "Role-Based Access",
        description:
            "Provide secure access for admins, recruiters, and hiring managers with permission controls.",
        icon: ShieldCheck,
    },
];

const process = [
    "Create a Job Opening",
    "Receive Applications",
    "Screen Candidates",
    "Schedule Interviews",
    "Evaluate Applicants",
    "Hire the Best Talent",
];

export default function Services() {
    return (
        <main className="bg-background">
            {/* Hero */}
            <section className="border-b -mt-18 bg-accent h-screen flex items-center">
                <div className="mx-auto max-w-6xl px-3 py-24 text-center">
                    <span className="rounded-full bg-orange-600/20 px-4 py-2 text-sm font-medium text-orange-600">
                       🚀 Our Services
                    </span>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
                        Everything You Need to Manage Recruitment
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg lg:leading-8 text-muted-foreground">
                        TalentDesk provides a complete recruitment platform that helps HR
                        teams streamline hiring, collaborate efficiently, and make faster
                        hiring decisions.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="mx-auto max-w-6xl px-3 py-20">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="rounded-2xl border bg-accent p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-5 inline-flex rounded-xl bg-orange-600/20 p-3 text-orange-600">
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h3 className="text-xl font-semibold">{service.title}</h3>

                                <p className="mt-3 leading-7 text-muted-foreground">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Recruitment Process */}
            <section className="bg-accent py-20">
                <div className="mx-auto max-w-6xl px-3">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">
                            Simple Recruitment Workflow
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            Manage every stage of hiring from one centralized dashboard.
                        </p>
                    </div>

                    <div className="mt-16 grid lg:gap-6 gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {process.map((step, index) => (
                            <div
                                key={step}
                                className="rounded-xl border bg-card p-6 text-center"
                            >
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-orange-600-foreground font-bold">
                                    {index + 1}
                                </div>

                                <h3 className="mt-5 text-lg font-semibold">{step}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="mx-auto max-w-6xl px-3 py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Why Choose TalentDesk?
                        </h2>

                        <p className="mt-5 leading-8 text-muted-foreground">
                            Our platform is designed to reduce manual work, improve recruiter
                            collaboration, and simplify hiring with powerful yet intuitive
                            tools.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Centralized recruitment management",
                            "Custom hiring pipelines",
                            "Faster candidate screening",
                            "Secure recruiter collaboration",
                            "Data-driven hiring decisions",
                            "Scalable for startups and enterprises",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-lg border bg-card px-5 py-4"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-3 pb-20">
                <div className="mx-auto max-w-6xl rounded-3xl bg-linear-to-r from-orange-600 to-indigo-600 px-8 py-16 text-center text-white shadow-2xl">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Ready to Transform Your Hiring Process?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-orange-100">
                        Join recruiters and HR teams using TalentDesk to streamline
                        recruitment, improve collaboration, and hire top talent faster.
                    </p>

                    <Link
                        href="/auth/login"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-semibold text-orange-600 transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        Get Started
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}