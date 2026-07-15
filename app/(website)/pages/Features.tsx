import { Badge } from "@/components/ui/badge";
import {
    Briefcase,
    ClipboardCheck,
    Users,
    BarChart3,
    BellRing,
    FileText,
    CheckCircle,
} from "lucide-react";

const features = [
    {
        title: "Candidate Management",
        description:
            "Store, search, and organize candidates with complete recruitment history.",
        icon: Users,
        iconColor: "text-orange-600",
        iconBg: "bg-orange-100 dark:bg-orange-900/40",
    },
    {
        title: "Job Tracking",
        description:
            "Manage open positions and monitor candidate pipelines from one dashboard.",
        icon: Briefcase,
        iconColor: "text-green-600",
        iconBg: "bg-green-100 dark:bg-green-900/40",
    },
    {
        title: "Hiring Workflow",
        description:
            "Track interviews, offers, feedback, and final hiring decisions efficiently.",
        icon: ClipboardCheck,
        iconColor: "text-purple-600",
        iconBg: "bg-purple-100 dark:bg-purple-900/40",
    },
    {
        title: "Recruitment Analytics",
        description:
            "Gain insights into hiring performance with real-time reports and analytics.",
        icon: BarChart3,
        iconColor: "text-blue-600",
        iconBg: "bg-blue-100 dark:bg-blue-900/40",
    },
    {
        title: "Smart Notifications",
        description:
            "Receive instant alerts for interviews, candidate updates, and job activities.",
        icon: BellRing,
        iconColor: "text-red-600",
        iconBg: "bg-red-100 dark:bg-red-900/40",
    },
    {
        title: "Document Management",
        description:
            "Securely upload, organize, and access resumes, contracts, and hiring documents.",
        icon: FileText,
        iconColor: "text-cyan-600",
        iconBg: "bg-cyan-100 dark:bg-cyan-900/40",
    },
];

export default function Features() {
    return (
        <section className='mx-auto w-full max-w-6xl px-3 py-10'>
            <div className="flex flex-col items-center justify-center">
                <Badge className='uppercase py-3 px-4 font-bold rounded-full bg-orange-500/20 text-orange-500 h-8'><CheckCircle className="fill-accent"/> Why Teams Trust Us</Badge>
                <h1 className="mt-3 font-bold text-center text-3xl lg:text-5xl max-w-3xl">Built for recruiters who need proof, not promises.</h1>
                <p className="mt-3 text-center text-zinc-600 dark:text-zinc-400 text-semibold">Every engagement ships with measurable lift, transparent process, and handover you actually own.</p>
            </div>
            <section className="grid lg:gap-6 gap-4 md:grid-cols-2 pt-10 lg:grid-cols-3">
                {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={index}
                            className="rounded-lg border border-zinc-200 bg-background p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            <div
                                className={`mb-5 w-fit rounded-xl p-3 ${feature.iconBg}`}
                            >
                                <Icon
                                    size={30}
                                    className={feature.iconColor}
                                />
                            </div>

                            <h3 className="mb-3 text-xl font-bold">
                                {feature.title}
                            </h3>

                            <p className="text-zinc-600 dark:text-zinc-400">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </section>
        </section>
    );
}