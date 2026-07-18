"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function usePrintResume() {
    const componentRef = useRef<HTMLDivElement>(null);

    const printResume = useReactToPrint({
        contentRef: componentRef,
        documentTitle: "Resume",
        pageStyle: `@page{size:A4; margin:10mm;}
        body{
        -webkit-print-color-adjust:exact;
        print-color-adjust:exact;
        }`
    });

    return {
        componentRef,
        printResume,
    };
}