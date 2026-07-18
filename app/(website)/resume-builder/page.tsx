import { cn } from "@/lib/utils";
import ResumeBuilder from "./components/ResumeBuilder";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export default function ResumeBuilderPage() {
    return (
        <section className="py-20 -mt-20">
            <div className="text-center lg:mb-20 py-20 mx-auto max-w-6xl px-3 flex flex-col relative w-full items-center min-h-110 overflow-hidden">
                <InteractiveGridPattern
                    opacity={0.5}
                    className={cn(
                        "absolute inset-0 lg:mask-[radial-gradient(450px_circle_at_center,white,transparent)] mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
                    )}
                    width={30}
                    height={30}
                    squares={[80, 80]}
                    squaresClassName="hover:fill-orange-600"
                />
                <div className="mb-10 text-center relative">
                    <span className="inline-flex rounded-full border bg-background border-orange-600/80 px-4 py-2 text-sm font-bold">
                       ✨ AI Resume Builder
                    </span>

                    <h1 className="mt-4 text-4xl mx-auto max-w-2xl font-extrabold tracking-tight md:text-6xl bg-linear-to-r from-orange-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">
                        Build Professional ATS-Friendly Resume
                    </h1>

                    <p className="mx-auto mt-4 text-justify lg:text-center max-w-4xl text-muted-foreground">
                        Create a modern, recruiter-friendly resume in minutes.
                        Fill in your personal details, work experience, education,
                        projects, and skills, then preview your resume in real
                        time and download it as a polished PDF. Designed to help
                        your resume pass Applicant Tracking Systems (ATS) and make
                        a strong first impression.
                    </p>
                </div>

            </div>
            <section className='mx-auto max-w-7xl px-3'>
                <ResumeBuilder />
            </section>
        </section>
    );
}