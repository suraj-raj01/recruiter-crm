"use client";

import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { ResumeFormData } from "../../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectsStep() {
    const {
        control,
        register,
        formState: { errors },
    } = useFormContext<ResumeFormData>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "projects",
    });

    return (
        <div className="space-y-6">
            {fields.map((field, index) => (
                <Card
                    key={field.id}
                    className="space-y-6 rounded-xl p-5"
                >
                    {/* Header */}

                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                            Project #{index + 1}
                        </h3>

                        {fields.length > 1 && (
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => remove(index)}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        )}
                    </div>

                    {/* Project Title */}

                    <div className="space-y-2">
                        <Label>Project Title *</Label>

                        <Input
                            placeholder="Resume Builder"
                            {...register(
                                `projects.${index}.title`
                            )}
                        />

                        {errors.projects?.[index]?.title && (
                            <p className="text-sm text-red-500">
                                {
                                    errors.projects[index].title
                                        ?.message
                                }
                            </p>
                        )}
                    </div>

                    {/* GitHub + Live */}

                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label>GitHub URL</Label>

                            <Input
                                placeholder="https://github.com/..."
                                {...register(
                                    `projects.${index}.github`
                                )}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Live Demo URL</Label>

                            <Input
                                placeholder="https://..."
                                {...register(
                                    `projects.${index}.live`
                                )}
                            />
                        </div>
                    </div>

                    {/* Tech Stack */}

                    <div className="space-y-2">
                        <Label>Tech Stack *</Label>

                        <Input
                            placeholder="React, Next.js, TypeScript, Node.js"
                            {...register(
                                `projects.${index}.techStack`
                            )}
                        />

                        {errors.projects?.[index]
                            ?.techStack && (
                                <p className="text-sm text-red-500">
                                    {
                                        errors.projects[index]
                                            .techStack?.message
                                    }
                                </p>
                            )}
                    </div>

                    {/* Description */}

                    <div className="space-y-2">
                        <Label>Description *</Label>

                        <Textarea
                            rows={6}
                            placeholder="Describe your project, features, impact, and achievements..."
                            {...register(
                                `projects.${index}.description`
                            )}
                        />

                        {errors.projects?.[index]
                            ?.description && (
                                <p className="text-sm text-red-500">
                                    {
                                        errors.projects[index]
                                            .description?.message
                                    }
                                </p>
                            )}
                    </div>
                </Card>
            ))}

            {/* Add Project */}

            <Button
                type="button"
                variant="outline"
                className="w-full border-dashed"
                onClick={() =>
                    append({
                        title: "",
                        github: "",
                        live: "",
                        techStack: "",
                        description: "",
                    })
                }
            >
                <Plus className="mr-2 h-4 w-4" />
                Add Project
            </Button>
        </div>
    );
}