"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { ResumeFormData } from "../../types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const suggestedSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Redux Toolkit",
    "REST API",
    "GraphQL",
    "Docker",
    "Git",
    "GitHub",
];

export default function SkillsStep() {
    const [value, setValue] = useState("");

    const {
        watch,
        setValue: setFormValue,
        formState: { errors },
    } = useFormContext<ResumeFormData>();

    const skills = watch("skills") ?? [];

    const addSkill = (skill: string) => {
        const trimmed = skill.trim();

        const alreadyExists = skills.some(
            (item) => item.toLowerCase() === trimmed.toLowerCase()
        );

        if (alreadyExists) {
            setValue("");
            return;
        }

        if (!trimmed) return;

        if (skills.includes(trimmed)) {
            setValue("");
            return;
        }

        if (skills.length >= 30) return;

        setFormValue("skills", [...skills, trimmed], {
            shouldValidate: true,
        });

        setValue("");
    };

    const removeSkill = (skill: string) => {
        setFormValue(
            "skills",
            skills.filter((item) => item !== skill),
            {
                shouldValidate: true,
            }
        );
    };

    return (
        <div className="space-y-8">
            {/* Input */}

            <div className="space-y-2">
                <Label>Add Skill</Label>

                <Input
                    value={value}
                    placeholder="Type a skill and press Enter..."
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (
                            e.key === "Enter" ||
                            e.key === ","
                        ) {
                            e.preventDefault();
                            addSkill(value);
                        }
                    }}
                />

                {errors.skills && (
                    <p className="text-sm text-red-500">
                        {errors.skills.message}
                    </p>
                )}

                <p className="text-sm text-muted-foreground">
                    Press Enter or comma to add a skill.
                </p>
            </div>

            {/* Selected Skills */}

            <div>
                <h3 className="mb-3 font-semibold">
                    Your Skills ({skills.length})
                </h3>

                <div className="flex flex-wrap gap-2">
                    {skills.length === 0 && (
                        <p className="text-sm text-muted-foreground">
                            No skills added yet.
                        </p>
                    )}

                    {skills.map((skill) => (
                        <Badge
                            key={skill}
                            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                        >
                            {skill}

                            <button
                                type="button"
                                onClick={() =>
                                    removeSkill(skill)
                                }
                            >
                                <X className="h-3 w-3" />
                            </button>
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Suggestions */}

            <div>
                <h3 className="mb-3 font-semibold">
                    Suggested Skills
                </h3>

                <div className="flex flex-wrap gap-2">
                    {suggestedSkills.map((skill) => {
                        const exists = skills.includes(skill);

                        return (
                            <Button
                                key={skill}
                                type="button"
                                variant={
                                    exists
                                        ? "secondary"
                                        : "outline"
                                }
                                disabled={exists}
                                size="sm"
                                onClick={() => addSkill(skill)}
                            >
                                {skill}
                            </Button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}