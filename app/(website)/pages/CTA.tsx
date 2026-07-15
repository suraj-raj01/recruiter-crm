import { UserPlus } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className='w-full py-20 px-3'>
            <section className="max-w-6xl mx-auto px-2 rounded-md bg-linear-to-l from-orange-600/60 to-indigo-600/60 py-14 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold">
                Start Managing Recruitment Better
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-orange-100">
                TalentDesk simplifies candidate tracking, recruitment workflow, and
                recruiter collaboration—all in one place.
            </p>

            <Link
                href="/auth/login"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-white/90 px-8 py-3 font-semibold text-orange-600 transition-all duration-300 hover:-translate-y-1  hover:shadow-xl"
            >
                <UserPlus size={20} />
                Get Started
            </Link>
        </section>
        </section>
    )
}