"use client";

import { useFormContext } from "react-hook-form";

import { ResumeFormData } from "../../types";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PersonalStep() {
    const {
        register,
        formState: { errors },
    } = useFormContext<ResumeFormData>();

    const personalErrors = errors.personal;

    return (
        <div className="space-y-6">
            {/* Full Name + Job Title */}
            <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Full Name *</Label>

                    <Input
                        placeholder="Suraj Kumar"
                        {...register("personal.fullName")}
                    />

                    {personalErrors?.fullName && (
                        <p className="text-sm text-red-500">
                            {personalErrors.fullName.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>Job Title *</Label>

                    <Input
                        placeholder="Full Stack Developer"
                        {...register("personal.jobTitle")}
                    />

                    {personalErrors?.jobTitle && (
                        <p className="text-sm text-red-500">
                            {personalErrors.jobTitle.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Email + Phone */}
            <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Email *</Label>

                    <Input
                        type="email"
                        placeholder="suraj@gmail.com"
                        {...register("personal.email")}
                    />

                    {personalErrors?.email && (
                        <p className="text-sm text-red-500">
                            {personalErrors.email.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>Phone *</Label>

                    <Input
                        placeholder="+91 9876543210"
                        {...register("personal.phone")}
                    />

                    {personalErrors?.phone && (
                        <p className="text-sm text-red-500">
                            {personalErrors.phone.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
                <Label>Location *</Label>

                <Input
                    placeholder="Bhopal, India"
                    {...register("personal.location")}
                />

                {personalErrors?.location && (
                    <p className="text-sm text-red-500">
                        {personalErrors.location.message}
                    </p>
                )}
            </div>

            {/* Website + GitHub */}
            <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>Website</Label>

                    <Input
                        placeholder="https://portfolio.com"
                        {...register("personal.website")}
                    />
                </div>

                <div className="space-y-2">
                    <Label>GitHub</Label>

                    <Input
                        placeholder="https://github.com/username"
                        {...register("personal.github")}
                    />
                </div>
            </div>

            {/* LinkedIn */}
            <div className="space-y-2">
                <Label>LinkedIn</Label>

                <Input
                    placeholder="https://linkedin.com/in/username"
                    {...register("personal.linkedin")}
                />
            </div>
        </div>
    );
}