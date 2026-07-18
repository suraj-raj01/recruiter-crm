import { ResumeFormData } from "../types";

export const defaultValues: ResumeFormData = {
    template: "modern",
    personal: {
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        location: "",
        website: "",
        linkedin: "",
        github: "",
    },

    summary: "",

    experience: [
        {
            company: "",
            role: "",
            location: "",
            startDate: "",
            endDate: "",
            currentlyWorking: false,
            description: "",
        },
    ],

    education: [
        {
            school: "",
            degree: "",
            field: "",
            startYear: "",
            endYear: "",
            grade: "",
        },
    ],

    skills: [],

    projects: [
        {
            title: "",
            techStack: "",
            github: "",
            live: "",
            description: "",
        },
    ],
};