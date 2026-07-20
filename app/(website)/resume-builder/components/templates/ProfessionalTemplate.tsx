"use client";

import { Mail, Phone, MapPin, Globe} from "lucide-react";
import { useFormContext } from "react-hook-form";

import { ResumeFormData } from "../../types";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { formatMonthYear } from "../../constants/formatData";

interface ResumePreviewProps {
    previewRef: React.RefObject<HTMLDivElement | null>;
}

export default function ProfessionalTemplate({
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
            <header className="border-b border-gray-400 pb-2">
                <h1 className="text-4xl font-bold uppercase tracking-wide">
                    {personal.fullName || "Your Name"}
                </h1>

                <p className="text-lg text-gray-700">
                    {personal.jobTitle || "Professional Title"}
                </p>

                <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-700">
                    {personal.email && (
                        <div className="flex items-center gap-2">
                            <Mail size={15} />
                            {personal.email}
                        </div>
                    )}

                    {personal.phone && (
                        <div className="flex items-center gap-2">
                            <Phone size={15} />
                            {personal.phone}
                        </div>
                    )}

                    {personal.location && (
                        <div className="flex items-center gap-2">
                            <MapPin size={15} />
                            {personal.location}
                        </div>
                    )}

                    {personal.website && (
                        <div className="flex items-center gap-2">
                            <Globe size={15} />
                            {personal.website}
                        </div>
                    )}

                    {personal.github && (
                        <div className="flex items-center gap-2">
                            <GithubLogoIcon size={15} />
                            {personal.github}
                        </div>
                    )}

                    {personal.linkedin && (
                        <div className="flex items-center gap-2">
                            <LinkedinLogoIcon size={15} />
                            {personal.linkedin}
                        </div>
                    )}
                </div>
            </header>

            {/* Summary */}
            {resume.summary && (
                <section className="mt-2">
                    <h2 className="border-b border-gray-400 text-lg font-bold uppercase">
                        Professional Summary
                    </h2>

                    <p className="mt-1 whitespace-pre-line text-sm leading-5 text-gray-700">
                        {resume.summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {resume.experience.some(
                (exp) => exp.company || exp.role
            ) && (
                    <section className="mt-2">
                        <h2 className="border-b border-gray-400 text-lg font-bold uppercase">
                            Experience
                        </h2>

                        <div className="mt-2 space-y-3">
                            {resume.experience.map((exp, index) => {
                                if (!exp.company && !exp.role) return null;

                                return (
                                    <div key={index}>
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="font-semibold">
                                                    {exp.role}
                                                </h3>

                                                <p className="text-gray-700">
                                                    {exp.company}
                                                </p>

                                                {exp.location && (
                                                    <p className="text-sm text-gray-500">
                                                        {exp.location}
                                                    </p>
                                                )}
                                            </div>

                                            <p className="text-sm text-gray-600">
                                                {exp.startDate} -{" "}
                                                {exp.currentlyWorking
                                                    ? "Present"
                                                    : exp.endDate}
                                            </p>
                                        </div>

                                        {exp.description && (
                                            <p className="mt-1 whitespace-pre-line text-sm leading-5 text-gray-700">
                                                {exp.description}
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
                (edu) => edu.school || edu.degree
            ) && (
                    <section className="mt-2">
                        <h2 className="border-b border-gray-400 text-lg font-bold uppercase">
                            Education
                        </h2>

                        <div className="mt-2 space-y-1">
                            {resume.education.map((edu, index) => {
                                if (!edu.school && !edu.degree) return null;

                                return (
                                    <div
                                        key={index}
                                        className="flex justify-between"
                                    >
                                        <div>
                                            <h3 className="font-bold text-sm">
                                                {edu.degree}
                                            </h3>

                                            <p>{edu.school}</p>

                                            {edu.field && (
                                                <p className="text-xs text-gray-500">
                                                    {edu.field}
                                                </p>
                                            )}
                                        </div>

                                        <p className="text-sm text-gray-600">
                                            {formatMonthYear(edu.startYear)}  - {formatMonthYear(edu.endYear)}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

            {/* Skills */}
            {resume.skills.length > 0 && (
                <section className="mt-2">
                    <h2 className="border-b border-gray-400 text-lg font-bold uppercase">
                        Skills
                    </h2>

                    <p className="mt-1 text-sm leading-5">
                        {resume.skills.join(" • ")}
                    </p>
                </section>
            )}

            {/* Projects */}
            {resume.projects.some(
                (project) => project.title
            ) && (
                    <section className="mt-2">
                        <h2 className="border-b border-gray-400 text-lg font-bold uppercase">
                            Projects
                        </h2>

                        <div className="mt-1 space-y-2">
                            {resume.projects.map((project, index) => {
                                if (!project.title) return null;

                                return (
                                    <div key={index}>
                                        <div className="flex justify-between">
                                            <h3 className="font-semibold">
                                                {project.title}
                                            </h3>

                                            <div className="flex gap-3 text-sm">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        className="text-blue-600 underline"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        GitHub
                                                    </a>
                                                )}

                                                {project.live && (
                                                    <a
                                                        href={project.live}
                                                        className="text-blue-600 underline"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Live
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {project.techStack && (
                                            <p className="text-xs font-medium text-gray-600">
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