export interface PersonalInfo {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
}

export interface Experience {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
    description: string;
}

export interface Education {
    school: string;
    degree: string;
    field: string;
    startYear: string;
    endYear: string;
    grade: string;
}

export interface Project {
    title: string;
    techStack: string;
    github: string;
    live: string;
    description: string;
}

export interface ResumeFormData {
    personal: PersonalInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: string[];
    projects: Project[];
}

export type ResumeTemplate = "modern" | "minimal" | "professional";

export interface ResumeFormData {
    template: ResumeTemplate;
    personal: PersonalInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: string[];
    projects: Project[];
}