"use client";

import * as React from "react";

import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";

// import ResumePreview from "../components/ResumePreview";
import TemplateRenderer from "../components/TemplateRender";
import usePrintResume from "@/hooks/usePrintResume";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

interface ResumePreviewDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    previewRef: React.RefObject<HTMLDivElement | null>;
}

export default function ResumePreviewDialog({
    open,
    onOpenChange,
}: ResumePreviewDialogProps) {
    const { componentRef, printResume } = usePrintResume();
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="lg:min-w-4xl h-[90vh] overflow-y-auto p-3">
                <div className='py-3 px-7'>
                    <Button
                        type="button"
                        onClick={() => printResume()}
                        className="bg-orange-600 absolute text-white cursor-pointer hover:bg-orange-700"
                    >
                        <Printer className="h-4 w-4" />
                        Print Resume
                    </Button>
                </div>
                <div className="bg-muted/40">
                    <TemplateRenderer previewRef={componentRef} />
                </div>
            </DialogContent>
        </Dialog>
    );
}