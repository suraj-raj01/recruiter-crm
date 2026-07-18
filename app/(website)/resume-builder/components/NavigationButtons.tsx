"use client";

import { Dispatch, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ResumeFormData } from "../types";

interface NavigationButtonsProps {
    currentStep: number;
    setCurrentStep: Dispatch<SetStateAction<number>>;
    totalSteps: number;
}

export default function NavigationButtons({
    currentStep,
    setCurrentStep,
    totalSteps,
}: NavigationButtonsProps) {
    const { trigger } = useFormContext<ResumeFormData>();

    /**
     * Validate only the current step
     */
    const validateCurrentStep = async () => {
        switch (currentStep) {
            case 0:
                return await trigger("personal");

            case 1:
                return await trigger("summary");

            case 2:
                return await trigger("experience");

            case 3:
                return await trigger("education");

            case 4:
                return await trigger("skills");

            case 5:
                return await trigger("projects");

            default:
                return true;
        }
    };

    const nextStep = async () => {
        const valid = await validateCurrentStep();

        if (!valid) return;

        setCurrentStep((prev) => prev + 1);
    };

    const previousStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    return (
        <div className="mt-10 flex items-center justify-between border-t pt-6">
            <Button
                type="button"
                variant="outline"
                disabled={currentStep === 0}
                onClick={previousStep}
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
            </Button>

            {currentStep === totalSteps - 1 ? (
                <Button
                    type="submit"
                    className="bg-orange-600 text-white hover:bg-orange-700"
                >
                    <Check className="mr-2 h-4 w-4" />
                    Finish Resume
                </Button>
            ) : (
                <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-orange-600 text-white hover:bg-orange-700"
                >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            )}
        </div>
    );
}