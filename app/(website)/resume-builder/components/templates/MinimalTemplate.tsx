"use client";

import { Mail, Phone, MapPin, Globe} from "lucide-react";
import { useFormContext } from "react-hook-form";

import { ResumeFormData } from "../../types";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { formatMonthYear } from "../../constants/formatData";
interface ResumePreviewProps {
    previewRef: React.RefObject<HTMLDivElement | null>;
}

export default function MinimalTemplate({
    previewRef,
}: ResumePreviewProps) {
    const { watch } = useFormContext<ResumeFormData>();

    const resume = watch();
    const { personal } = resume;

    return (
        <div
            ref={previewRef}
            id="resume-preview"
            className="mx-auto max-w-198.5 bg-white p-10 text-black shadow-xl"
        >
            {/* Header */}
            <header className="text-center">
                <h1 className="text-4xl font-semibold tracking-tight">
                    {personal.fullName || "Your Name"}
                </h1>

                <p className="text-lg text-gray-600">
                    {personal.jobTitle || "Professional Title"}
                </p>

                <div className="mt-1 flex flex-wrap justify-center gap-x-5 text-sm text-gray-600">
                    {personal.email && (
                        <span className="flex items-center gap-1">
                            <Mail size={14} />
                            {personal.email}
                        </span>
                    )}

                    {personal.phone && (
                        <span className="flex items-center gap-1">
                            <Phone size={14} />
                            {personal.phone}
                        </span>
                    )}

                    {personal.location && (
                        <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {personal.location}
                        </span>
                    )}

                    {personal.website && (
                        <span className="flex items-center gap-1">
                            <Globe size={14} />
                            {personal.website}
                        </span>
                    )}

                    {personal.github && (
                        <span className="flex items-center gap-1">
                            <GithubLogoIcon size={14} />
                            {personal.github}
                        </span>
                    )}

                    {personal.linkedin && (
                        <span className="flex items-center gap-1">
                            <LinkedinLogoIcon size={14} />
                            {personal.linkedin}
                        </span>
                    )}
                </div>
            </header>

            {/* Summary */}
            {resume.summary && (
                <section className="mt-2">
                    <h2 className="text-lg font-semibold">Summary</h2>

                    <div className="h-px bg-gray-200" />

                    <p className="mt-2 whitespace-pre-line text-sm leading-5 text-gray-700">
                        {resume.summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {resume.experience.some(
                (item) => item.company || item.role
            ) && (
                    <section className="mt-2">
                        <h2 className="text-lg font-semibold">Experience</h2>

                        <div className="h-px bg-gray-200" />

                        <div className="mt-2 space-y-2">
                            {resume.experience.map((item, index) => {
                                if (!item.company && !item.role) return null;

                                return (
                                    <div key={index}>
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="font-medium">
                                                    {item.role}
                                                </h3>

                                                <p className="text-gray-600">
                                                    {item.company}
                                                </p>
                                            </div>

                                            <span className="text-sm text-gray-500">
                                                {item.startDate}
                                                {item.startDate &&
                                                    ` - ${item.currentlyWorking
                                                        ? "Present"
                                                        : item.endDate
                                                    }`}
                                            </span>
                                        </div>

                                        {item.description && (
                                            <p className="mt-2 whitespace-pre-line text-sm leading-5 text-gray-700">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

            {/* Education */}
            {resume.education.some(
                (item) => item.school || item.degree
            ) && (
                    <section className="mt-2">
                        <h2 className="text-lg font-semibold">Education</h2>

                        <div className="h-px bg-gray-200" />

                        <div className="mt-2 space-y-2">
                            {resume.education.map((item, index) => {
                                if (!item.school && !item.degree) return null;

                                return (
                                    <div
                                        key={index}
                                        className="flex justify-between"
                                    >
                                        <div>
                                            <h3 className="font-medium">
                                                {item.degree}
                                            </h3>

                                            <p className="text-gray-600 text-sm">
                                                {item.school}
                                            </p>

                                            {item.field && (
                                                <p className="text-xs text-gray-500">
                                                    {item.field}
                                                </p>
                                            )}
                                        </div>

                                        <span className="text-sm text-gray-500">
                                            {formatMonthYear(item.startYear)}  - {formatMonthYear(item.endYear)}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

            {/* Skills */}
            {resume.skills.length > 0 && (
                <section className="mt-2">
                    <h2 className="text-lg font-semibold">Skills</h2>

                    <div className="h-px bg-gray-200" />

                    <div className="mt-2 flex flex-wrap gap-1">
                        {resume.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="rounded-full border border-gray-300 px-3 py-1 text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {resume.projects.some(
                (project) => project.title
            ) && (
                    <section className="mt-2">
                        <h2 className="text-lg font-semibold">Projects</h2>

                        <div className="h-px bg-gray-200" />

                        <div className="mt-2 space-y-2">
                            {resume.projects.map((project, index) => {
                                if (!project.title) return null;

                                return (
                                    <div key={index}>
                                        <div className="flex justify-between">
                                            <h3 className="font-medium text-sm">
                                                {project.title}
                                            </h3>

                                            <div className="flex gap-3 text-sm">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        GitHub
                                                    </a>
                                                )}

                                                {project.live && (
                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        Live
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {project.techStack && (
                                            <p className="text-xs text-gray-500">
                                                {project.techStack}
                                            </p>
                                        )}

                                        {project.description && (
                                            <p className="mt-2 whitespace-pre-line text-sm leading-5 text-gray-700">
                                                {project.description}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}
        </div>
    );
}