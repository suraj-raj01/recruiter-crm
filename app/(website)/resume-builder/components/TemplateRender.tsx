"use client";

import { useFormContext } from "react-hook-form";

import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";

import { ResumeFormData } from "../types";

interface ResumePreviewProps {
    previewRef: React.RefObject<HTMLDivElement | null>;
}

export default function TemplateRenderer({
    previewRef,
}: ResumePreviewProps) {
    const { watch } = useFormContext<ResumeFormData>();

    switch (watch("template")) {
        case "minimal":
            return <MinimalTemplate previewRef={previewRef}/>;

        case "professional":
            return <ProfessionalTemplate previewRef={previewRef}/>;

        default:
            return <ModernTemplate previewRef={previewRef}/>;
    }
}