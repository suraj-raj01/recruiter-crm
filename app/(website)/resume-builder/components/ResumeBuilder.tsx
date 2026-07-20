"use client";

import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Download,
    Eye,
    Fullscreen,
    Printer,
    Save,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { ResumeFormData, resumeSchema } from "../lib/schema";
import { defaultValues } from "../lib/defaultValue";
import { ResumeTemplate } from "../types";
import { steps } from "../constants/steps";

import ResumeStepper from "./ResumeStepper";
import ResumePreview from "./ResumePreview";
import NavigationButtons from "./NavigationButtons";

import PersonalStep from "./steps/PersonalStep";
import SummaryStep from "./steps/SummaryStep";
import ExperienceStep from "./steps/ExperienceStep";
import EducationStep from "./steps/EducationStep";
import SkillsStep from "./steps/SkillsStep";
import ProjectsStep from "./steps/ProjectsStep";
import { toast } from "sonner";
import useAutoSave from "@/hooks/useAutoSave";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import usePrintResume from "@/hooks/usePrintResume";
import { Badge } from "@/components/ui/badge";
import TemplateRenderer from "./TemplateRender";
import ResumePreviewDialog from "../dialogs/ResumePreviewDialog";

export default function ResumeBuilder() {
    const [currentStep, setCurrentStep] = useState(0);
    const { componentRef, printResume } = usePrintResume();
    const [openPreview, setOpenPreview] = useState(false);

    const form = useForm<ResumeFormData>({
        resolver: zodResolver(resumeSchema),
        defaultValues: defaultValues,
        mode: "onChange",
    });

    const {
        handleSubmit,
        reset,
        getValues,
        watch,
        setValue,
    } = form;

    useAutoSave({
        watch,
    });
    const template = watch("template");

    const onSubmit = async (values: ResumeFormData) => {
        try {
            const response = await fetch("/api/resume", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error();
            }
            toast.success("Resume saved successfully");
        } catch {
            // toast.error("Failed to save resume");
        }
    };

    const resetForm = () => {
        reset(defaultValues);

        localStorage.removeItem(
            "resume-builder"
        );
        toast.success("Form reset");
    };

    const saveDraft = () => {
        localStorage.setItem(
            "resume-builder",
            JSON.stringify(getValues())
        );
        toast.success("Draft saved");
    };

    const clearDraft = () => {
        localStorage.removeItem("resume-builder");
        toast.success("Draft removed");
    };

    const loadDraft = () => {
        const draft = localStorage.getItem("resume-builder");

        if (!draft) {
            toast.error("No draft found");
            return;
        }
        try {
            reset(JSON.parse(draft));
            toast.success("Draft loaded");
        } catch {
            toast.error("Invalid draft");
        }
    };


    useEffect(() => {
        const draft = localStorage.getItem(
            "resume-builder"
        );
        if (!draft) return;
        try {
            reset(JSON.parse(draft));
            // toast.success("Draft restored");
        } catch {
            console.error("Invalid draft");
        }
    }, [reset]);

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <PersonalStep />;
            case 1:
                return <SummaryStep />;
            case 2:
                return <ExperienceStep />;
            case 3:
                return <EducationStep />;
            case 4:
                return <SkillsStep />;
            case 5:
                return <ProjectsStep />;
            default:
                return <PersonalStep />;
        }
    };

    return (
        <FormProvider {...form}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                {/* Header */}

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                        <h1 className="text-4xl font-bold">
                            Resume Builder
                        </h1>

                        <p className="mt-2 text-muted-foreground">
                            Create an ATS Friendly Resume
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">

                        <Button
                            type="button"
                            variant="outline"
                            onClick={loadDraft}
                        >
                            Load Draft
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            onClick={saveDraft}
                        >
                            <Save className="mr-2 h-4 w-4" />
                            Save Draft
                        </Button>

                        <Button
                            type="button"
                            variant="destructive"
                            onClick={clearDraft}
                        >
                            Clear Draft
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            onClick={resetForm}
                        >
                            Reset
                        </Button>

                        <Button
                            type="button"
                            onClick={() => printResume()}
                            className="bg-orange-600 text-white cursor-pointer hover:bg-orange-700"
                        >
                            <Printer className="h-4 w-4" />
                            Print Resume
                        </Button>
                    </div>
                </div>

                {/* Stepper */}
                <ResumeStepper
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />

                {/* Main Grid */}
                <div className="grid xl:grid-cols-2">
                    {/* Editor */}
                    <Card className="rounded-lg rounded-r-xs p-6">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold">
                                {steps[currentStep].title}
                            </h2>

                            <p className="text-muted-foreground">
                                {steps[currentStep].description}
                            </p>
                        </div>

                        {renderStep()}

                        <NavigationButtons
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                            totalSteps={steps.length}
                        />
                    </Card>

                    {/* Preview */}
                    <Card className="p-2 rounded-lg rounded-l-xs">
                        <div className='flex items-center justify-between'>
                            <Badge onClick={() => setOpenPreview(true)} className="border border-orange-600/80 text-orange-600 py-3 rounded-sm cursor-pointer bg-card">
                                <Fullscreen size='lg' className="" />
                                Preview
                            </Badge>
                            <Tabs
                                className="rounded-lg flex items-end justify-center"
                                value={template}
                                onValueChange={(value) =>
                                    setValue("template", value as ResumeTemplate)
                                }
                            >
                                <TabsList className='px-2 bg-card w-fit rounded-sm'>
                                    <TabsTrigger value="modern">
                                        Modern
                                    </TabsTrigger>

                                    <TabsTrigger value="minimal">
                                        Minimal
                                    </TabsTrigger>

                                    <TabsTrigger value="professional">
                                        Professional
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                            <div className="px-2">
                                <h2 className="text-lg font-semibold">
                                    Live Resume Preview
                                </h2>

                                <p className="text-sm text-muted-foreground">
                                    Changes appear instantly while you edit.
                                </p>
                            </div>
                            <TemplateRenderer previewRef={componentRef}/>
                        </div>
                    </Card>
                </div>
            </form>
            <ResumePreviewDialog
                open={openPreview}
                onOpenChange={setOpenPreview}
                previewRef={componentRef}
            />
        </FormProvider>
    );
}