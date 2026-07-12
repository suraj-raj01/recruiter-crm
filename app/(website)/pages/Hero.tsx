import { Badge } from "@/components/ui/badge";
import { LogIn, UserPlus } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className='w-full px-2'>
            <section className="flex min-h-screen flex-col items-center justify-center text-center">
                <Badge className="mt-10 rounded-full h-7 px-6 shadow-sm border-orange-600 text-orange-500 bg-background/60">
                    <span className="relative mr-2 flex h-2.5 w-2.5">
                        {/* Ping animation */}
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-600 opacity-75" />

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

                <p className="mt-6 max-w-4xl text-center text-lg leading-6 text-zinc-600 dark:text-zinc-400">
                    Manage candidates, monitor hiring progress, organize interviews,
                    and collaborate with your recruitment team from one centralized
                    platform.
                </p>

                <div className="mt-10 flex flex-wrap justify-between gap-5">
                    <Link
                        href="/auth/login"
                        className="flex items-center gap-2 rounded-md bg-orange-600 md:px-8 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
                    >
                        <LogIn size={20} />
                        Login
                    </Link>

                    <Link
                        href="/auth/login"
                        className="flex items-center gap-2 rounded-md border border-zinc-300 bg-white md:px-8 px-4 py-3 font-semibold text-zinc-800 shadow transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                    >
                        <UserPlus size={20} />
                        Get Started
                    </Link>
                </div>
            </section>
        </section>
    )
}