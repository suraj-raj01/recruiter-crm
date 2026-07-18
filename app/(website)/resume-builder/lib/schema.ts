import { z } from "zod";

const personalSchema = z.object({
    fullName: z
        .string()
        .min(2, "Full name must be at least 2 characters"),

    jobTitle: z
        .string()
        .min(2, "Job title is required"),

    email: z
        .string()
        .email("Invalid email address"),

    phone: z
        .string()
        .min(10, "Phone number is required"),

    location: z
        .string()
        .min(2, "Location is required"),

    website: z.string().optional(),

    linkedin: z.string().optional(),

    github: z.string().optional(),
});

const experienceSchema = z.object({
    company: z
        .string()
        .min(2, "Company name is required"),

    role: z
        .string()
        .min(2, "Role is required"),

    location: z.string(),

    startDate: z
        .string()
        .min(1, "Start date is required"),

    endDate: z.string(),

    currentlyWorking: z.boolean(),

    description: z
        .string()
        .min(10, "Please write at least 10 characters"),
});

const educationSchema = z.object({
    school: z
        .string()
        .min(2, "School name is required"),

    degree: z
        .string()
        .min(2, "Degree is required"),

    field: z
        .string()
        .min(2, "Field of study is required"),

    startYear: z
        .string()
        .min(4),

    endYear: z
        .string()
        .min(4),

    grade: z.string(),
});

const projectSchema = z.object({
    title: z
        .string()
        .min(2, "Project title is required"),

    techStack: z
        .string()
        .min(2, "Tech stack is required"),

    github: z.string(),

    live: z.string(),

    description: z
        .string()
        .min(10, "Description is too short"),
});

export const resumeSchema = z.object({
    template: z.enum(["modern", "minimal", "professional"]),
    personal: personalSchema,

    summary: z
        .string()
        .min(30, "Summary should be at least 30 characters"),

    experience: z
        .array(experienceSchema)
        .min(1, "Add at least one experience"),

    education: z
        .array(educationSchema)
        .min(1, "Add at least one education"),

    skills: z
        .array(z.string())
        .min(1, "Add at least one skill"),

    projects: z
        .array(projectSchema)
        .min(1, "Add at least one project"),
});

export type ResumeFormData = z.infer<typeof resumeSchema>;