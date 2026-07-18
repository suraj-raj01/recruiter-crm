"use client";

import { Trash2, Plus } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { ResumeFormData } from "../../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ExperienceStep() {
    const {
        control,
        register,
        watch,
        setValue,
        formState: { errors },
    } = useFormContext<ResumeFormData>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "experience",
    });

    return (
        <div className="space-y-6">
            {fields.map((field, index) => {
                const current = watch(`experience.${index}`);

                return (
                    <Card
                        key={field.id}
                        className="space-y-6 rounded-xl p-5"
                    >
                        {/* Header */}

                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">
                                Experience #{index + 1}
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

                        {/* Company + Role */}

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label>Company *</Label>

                                <Input
                                    placeholder="Google"
                                    {...register(
                                        `experience.${index}.company`
                                    )}
                                />

                                <p className="text-sm text-red-500">
                                    {
                                        errors.experience?.[index]?.company
                                            ?.message
                                    }
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label>Role *</Label>

                                <Input
                                    placeholder="Frontend Developer"
                                    {...register(
                                        `experience.${index}.role`
                                    )}
                                />

                                <p className="text-sm text-red-500">
                                    {
                                        errors.experience?.[index]?.role
                                            ?.message
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Location */}

                        <div className="space-y-2">
                            <Label>Location</Label>

                            <Input
                                placeholder="Bangalore"
                                {...register(
                                    `experience.${index}.location`
                                )}
                            />
                        </div>

                        {/* Dates */}

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label>Start Date *</Label>

                                <Input
                                    type="month"
                                    {...register(
                                        `experience.${index}.startDate`
                                    )}
                                />

                                <p className="text-sm text-red-500">
                                    {
                                        errors.experience?.[index]
                                            ?.startDate?.message
                                    }
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label>End Date</Label>

                                <Input
                                    type="month"
                                    disabled={current.currentlyWorking}
                                    {...register(
                                        `experience.${index}.endDate`
                                    )}
                                />
                            </div>
                        </div>

                        {/* Currently Working */}

                        <div className="flex items-center space-x-3">
                            <Checkbox
                                checked={
                                    current.currentlyWorking
                                }
                                onCheckedChange={(checked) => {
                                    setValue(
                                        `experience.${index}.currentlyWorking`,
                                        Boolean(checked)
                                    );

                                    if (checked) {
                                        setValue(
                                            `experience.${index}.endDate`,
                                            ""
                                        );
                                    }
                                }}
                            />

                            <Label>I currently work here</Label>
                        </div>

                        {/* Description */}

                        <div className="space-y-2">
                            <Label>Description *</Label>

                            <Textarea
                                rows={6}
                                placeholder="Describe your responsibilities and achievements..."
                                {...register(
                                    `experience.${index}.description`
                                )}
                            />

                            <p className="text-sm text-red-500">
                                {
                                    errors.experience?.[index]
                                        ?.description?.message
                                }
                            </p>
                        </div>
                    </Card>
                );
            })}

            {/* Add Button */}

            <Button
                type="button"
                variant="outline"
                className="w-full border-dashed"
                onClick={() =>
                    append({
                        company: "",
                        role: "",
                        location: "",
                        startDate: "",
                        endDate: "",
                        currentlyWorking: false,
                        description: "",
                    })
                }
            >
                <Plus className="mr-2 h-4 w-4" />

                Add Experience
            </Button>
        </div>
    );
}