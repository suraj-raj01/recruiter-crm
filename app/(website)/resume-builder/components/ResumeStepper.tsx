"use client";

import { Check } from "lucide-react";
import { steps } from "../constants/steps";
import { cn } from "@/lib/utils";

interface ResumeStepperProps {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function ResumeStepper({
    currentStep,
    setCurrentStep,
}: ResumeStepperProps) {
    return (
        <div className="w-full bg-card lg:px-4 px-2 rounded-lg overflow-x-auto">
            <div className="flex min-w-full items-center justify-between gap-2 py-4">
                {steps.map((step, index) => {
                    const Icon = step.icon;

                    const completed = index < currentStep;
                    const active = index === currentStep;

                    return (
                        <div
                            key={step.id}
                            className="flex flex-1 items-center justify-between"
                        >
                            {/* Step */}

                            <button
                                type="button"
                                onClick={() => {
                                    if (index <= currentStep) {
                                        setCurrentStep(index);
                                    }
                                }}
                                className={cn(
                                    "group flex flex-col items-center transition-all",
                                    index <= currentStep
                                        ? "cursor-pointer"
                                        : "cursor-not-allowed opacity-60"
                                )}
                            >
                                {/* Circle */}

                                <div
                                    className={cn(
                                        "flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300",

                                        completed &&
                                        "border-green-600 bg-green-600 text-white",

                                        active &&
                                        "border-orange-600 bg-orange-600 text-white shadow-lg",

                                        !completed &&
                                        !active &&
                                        "border-muted-foreground/30 bg-background text-muted-foreground"
                                    )}
                                >
                                    {completed ? (
                                        <Check className="h-5 w-5" />
                                    ) : (
                                        <Icon className="h-5 w-5" />
                                    )}
                                </div>

                                {/* Label */}

                                <span
                                    className={cn(
                                        "mt-2 text-sm font-medium",
                                        active && "text-orange-600",
                                        completed && "text-green-600"
                                    )}
                                >
                                    {step.title}
                                </span>

                                <span className="hidden text-xs text-muted-foreground md:block">
                                    {step.description}
                                </span>
                            </button>

                            {/* Connector */}

                            {index !== steps.length - 1 && (
                                <div className="mx-3 flex-1">
                                    <div className="relative h-1 rounded-full bg-muted">
                                        <div
                                            className={cn(
                                                "absolute left-0 top-0 h-1 rounded-full transition-all duration-500",

                                                completed
                                                    ? "w-full bg-green-600"
                                                    : "w-0 bg-orange-600"
                                            )}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}