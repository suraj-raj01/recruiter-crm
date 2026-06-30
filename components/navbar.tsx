'use client'

import { useRouter } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
    return (
        <section className="sticky -mt-15 top-2 border z-2 md:max-w-7xl mx-auto dark:bg-black w-full h-17 bg-background/90 dark:bg-black/80 md:rounded-full md:px-10 px-5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2 cursor-pointer" onClick={()=>useRouter().push("/")}>
                <span className="rounded-full bg-orange-600 text-white h-10 w-10 flex items-center justify-center font-extrabold">TD</span>
               <div className="flex flex-col">
                    <h1 className="font-extrabold md:text-xl">TalentDesk</h1>
                    <span className="text-xs -mt-1 text-slate-500">Recruiter crm management system</span>
               </div>
            </div>
            <ModeToggle/>
        </section>
    )
}