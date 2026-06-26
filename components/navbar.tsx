import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
    return (
        <section className="sticky -mt-15 top-2 border z-50 md:max-w-4xl mx-auto dark:bg-black w-full h-16 rounded-full md:px-10 px-5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
                <span className="rounded-full bg-accent-foreground text-accent h-10 w-10 flex items-center justify-center font-extrabold">TD</span>
               <div className="flex flex-col">
                    <h1 className="font-extrabold">TalentDesk</h1>
                    <span className="text-xs -mt-1 text-slate-500">Recruiter crm management system</span>
               </div>
            </div>
            <ModeToggle/>
        </section>
    )
}