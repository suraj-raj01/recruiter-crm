'use client'
import { Badge } from "@/components/ui/badge";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {

    return (
        <section className='w-full'>
            <section className="relative flex min-h-screen h-screen w-full overflow-hidden items-center justify-center bg-background">

                <InteractiveGridPattern
                    className={cn(
                        "absolute inset-0 mask-[radial-gradient(300px_circle_at_center,white,transparent)] lg:mask-[radial-gradient(400px_circle_at_center,white,transparent)]"
                    )}
                    width={30}
                    height={30}
                    squares={[40, 40]}
                    squaresClassName="hover:fill-orange-600"
                />

                <div className="relative z-5 flex flex-col items-center text-center">
                    <Badge className="mt-10 rounded-full h-8 lg:px-6 px-4 shadow-sm border-orange-600/30 text-orange-500 bg-background/80">
                        <span className="relative mr-2 flex h-2.5 w-2.5">
                            {/* Ping animation */}
                            <span className="absolute z-2 inline-flex h-full w-full animate-ping rounded-full bg-linear-to-l from-orange-600 via-indigo-500 to-orange-600 opacity-75" />

                            {/* Solid dot */}
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-600" />
                        </span>
                        Best for recruiters to mange candidates</Badge>
                    <h1 className="mt-5 md:mb-0 mb-3 max-w-3xl font-extrabold leading-tight text-zinc-900 dark:text-white md:text-4xl text-3xl">
                        Recruiters <span className='text-orange-600'>CRM</span>
                    </h1>
                    <span className="block bg-linear-to-r from-orange-600 via-indigo-500 to-orange-600 bg-clip-text text-transparent md:text-6xl md:leading-17 font-extrabold text-5xl">
                        Manage Talent Smarter
                    </span>

                    <p className="mt-6 max-w-4xl px-2 text-center text-lg leading-6 text-zinc-600 dark:text-zinc-400">
                        Manage candidates, monitor hiring progress, organize interviews,
                        and collaborate with your recruitment team from one centralized
                        platform.
                    </p>

                    <div className="mt-10 flex flex-col lg:flex-row w-full gap-3 px-8 lg:px-3 items-center lg:justify-center justify-between lg:gap-5">
                        <Link
                            href="/auth/login"
                            className="flex items-center justify-center gap-2 rounded-full bg-orange-600 md:px-12 px-5 lg:py-3 py-2 text-white font-bold w-full lg:w-fit shadow-lg shadow-orange-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
                        >
                            <LogIn size={20} />
                            Login
                        </Link>

                        <Link
                            href="/auth/login"
                            className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white md:px-10 px-3 lg:py-3 py-2 w-full lg:w-fit text-zinc-800 font-bold transition-all duration-300  shadow-zinc-500/10 shadow-xl hover:-translate-y-1 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    )
}