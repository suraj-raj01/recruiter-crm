"use client";

import { useFormContext } from "react-hook-form";

import { ResumeFormData } from "../../types";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SummaryStep() {
    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext<ResumeFormData>();

    const summary = watch("summary");

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label>Professional Summary *</Label>

                <Textarea
                    rows={8}
                    className="resize-none"
                    placeholder="Write a professional summary..."
                    {...register("summary")}
                />

                <div className="flex items-center justify-between text-sm">
                    {errors.summary ? (
                        <p className="text-red-500">
                            {errors.summary.message}
                        </p>
                    ) : (
                        <p className="text-muted-foreground">
                            Write a concise ATS-friendly summary.
                        </p>
                    )}

                    <span className="text-muted-foreground">
                        {summary?.length ?? 0} characters
                    </span>
                </div>
            </div>

            <div className="rounded-xl border bg-muted/30 p-4">
                <h3 className="mb-2 font-semibold">
                    Tips for a strong summary
                </h3>

                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    <li>Mention your years of experience.</li>
                    <li>Highlight your primary technologies.</li>
                    <li>Include measurable achievements.</li>
                    <li>Keep it between 60–120 words.</li>
                    <li>Tailor it to the target job role.</li>
                </ul>
            </div>
        </div>
    );
}