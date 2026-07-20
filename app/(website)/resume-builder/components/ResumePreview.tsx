"use client";

import {
    Mail,
    Phone,
    MapPin,
    Globe,
} from "lucide-react";

import { useFormContext } from "react-hook-form";
import { formatMonthYear } from "../constants/formatData";

import { ResumeFormData } from "../types";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

interface ResumePreviewProps {
    previewRef: React.RefObject<HTMLDivElement | null>;
}

export default function ResumePreview({
    previewRef,
}: ResumePreviewProps) {
    const { watch } = useFormContext<ResumeFormData>();

    const resume = watch();
    const { personal } = resume;

    return (
        <Card className="sticky border-0 rounded-lg shadow-none top-2 h-fit overflow-hidden">
            {/* Resume */}
            <div className="">
                <div
                    ref={previewRef}
                    id="resume-preview"
                    className="mx-auto max-w-198.5 min-h-280.75 bg-white p-10 shadow-xs  print:max-w-full print:min-h-0 print:p-8 print:shadow-none print:border-0
"
                >
                    {/* Name */}
                    <div className="text-center">
                        <h1 className="text-4xl text-black font-bold tracking-tight">
                            {personal.fullName || "Your Name"}
                        </h1>

                        <p className="text-lg text-gray-600">
                            {personal.jobTitle || "Professional Title"}
                        </p>
                    </div>

                    {/* Contact */}

                    <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-700">
                        {personal.email && (
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                {personal.email}
                            </div>
                        )}

                        {personal.phone && (
                            <div className="flex items-center gap-2">
                                <Phone size={16} />
                                {personal.phone}
                            </div>
                        )}

                        {personal.location && (
                            <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                {personal.location}
                            </div>
                        )}

                        {personal.website && (
                            <div className="flex items-center gap-2">
                                <Globe size={16} />

                                <a
                                    href={personal.website}
                                    target="_blank"
                                    className="text-green-600 underline"
                                    rel="noreferrer"
                                >
                                    Portfolio
                                </a>
                            </div>
                        )}

                        {personal.github && (
                            <div className="flex items-center gap-2">
                                <GithubLogoIcon size={16} />

                                <a
                                    href={personal.github}
                                    target="_blank"
                                    className="text-green-600 underline"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>
                        )}

                        {personal.linkedin && (
                            <div className="flex items-center gap-2">
                                <LinkedinLogoIcon size={16} />

                                <a
                                    href={personal.linkedin}
                                    target="_blank"
                                    className="text-green-600 underline"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        )}
                    </div>

                    <Separator className="my-3 bg-gray-300" />

                    {/* Summary */}
                    <section>
                        <h2 className="border-b border-gray-300 pb-2 text-sm font-bold uppercase text-black">
                            Professional Summary
                        </h2>

                        <p className="mt-2 whitespace-pre-line text-sm leading-5 text-gray-700">
                            {resume.summary ||
                                "Write a professional summary to showcase your experience, technical expertise, achievements, and career goals."}
                        </p>
                    </section>

                    {/* Experience */}
                    <section className="mt-3">
                        <h2 className="border-b border-gray-300 pb-2 text-sm font-bold uppercase tracking-wide text-black">
                            Professional Experience
                        </h2>

                        <div className="mt-2 space-y-4">
                            {resume.experience
                                .filter(
                                    (item) =>
                                        item.company ||
                                        item.role ||
                                        item.description
                                )
                                .map((item, index) => (
                                    <div key={index}>
                                        {/* Title */}

                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-black font-semibold">
                                                    {item.role || "Job Title"}
                                                </h3>

                                                <p className="font-medium text-gray-700">
                                                    {item.company || "Company"}
                                                </p>

                                                {item.location && (
                                                    <p className="text-sm text-gray-500">
                                                        {item.location}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="text-right text-sm text-gray-600">
                                                {item.startDate}

                                                {item.startDate &&
                                                    (item.currentlyWorking
                                                        ? " - Present"
                                                        : item.endDate
                                                            ? ` - ${item.endDate}`
                                                            : "")}
                                            </div>
                                        </div>

                                        {/* Description */}

                                        {item.description && (
                                            <div className="mt-2 whitespace-pre-line text-sm leading-5 text-gray-700">
                                                {item.description}
                                            </div>
                                        )}
                                    </div>
                                ))}

                            {resume.experience.every(
                                (item) =>
                                    !item.company &&
                                    !item.role &&
                                    !item.description
                            ) && (
                                    <p className="italic text-gray-400">
                                        Add your work experience.
                                    </p>
                                )}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mt-3">
                        <h2 className="border-b border-gray-300 pb-2 text-sm font-bold uppercase tracking-wide text-black  ">
                            Education
                        </h2>

                        <div className="mt-2 space-y-2">
                            {resume.education
                                .filter(
                                    (item) =>
                                        item.school ||
                                        item.degree ||
                                        item.field
                                )
                                .map((item, index) => (
                                    <div key={index}>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-semibold text-black">
                                                    {item.degree || "Degree"}

                                                    {item.field &&
                                                        ` • ${item.field}`}
                                                </h3>

                                                <p className="text-gray-700">
                                                    {item.school ||
                                                        "University"}
                                                </p>

                                                {item.grade && (
                                                    <p className="text-sm text-gray-500">
                                                        Grade: {item.grade}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="text-sm text-gray-600">
                                                {item.startYear}

                                                {item.startYear &&
                                                    item.endYear &&
                                                    ` - ${item.endYear}`}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            {resume.education.every(
                                (item) =>
                                    !item.school &&
                                    !item.degree &&
                                    !item.field
                            ) && (
                                    <p className="italic text-gray-400">
                                        Add your education details.
                                    </p>
                                )}
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="mt-3">
                        <h2 className="border-b border-gray-300 pb-2 text-sm font-bold uppercase tracking-wide text-black">
                            Technical Skills
                        </h2>

                        {resume.skills.length ? (
                            <div className="mt-2 flex flex-wrap gap-1">
                                {resume.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="rounded border bg-transparent text-black border-gray-300 px-3 py-1 text-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="mt-4 italic text-gray-400">
                                Add your technical skills.
                            </p>
                        )}
                    </section>

                    {/* Projects */}
                    <section className="mt-3">
                        <h2 className="border-b border-gray-300 pb-2 text-sm font-bold uppercase tracking-wide text-black">
                            Projects
                        </h2>

                        <div className="mt-2 space-y-3">
                            {resume.projects
                                .filter(
                                    (project) =>
                                        project.title ||
                                        project.description ||
                                        project.techStack
                                )
                                .map((project, index) => (
                                    <div key={index}>
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-black font-semibold">
                                                    {project.title || "Project"}
                                                </h3>

                                                {project.techStack && (
                                                    <p className="mt-1 text-sm text-gray-600">
                                                        <span className="font-medium">
                                                            Tech:
                                                        </span>{" "}
                                                        {project.techStack}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="flex gap-4 text-sm">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-green-600 underline"
                                                    >
                                                        GitHub
                                                    </a>
                                                )}

                                                {project.live && (
                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-green-600 underline"
                                                    >
                                                        Live
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {project.description && (
                                            <p className="mt-3 whitespace-pre-line text-sm leading-5 text-gray-700">
                                                {project.description}
                                            </p>
                                        )}
                                    </div>
                                ))}

                            {resume.projects.every(
                                (project) =>
                                    !project.title &&
                                    !project.description &&
                                    !project.techStack
                            ) && (
                                    <p className="italic text-gray-400">
                                        Add your projects.
                                    </p>
                                )}
                        </div>
                    </section>
                </div>
            </div>
        </Card>
    );
}