"use client";

import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { ResumeFormData } from "../../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EducationStep() {
    const {
        control,
        register,
        formState: { errors },
    } = useFormContext<ResumeFormData>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "education",
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
                            Education #{index + 1}
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

                    {/* School + Degree */}

                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label>School / University *</Label>

                            <Input
                                placeholder="RNTU University"
                                {...register(
                                    `education.${index}.school`
                                )}
                            />

                            {errors.education?.[index]?.school && (
                                <p className="text-sm text-red-500">
                                    {
                                        errors.education[index].school
                                            ?.message
                                    }
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label>Degree *</Label>

                            <Input
                                placeholder="B.Tech"
                                {...register(
                                    `education.${index}.degree`
                                )}
                            />

                            {errors.education?.[index]?.degree && (
                                <p className="text-sm text-red-500">
                                    {
                                        errors.education[index].degree
                                            ?.message
                                    }
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Field */}

                    <div className="space-y-2">
                        <Label>Field of Study *</Label>

                        <Input
                            placeholder="Computer Science"
                            {...register(
                                `education.${index}.field`
                            )}
                        />

                        {errors.education?.[index]?.field && (
                            <p className="text-sm text-red-500">
                                {
                                    errors.education[index].field
                                        ?.message
                                }
                            </p>
                        )}
                    </div>

                    {/* Years */}

                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label>Start Year *</Label>

                            <Input
                                type="number"
                                placeholder="2020"
                                {...register(
                                    `education.${index}.startYear`
                                )}
                            />

                            {errors.education?.[index]
                                ?.startYear && (
                                    <p className="text-sm text-red-500">
                                        {
                                            errors.education[index]
                                                .startYear?.message
                                        }
                                    </p>
                                )}
                        </div>

                        <div className="space-y-2">
                            <Label>End Year *</Label>

                            <Input
                                type="number"
                                placeholder="2024"
                                {...register(
                                    `education.${index}.endYear`
                                )}
                            />

                            {errors.education?.[index]
                                ?.endYear && (
                                    <p className="text-sm text-red-500">
                                        {
                                            errors.education[index]
                                                .endYear?.message
                                        }
                                    </p>
                                )}
                        </div>
                    </div>

                    {/* Grade */}

                    <div className="space-y-2">
                        <Label>CGPA / Percentage</Label>

                        <Input
                            placeholder="8.7 CGPA or 82%"
                            {...register(
                                `education.${index}.grade`
                            )}
                        />
                    </div>
                </Card>
            ))}

            {/* Add Education */}

            <Button
                type="button"
                variant="outline"
                className="w-full border-dashed"
                onClick={() =>
                    append({
                        school: "",
                        degree: "",
                        field: "",
                        startYear: "",
                        endYear: "",
                        grade: "",
                    })
                }
            >
                <Plus className="mr-2 h-4 w-4" />
                Add Education
            </Button>
        </div>
    );
}