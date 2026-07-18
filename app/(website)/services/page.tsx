import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
    BriefcaseBusiness,
    Users,
    ClipboardList,
    CalendarDays,
    BarChart3,
    ShieldCheck,
    ArrowRight,
    CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { cn } from "@/lib/utils";

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
            <section className="flex relative w-full items-center min-h-120 overflow-hidden">
                <InteractiveGridPattern 
                    opacity={0.5}
                    className={cn(
                        "absolute inset-0 lg:mask-[radial-gradient(450px_circle_at_center,white,transparent)] mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
                    )}
                    width={30}
                    height={30}
                    squares={[80, 80]}
                    squaresClassName="hover:fill-orange-600" 
                    />
                <div className="mx-auto relative z-5 max-w-6xl py-24 px-3 text-center">
                    <span className="rounded-full bg-background border border-orange-600/80 px-4 py-2 text-sm font-medium text-orange-600">
                        🚀 Our Services
                    </span>

                    <h1 className="mt-6 text-5xl text-center font-extrabold tracking-tight md:text-6xl bg-linear-to-r from-orange-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                        Everything You Need To Manage Recruitment
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-justify lg:text-center text-lg lg:leading-6 text-muted-foreground">
                        TalentDesk provides a complete recruitment platform that helps HR
                        teams streamline hiring, collaborate efficiently, and make faster
                        hiring decisions.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className='bg-background'>
                <div className="mx-auto max-w-6xl px-3 py-20">
                    <div className="flex flex-col items-center justify-center mb-10">
                        <Badge className='uppercase py-3 px-4 font-bold rounded-full bg-background text-orange-600 border border-orange-600/70 h-8'><CheckCircle className="fill-background" /> Why Teams Trust Us</Badge>
                        <h1 className="mt-3 font-bold text-center text-3xl lg:text-5xl max-w-3xl">Built for recruiters who need proof, not promises.</h1>
                        <p className="mt-3 text-center text-zinc-600 dark:text-zinc-400 text-semibold">Every engagement ships with measurable lift, transparent process, and handover you actually own.</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="rounded-2xl border bg-card/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="mb-3 inline-flex rounded-xl bg-orange-600/20 p-3 text-orange-600">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="text-xl font-semibold">{service.title}</h3>

                                    <p className="mt-2 lg:leading-6 text-muted-foreground">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Recruitment Process */}
            <section className="bg-linear-to-b from-background to-accent/30 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="rounded-full border border-orange-500 bg-background px-5 py-2 text-sm font-medium text-orange-600 dark:border-orange-900 ">
                           ✨ Hiring Process
                        </span>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight lg:text-5xl">
                            Simple Recruitment Workflow
                        </h2>

                        <p className="mt-4 text-lg text-muted-foreground">
                            Manage every stage of hiring from one centralized dashboard.
                        </p>
                    </div>

                    <div className="relative mt-20 grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {process.map((step, index) => (
                            <div
                                key={step}
                                className="group relative rounded-lg border bg-background/70 p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
                            >
                                {/* Connector */}
                                {![2, 5].includes(index) && (
                                    <div className="absolute left-[calc(100%-1rem)] top-10 hidden h-0.5 w-16 bg-linear-to-r from-orange-500 to-orange-200 lg:block" />
                                )}

                                {/* Number */}
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-orange-600 text-xl font-bold text-white shadow-lg shadow-orange-500/30 transition-transform duration-300 group-hover:scale-110">
                                    {index + 1}
                                </div>

                                <h3 className="mt-6 text-xl font-semibold">
                                    {step}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    Complete this step quickly using our streamlined
                                    recruitment platform and move candidates smoothly
                                    through the hiring pipeline.
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-orange-600">
                                    Step {index + 1}
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </div>
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

                        <p className="mt-3 lg:leading-6 text-justify lg:text-start text-muted-foreground">
                            Our platform is designed to reduce manual work, improve recruiter
                            collaboration, and simplify hiring with powerful yet intuitive
                            tools.
                        </p>
                    </div>

                    <Card className="rounded-lg p-4">
                        {[
                            "Centralized recruitment management",
                            "Custom hiring pipelines",
                            "Faster candidate screening",
                            "Secure recruiter collaboration",
                            "Data-driven hiring decisions",
                            "Scalable for startups and enterprises",
                        ].map((item,index) => (
                            <div
                                key={item}
                                className="flex -mt-1 items-center text-card-foreground justify-start text-sm gap-2 lg:text-lg"
                            >
                                <span className='h-8 w-8 border rounded-full flex items-center justify-center bg-orange-600/20 text-orange-600'>{index+1}</span>
                                {item}
                            </div>
                        ))}
                    </Card>
                </div>
            </section>

            {/* CTA */}
            <section className="px-3 pb-20">
                <div className="mx-auto max-w-6xl rounded-2xl bg-linear-to-r from-orange-600 to-indigo-600 px-3 py-16 text-center text-white shadow-2xl">
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Ready to Transform Your Hiring Process?
                    </h2>

                    <p className="mx-auto mt-5 lg:text-lg max-w-2xl text-orange-100">
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