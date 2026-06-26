import { Stage } from "./constants";

export interface candidates {
    id: string;
    name: string;
    email: string;
    headline: string;
    location: string;
    rating: number;
    stage: Stage;
}

export interface Candidate {
    id: string;
    name: string;
    email: string;
    headline: string;
    location: string;
    rating: number;
    stage: Stage;
    createdAt: string;
    candidates: candidates
    job: {
        id: string;
        title: string;
        company: string;
    };
    notes: {
        id: string;
        body: string;
        createdAt: string;
    }[];
}

