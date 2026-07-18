import {
    User,
    FileText,
    BriefcaseBusiness,
    GraduationCap,
    Code2,
    Award,
} from "lucide-react";

export const steps = [
    {
        id: 0,
        title: "Personal",
        description: "Basic Information",
        icon: User,
    },

    {
        id: 1,
        title: "Summary",
        description: "Professional Summary",
        icon: FileText,
    },

    {
        id: 2,
        title: "Experience",
        description: "Work Experience",
        icon: BriefcaseBusiness,
    },

    {
        id: 3,
        title: "Education",
        description: "Academic Details",
        icon: GraduationCap,
    },

    {
        id: 4,
        title: "Skills",
        description: "Technical Skills",
        icon: Code2,
    },

    {
        id: 5,
        title: "Projects",
        description: "Projects Portfolio",
        icon: Award,
    },
];