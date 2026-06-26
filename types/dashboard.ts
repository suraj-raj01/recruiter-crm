export interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    avatarColor: string;
}

export interface Note {
    body: string;
    author: string;
    _id: string;
    createdAt: string;
}

export interface JobRef {
    id: string;
    title: string;
    department: string;
    location: string;
    employmentType: string;
    status: string;
    hiringManager: string;
    salaryRange: string;
    priority: string;
    skills: string[];
    description: string;
}

export interface Candidate {
    id: string;
    name: string;
    email: string;
    phone: string;
    location: string;
    headline: string;
    source: string;
    stage: string;
    rating: number;
    owner: string;
    skills: string[];
    salaryExpectation: string;
    noticePeriod: string;
    resumeUrl: string;
    nextStep: string;
    nextStepDueDate: string;
    notes: Note[];
    jobId: string;
    job: JobRef;
    createdAt: string;
}

export interface Job {
    _id: string;
    title: string;
    department: string;
    location: string;
    employmentType: string;
    status: string;
    hiringManager: string;
    salaryRange: string;
    priority: string;
    skills: string[];
    description: string;
    createdAt: string;
}

export interface StageCount {
    stage: string;
    count: number;
}

export interface RecentActivity {
    type: string;
    message: string;
    _id: string;
    createdAt: string;
    candidateId: string;
    candidateName: string;
}

export interface Metrics {
    totalCandidates: number;
    activeCandidates: number;
    openJobs: number;
    hired: number;
    conversionRate: number;
    averageRating: number;
    stageCounts: StageCount[];
    sourceCounts: Record<string, number>;
    dueSoon: Candidate[];
    recentActivity: RecentActivity[];
    updatedAt: string;
}