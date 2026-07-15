'use client'
import { Badge } from "@/components/ui/badge";
import { LightRays } from "@/components/ui/light-rays";
import { api } from "@/services/api";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function HeroSection() {
    const loadCandidates = async () => {
        try {
            await api.awake();
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        loadCandidates();
    }, []);
    return (
        <section className='w-full'>
            <section className="flex min-h-screen relative h-screen w-full overflow-hidden flex-col items-center justify-center text-center">
                <LightRays />
                <Badge className="mt-10 rounded-full h-7 lg:px-6 px-4 shadow-sm border-orange-600/50 text-orange-600 bg-orange-500/20">
                    <span className="relative mr-2 flex h-2.5 w-2.5">
                        {/* Ping animation */}
                        <span className="absolute z-2 inline-flex h-full w-full animate-ping rounded-full bg-orange-600 opacity-75" />

                        {/* Solid dot */}
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-600" />
                    </span>
                    Best for recruiters to mange candidates</Badge>
                <h1 className="mt-5 md:mb-0 mb-3 max-w-3xl font-extrabold leading-tight text-zinc-900 dark:text-white md:text-4xl text-2xl">
                    Recruiters <span className='text-orange-600'>CRM</span>
                </h1>
                <span className="block bg-linear-to-r from-orange-600 to-indigo-600 bg-clip-text text-transparent md:text-6xl md:leading-17 font-extrabold text-4xl">
                    Manage Talent Smarter
                </span>

                <p className="mt-6 max-w-4xl px-3 text-center text-lg leading-6 text-zinc-600 dark:text-zinc-400">
                    Manage candidates, monitor hiring progress, organize interviews,
                    and collaborate with your recruitment team from one centralized
                    platform.
                </p>

                <div className="mt-10 flex w-full gap-3 px-3 items-center lg:justify-center justify-between lg:gap-5">
                    <Link
                        href="/auth/login"
                        className="flex items-center justify-center gap-2 rounded-full bg-orange-600 md:px-12 px-5 py-3 text-white font-bold w-full lg:w-fit shadow-lg shadow-orange-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
                    >
                        <LogIn size={20} />
                        Login
                    </Link>

                    <Link
                        href="/auth/login"
                        className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white md:px-10 px-3 py-3 w-full lg:w-fit text-zinc-800 shadow font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </section>
    )
}