import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { BagIcon } from "@phosphor-icons/react";
import {
    ArrowRight,
    BriefcaseBusiness,
    Clock3,
    Code2,
    Globe,
    HeartHandshake,
    Laptop,
    MapPin,
    Rocket,
    ShieldCheck,
    Users,
} from "lucide-react";
import Link from "next/link";

const jobs = [
    {
        title: "Frontend Developer",
        type: "Full Time",
        location: "Remote",
        experience: "1-3 Years",
        icon: Code2,
    },
    {
        title: "Backend Developer",
        type: "Full Time",
        location: "Remote",
        experience: "2-4 Years",
        icon: Laptop,
    },
    {
        title: "Full Stack Developer",
        type: "Full Time",
        location: "Remote / Hybrid",
        experience: "2+ Years",
        icon: BriefcaseBusiness,
    },
    {
        title: "UI/UX Designer",
        type: "Full Time",
        location: "Remote",
        experience: "1-3 Years",
        icon: Rocket,
    },
    {
        title: "QA Engineer",
        type: "Full Time",
        location: "Hybrid",
        experience: "1-2 Years",
        icon: ShieldCheck,
    },
    {
        title: "Technical Support Executive",
        type: "Full Time",
        location: "On Site",
        experience: "0-2 Years",
        icon: Users,
    },
];

const benefits = [
    {
        icon: Globe,
        title: "Remote Friendly",
        description: "Work from anywhere with flexible schedules.",
    },
    {
        icon: HeartHandshake,
        title: "Great Culture",
        description: "Collaborative environment with supportive teammates.",
    },
    {
        icon: Rocket,
        title: "Career Growth",
        description: "Learn new technologies and grow your career.",
    },
];

export default function CareerPage() {
    return (
        <section className="w-full">
            {/* Hero */}
            <section  className="relative lg:-mt-20 flex min-h-screen items-center justify-center overflow-hidden bg-background">
                <InteractiveGridPattern
                    opacity={0.5}
                    className={cn(
                        "absolute inset-0 mask-[radial-gradient(320px_circle_at_center,white,transparent)] lg:mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
                    )}
                    width={30}
                    height={30}
                    squares={[40, 40]}
                    squaresClassName="hover:fill-orange-600"
                />

                <div className="relative z-10 flex max-w-3xl flex-col items-center px-4 text-center">
                    <Badge className="h-9 text-sm font-bold rounded-full border border-orange-600/70 bg-background px-5 text-orange-600 shadow-sm">
                        <span className="relative mr-2 flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-70" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-600" />
                        </span>
                        We're Hiring
                    </Badge>

                    <h1 className="mt-5 text-4xl max-w-3xl font-extrabold md:text-6xl bg-linear-to-r from-orange-600 via-green-500 to-green-600 bg-clip-text text-transparent">
                        Build Your Future With Our Teams
                    </h1>

                    <p className="mt-6 max-w-4xl text-lg lg:leading-6 text-muted-foreground">
                        Join passionate engineers, designers, and innovators
                        building products that impact thousands of users. We
                        value creativity, collaboration, continuous learning,
                        and ownership.
                    </p>

                    <div className="mt-10 flex flex-col lg:flex-row w-full gap-3 px-8 lg:px-3 items-center lg:justify-center justify-between lg:gap-5">
                        <Link
                            href="#jobs"
                            className="flex items-center justify-center gap-2 rounded-full bg-orange-600 md:px-12 px-5 lg:py-3 py-2 text-white font-bold w-full lg:w-fit shadow-lg shadow-orange-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
                        >
                            Open Position
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            href="/contact"
                            className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white md:px-10 px-3 lg:py-3 py-2 w-full lg:w-fit text-zinc-800 font-bold transition-all duration-300  shadow-zinc-500/10 shadow-xl hover:-translate-y-1 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                        >
                            Contact To HR
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="mx-auto max-w-6xl px-3 py-20">
                <div className="mb-12 text-center">
                    <Badge className="bg-background h-8 rounded-full border border-orange-600/80 px-5 font-bold text-sm text-orange-600">Why Join Us?</Badge>

                    <h2 className="mt-4 text-4xl font-bold">
                        Work Where You Can Thrive
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        We believe great products are built by empowered people.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {benefits.map((item) => (
                        <Card key={item.title} className="rounded-lg hover:-translate-y-1 transition-all duration-300">
                            <CardContent className="p-8">
                                <item.icon className="mb-5 h-12 w-12 rounded-xl bg-orange-100 p-3 text-orange-600 dark:bg-orange-600/10" />

                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-muted-foreground">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Jobs */}
            <section
                id="jobs"
                className="w-full bg-card pt-15 pb-24"
            >
                <div className="mb-12 mx-auto max-w-6xl px-3 text-center">
                    <Badge className="bg-background h-8 rounded-full border border-orange-600/80 px-5 font-bold text-sm  text-orange-600">
                       ✨ Open Positions
                    </Badge>

                    <h2 className="mt-4 text-4xl font-bold">
                        Current Opportunities
                    </h2>

                    <p className="mt-3 text-muted-foreground">
                        Explore our latest openings and become part of our
                        growing team.
                    </p>
                </div>

                <div className="grid mx-auto max-w-6xl px-3 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {jobs.map((job) => (
                        <Card
                            key={job.title}
                            className="group transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 rounded-lg"
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="rounded-xl bg-accent p-3 ">
                                        <job.icon className="h-6 w-6 text-orange-600" />
                                    </div>

                                    <Badge className="rounded-full p-3 bg-card text-card-foreground border border-accent">{job.type}</Badge>
                                </div>

                                <h3 className="mt-6 text-2xl font-bold">
                                    {job.title}
                                </h3>

                                <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-orange-600" />
                                        {job.location}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Clock3 className="h-4 w-4 text-orange-600" />
                                        {job.experience}
                                    </div>
                                </div>

                                <Button
                                    className="mt-8 w-full bg-card border border-muted text-card-foreground rounded-full shadow-zinc/20 hover:border-orange-600 hover:text-orange-600 hover:bg-orange-600/10 hover:shadow-orange-600/20 hover:shadow-lg"
                                    asChild
                                >
                                    <Link href="/careers/apply">
                                        Apply Now
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="border-t bg-background">
                <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center">
                    <h2 className="text-4xl font-bold">
                        Don't See the Right Role?
                    </h2>

                    <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                        We're always looking for talented people. Send us your
                        resume and we'll reach out when a suitable opportunity
                        becomes available.
                    </p>

                    <Link
                        href="mailto:surajkumarbgu26@gmail.com"
                        className="flex mt-5 items-center justify-center gap-2 rounded-full bg-orange-600 md:px-12 px-5 lg:py-3 py-2 text-white font-bold w-full lg:w-fit shadow-lg shadow-orange-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
                    >
                        Send Your Resume
                        <ArrowRight className='h-5 w-5'/>
                    </Link>
                </div>
            </section>
        </section>
    );
}