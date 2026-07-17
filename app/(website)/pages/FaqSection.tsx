import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        question: "How fast can we start?",
        answer:
            "Most engagements begin within 1–2 weeks after our discovery call. We'll align on goals, scope, and kick off immediately.",
    },
    {
        question: "Do you work with founders directly, or agencies too?",
        answer:
            "Both. We partner directly with founders, in-house growth teams, and agencies looking for CRO or product support.",
    },
    {
        question: "What does a typical engagement cost?",
        answer:
            "Pricing depends on scope and timeline. After understanding your goals, we'll provide a fixed proposal with clear deliverables.",
    },
    {
        question: "How do you measure success?",
        answer:
            "We define success using agreed KPIs such as conversion rate, revenue, AOV, lead quality, or user activation.",
    },
    {
        question: "What if the first experiment loses?",
        answer:
            "That's part of optimization. Every experiment produces insights that help us make stronger decisions in the next iteration.",
    },
    {
        question: "Who owns the work?",
        answer:
            "You do. All designs, code, research, and documentation are delivered to your team.",
    },
];

export default function FaqSection() {
    return (
        <section className="bg-card py-24" id="faq">
            <div className="lg:max-w-6xl w-full mx-auto px-3">
                <div className="grid items-start gap-16 lg:grid-cols-2">
                    {/* Left */}

                    <div>
                        <span className="inline-flex rounded-full border border-orange-600/80 px-4 py-2 text-xs font-extrabold bg-background uppercase tracking-[1px] text-orange-500">
                           🚀 Frequently Asked Questions
                        </span>

                        <h2 className="lg:mt-8 mt-4 text-3xl lg:font-extrabold font-bold lg:leading-12 text-blue lg:text-5xl">
                            Answers before your Queries.
                        </h2>

                        <p className="mt-4 lg:text-xl lg:leading-7 text-zinc-500">
                            Still on the fence? Skim the questions we get on almost every
                            intro call — or reach out and we'll answer yours in 24 hours.
                        </p>

                        <Button
                            size="lg"
                            className="mt-6 rounded-full text-white bg-orange-600 hover:bg-orange-600/90 px-5 py-5 text-md  shadow-orange-500/20 shadow-xl hover:transition-all duration-300 hover:scale-102 cursor-pointer"
                        >
                            <Link href="/contact">Send Enquiries</Link>
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    {/* Right */}

                    <div className="rounded-2xl border bg-card p-4 shadow-sm">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                        >
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b last:border-none"
                                >
                                    <AccordionTrigger className="py-4 text-left text-md font-bold text-blue hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>

                                    <AccordionContent className="pb-2 lg:text-lg lg:leading-7 text-sm text-zinc-500">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}