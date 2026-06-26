import { LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
      <div className="flex flex-col flex-1 p-5 md:p-0 items-center justify-center font-sans dark:bg-black">
      <Navbar />
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 md:px-10 bg-white dark:bg-black sm:items-start">
          <Image
            className="dark:invert"
            src="/talentdesk.png"
            alt="Next.js logo"
            width={150}
            height={20}
            priority
          />
          <div className="flex flex-col -mt-20 items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Recruiters CRM Management System
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Recruiters can manage and update of their candidates {" "}
              <Link
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Applied
              </Link>{" "}
              or the{" "}
              <Link
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Hiring
              </Link>{" "}
              process.
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 text-base font-medium">
            <Link
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
              href="/auth/login"
            >
              <LogIn />
              Login
            </Link>
            <Link
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
              href="/auth/register"
            >
              <UserPlus />
              Registration
            </Link>
          </div>
        </main>
      </div>
  );
}
