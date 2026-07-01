import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-slate-200 dark:border-slate-600">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    &copy; {new Date().getFullYear()} Recruiter CRM. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <Link
                        href="/privacy-policy"
                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms-of-service"
                        className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition"
                    >
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}