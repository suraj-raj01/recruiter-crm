import {
  LogIn,
  UserPlus,
  Users,
  Briefcase,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-black dark:via-zinc-950 dark:to-zinc-900">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-20">
        {/* Hero */}
        <section className="flex min-h-130 flex-col items-center justify-center text-center">
          <h1 className="mt-9 md:mb-0 mb-3 max-w-3xl font-extrabold leading-tight text-zinc-900 dark:text-white md:text-4xl text-2xl">
            Recruiters <span className='text-orange-600'>CRM</span>
          </h1>
          <span className="block bg-gradient-to-r from-orange-600 to-indigo-600 bg-clip-text text-transparent md:text-6xl md:leading-17 font-extrabold text-4xl">
            Manage Talent Smarter
          </span>

          <p className="mt-6 max-w-full text-center text-lg leading-6 text-zinc-600 dark:text-zinc-400">
            Manage candidates, monitor hiring progress, organize interviews,
            and collaborate with your recruitment team from one centralized
            platform.
          </p>

          <div className="mt-10 flex flex-wrap justify-between gap-5">
            <Link
              href="/auth/login"
              className="flex items-center gap-2 rounded-md bg-orange-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
            >
              <LogIn size={20} />
              Login
            </Link>

            <Link
              href="/auth/login"
              className="flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-8 py-3 font-semibold text-zinc-800 shadow transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              <UserPlus size={20} />
              Get Started
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mt-24 grid w-full gap-8 md:grid-cols-3">
          <div className="rounded-md border border-zinc-200 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-5 w-fit rounded-xl bg-orange-100 p-3 dark:bg-orange-900/40">
              <Users className="text-orange-600" size={30} />
            </div>

            <h3 className="mb-3 text-xl font-bold">
              Candidate Management
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400">
              Store, search, and organize candidates with complete recruitment
              history.
            </p>
          </div>

          <div className="rounded-md border border-zinc-200 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-5 w-fit rounded-xl bg-green-100 p-3 dark:bg-green-900/40">
              <Briefcase className="text-green-600" size={30} />
            </div>

            <h3 className="mb-3 text-xl font-bold">
              Job Tracking
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400">
              Manage open positions and monitor candidate pipelines from one
              dashboard.
            </p>
          </div>

          <div className="rounded-md border border-zinc-200 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-5 w-fit rounded-xl bg-purple-100 p-3 dark:bg-purple-900/40">
              <ClipboardCheck className="text-purple-600" size={30} />
            </div>

            <h3 className="mb-3 text-xl font-bold">
              Hiring Workflow
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400">
              Track interviews, offers, feedback, and final hiring decisions
              efficiently.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-24 w-full rounded-md bg-gradient-to-r from-orange-600 to-indigo-600 px-10 py-14 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold">
            Start Managing Recruitment Better
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-orange-100">
            TalentDesk simplifies candidate tracking, recruitment workflow, and
            recruiter collaboration—all in one place.
          </p>

          <Link
            href="/auth/login"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white/90 px-8 py-4 font-semibold text-orange-600 transition hover:scale-105"
          >
            <UserPlus size={20} />
            Get Started
          </Link>
        </section>
      </main>
    </div>
  );
}