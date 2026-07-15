import { Candidate, CandidatePayload, Job, JobPayload, LoginPayload, LoginResponse, MetricsResponse, User } from "@/types/api";

let token = typeof window !== "undefined" ? localStorage.getItem("ats_token") || "" : "";

export const setAuthToken = (nextToken: string) => {
    token = nextToken || "";

    if (typeof window !== "undefined") {
        if (token) {
            localStorage.setItem("ats_token", token);
        } else {
            localStorage.removeItem("ats_token");
        }
    }
};

interface RequestOptions {
    method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
    body?: unknown;
    query?: Record<string, string | number | boolean | undefined | null>;
}

async function request<T>(
    path: string,
    options: RequestOptions = {}
): Promise<T> {
    const baseUrl =
        process.env.NEXT_PUBLIC_API_URL ||
        (typeof window !== "undefined" ? window.location.origin : "");

    const url = new URL(path, baseUrl);

    if (options.query) {
        Object.entries(options.query).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== "") {
                url.searchParams.set(key, String(value));
            }
        });
    }

    const response = await fetch(url.toString(), {
        method: options.method || "GET",
        headers: {
            "Content-Type": "application/json",
            ...(token && {
                Authorization: `Bearer ${token}`,
            }),
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(data.message || "Request failed.");
    }

    return data as T;
}

export const api = {
    awake: () => 
        request<LoginResponse>("/api/auth/awake",{
            method: "POST",
        }),

    login: (body: LoginPayload) =>
        request<LoginResponse>("/api/auth/login", {
            method: "POST",
            body,
        }),

    me: () => request<User>("/api/auth/me"),

    getJobs: () => request<any>("/api/jobs"),

    getJob: (id: string) =>
        request<Job>(`/api/jobs/${id}`),

    createJob: (body: JobPayload) =>
        request<Job>("/api/jobs", {
            method: "POST",
            body,
        }),

    updateJob: (id: string, body: Partial<JobPayload>) =>
        request<Job>(`/api/jobs/${id}`, {
            method: "PATCH",
            body,
        }),

    getCandidates: (query?: Record<string, number>) =>
        request<any>("/api/candidates", {
            query,
        }),

    getCandidate: (id: string) =>
        request<Candidate>(`/api/candidates/${id}`),

    createCandidate: (body: CandidatePayload) =>
        request<Candidate>("/api/candidates", {
            method: "POST",
            body,
        }),

    updateCandidate: (id: string, body: Partial<CandidatePayload>) =>
        request<Candidate>(`/api/candidates/${id}`, {
            method: "PATCH",
            body,
        }),

    deleteCandidate: (id: string) =>
        request<{ message: string }>(`/api/candidates/${id}`, {
            method: "DELETE",
        }),

    moveCandidate: (id: string, stage: string) =>
        request<Candidate>(`/api/candidates/${id}/stage`, {
            method: "PATCH",
            body: { stage },
        }),

    addNote: (id: string, body: string) =>
        request<Candidate>(`/api/candidates/${id}/notes`, {
            method: "POST",
            body: { body },
        }),

    getMetrics: () =>
        request<any>("/api/metrics"),
};