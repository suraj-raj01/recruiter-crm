
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee";
import { Quote, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
    {
        id: 1,
        quote:
            "The teardown alone was worth 10x the fee. Priorities we'd been arguing about for months, settled.",
        name: "Maya Fischer",
        role: "Head of Digital",
        company: "Ridgeline Outdoor",
        avatar: "M",
    },
    {
        id: 2,
        quote:
            "Shipped a PDP rebuild that added six figures in the first quarter. Sharpest CRO thinking we've worked with.",
        name: "Ava Chen",
        role: "Head of Ecom",
        company: "Northwind Supply",
        avatar: "A",
    },
    {
        id: 3,
        quote:
            "Rewrote our checkout copy and lifted completion 18% on the first test. No fluff, just wins.",
        name: "Jordan Blake",
        role: "VP Growth",
        company: "Fielder & Co",
        avatar: "J",
    },
    {
        id: 4,
        quote:
            "The teardown alone was worth 10x the fee. Priorities we'd been arguing about for months, settled.",
        name: "Maya Fischer",
        role: "Head of Digital",
        company: "Ridgeline Outdoor",
        avatar: "M",
    },
    {
        id: 5,
        quote:
            "Best money we've spent on conversion work. Cleared a quarter of backlog research in two weeks.",
        name: "Sana Kapoor",
        role: "Product Lead",
        company: "Bramble",
        avatar: "S",
    },
    {
        id: 6,
        quote:
            "Instrumented our funnel end-to-end and killed three zombie experiments. Team is sharper for it.",
        name: "Elliot Park",
        role: "Growth PM",
        company: "Fernway SaaS",
        avatar: "E",
    },
    {
        id: 7,
        quote:
            "Turned a mediocre landing page into our best-performing paid asset. CPL dropped 47% in three weeks.",
        name: "Marcus Reid",
        role: "Growth Lead",
        company: "Oakmont Living",
        avatar: "M",
    },
    {
        id: 8,
        quote:
            "Best money we've spent on conversion work. Cleared a quarter of backlog research in two weeks.",
        name: "Sana Kapoor",
        role: "Product Lead",
        company: "Bramble",
        avatar: "S",
    },
];

export default function Tesitmonials() {
    return (
        <section className="bg-card py-15">
            <div className="lg:max-w-6xl w-full mx-auto">
                <div className="max-w-3xl flex flex-col mx-auto items-center justify-center">
                    <Badge className="text-xs font-bold rounded-full h-8 py-3 px-4 mb-3 bg-background border border-orange-600/80 text-orange-500 tracking-[0.2em] uppercase">
                        <Sparkles />
                        Testimonials
                    </Badge>
                    <h1 className="text-3xl block bg-linear-to-r from-orange-600 to-green-600 bg-clip-text text-transparentmt-2 text-center lg:text-5xl font-extrabold">Words from founders and growth leads.</h1>
                    <p className="text-sm text-center text-zinc-600 dark:text-zinc-400 mt-4 font-semibold">Real quotes from ecom + SaaS teams we've shipped conversion wins for.</p>
                </div>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {testimonials.map((item) => (
                        <ReviewCard key={item.id} {...item} />
                    ))}
                </Marquee>

                <div className="from-card pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                <div className="from-card pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover reverse className="[--duration:40s]">
                    {testimonials.map((item) => (
                        <ReviewCard key={item.id} {...item} />
                    ))}
                </Marquee>

                <div className="from-card pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                <div className="from-card pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            </div>
        </section>
    )
}

type PropsType = {
    id: number,
    quote: string,
    name: string,
    role: string,
    company: string,
    avatar: string
}

const ReviewCard = ({
    quote,
    name,
    role,
    company,
    avatar

}: PropsType) => {
    return (
        <figure
            className={cn(
                "relative h-full w-90 cursor-pointer bg-muted/20 text-accent overflow-hidden rounded-xl border py-6 px-5",
            )}>
            <div className="flex flex-row items-center gap-2">

                <div className="flex flex-col">
                    <figcaption className="text-md text-slate-800 dark:text-slate-300 font-medium">
                        <Quote className="h-8 w-8 text-orange-500 mb-4" />
                        {quote}
                    </figcaption>
                    <div className="flex mt-5 items-center justify-start gap-2">
                        <div className="rounded-full h-10 w-10 bg-orange-600 flex items-center justify-center text-white font-extrabold">
                            {avatar}
                        </div>
                        <div className="text-sm text-slate-800 dark:text-slate-400">
                            <p>{name}</p>
                            <p>{role} . <span>{company}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </figure>
    )
}