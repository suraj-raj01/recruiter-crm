export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}

export interface User {
    user: null;
    _id: string;
    name: string;
    role: string;
    email: string;
    avatarColor: string;
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

export interface JobPayload {
    title: string;
    description: string;
}

export interface Candidate {
    candidate(candidate: any): unknown;
    _id: string;
    name: string;
    email: string;
    stage: string;
}

export interface CandidatePayload {
    name: string;
    email: string;
    stage: string;
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

export interface MetricsResponse {
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
}