"use client";

import { useEffect, useRef } from "react";
import { UseFormWatch } from "react-hook-form";
// import { ResumeFormData } from './../app/(website)/resume-builder/types';

interface Props {
    watch: UseFormWatch<any>;
}

export default function useAutoSave({
    watch,
}: Props) {
    const timer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const subscription = watch((values) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = setTimeout(() => {
                localStorage.setItem(
                    "resume-builder",
                    JSON.stringify(values)
                );
            }, 800);
        });

        return () => {
            subscription.unsubscribe();

            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, [watch]);
}