'use client'
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/services/api";
import { PRIORITY_BADGE } from "@/services/constants";
import { Building2, MapPin, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { HeaderCard } from "../components/HeaderCard";
import JobViewModal from "../components/JobViewModel";

export default function Jobs() {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedJobId, setSelectedJobId] = useState("");
    const [jobOpen, setJobOpen] = useState(false);

    const loadJobs = async () => {
        try {
            setLoading(true);
            const jobs = await api.getJobs();
            setJobs(jobs?.jobs ?? []);
            console.log(jobs);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        const token = localStorage.getItem("ats_token");
        if (token) loadJobs();
        else setLoading(false);
    }, []);
    return (
        <section className="p-5">
            <HeaderCard
                title="JOBS"
                description="Manage all jobs and track their hiring pipeline."
                buttontitle="Create Job"
                link="/dashboard/jobs/create"
            />
            {loading ?
                (<h1>Loading ...</h1>)
                : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {jobs.map((job: any) => (
                            <Card
                                key={job.id}
                                onClick={() => {
                                    setSelectedJobId(job?.id);
                                    setJobOpen(true);
                                }}
                                className="border-slate-200 shadow-none hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group rounded-sm"
                            >
                                <CardContent className="p-5">
                                    {/* Top row */}
                                    <div className="flex items-start justify-between gap-2 mb-4">
                                        <div className="min-w-0">
                                            <h3 className="font-semibold text-slate-500 text-sm leading-tight mb-0.5 group-hover:text-blue-600 transition-colors">
                                                {job.title}
                                            </h3>
                                            <p className="text-xs text-slate-400">{job.department}</p>
                                        </div>
                                        <span
                                            className={`text-xs px-2 py-0.5 rounded-xs font-medium shrink-0 ${PRIORITY_BADGE[job.priority] ?? "bg-slate-50 text-slate-500 border border-slate-100"
                                                }`}
                                        >
                                            {job.priority}
                                        </span>
                                    </div>

                                    {/* Meta */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-1.5 text-slate-500">
                                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                                            <span className="text-xs">{job.location}</span>
                                            <span className="text-slate-200 mx-0.5">·</span>
                                            <span className="text-xs">{job.employmentType}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-slate-500">
                                            <Building2 className="w-3.5 h-3.5 shrink-0" />
                                            <span className="text-xs">{job.hiringManager}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <TrendingUp className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                            <span className="text-xs font-semibold text-emerald-600">{job.salaryRange}</span>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {job.skills.slice(0, 3).map((skill: any) => (
                                            <span
                                                key={skill}
                                                className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-xs font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {job.skills.length > 3 && (
                                            <span className="text-xs text-slate-400 px-1 py-0.5">
                                                +{job.skills.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

            <JobViewModal
                id={selectedJobId}
                open={jobOpen}
                onOpenChange={setJobOpen}
            />
        </section>
    )
}