export const STAGE_BADGE: Record<string, string> = {
    Applied: "bg-blue-50   text-blue-700   border border-blue-100",
    Screen: "bg-amber-50  text-amber-700  border border-amber-100",
    Interview: "bg-violet-50 text-violet-700 border border-violet-100",
    Offer: "bg-orange-50 text-orange-700 border border-orange-100",
    Hired: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    Rejected: "bg-red-50    text-red-700    border border-red-100",
};

export const STAGES = [
    "Applied",
    "Screen",
    "Interview",
    "Offer",
    "Hired",
    "Rejected",
] as const;

export type Stage = (typeof STAGES)[number];

export const STAGE_BAR: Record<string, string> = {
    Applied: "bg-blue-500",
    Screen: "bg-amber-500",
    Interview: "bg-violet-500",
    Offer: "bg-orange-500",
    Hired: "bg-emerald-500",
    Rejected: "bg-red-400",
};

export const STAGE_DOT: Record<string, string> = {
    Applied: "bg-blue-500",
    Screen: "bg-amber-500",
    Interview: "bg-violet-500",
    Offer: "bg-orange-500",
    Hired: "bg-emerald-500",
    Rejected: "bg-red-400",
};

export const PRIORITY_BADGE: Record<string, string> = {
    High: "bg-red-50    text-red-700    border border-red-100",
    Medium: "bg-amber-50  text-amber-700  border border-amber-100",
    Low: "bg-emerald-50 text-emerald-700 border border-emerald-100",
};

export const SOURCE_COLOR: Record<string, string> = {
    LinkedIn: "bg-blue-500",
    Naukri: "bg-orange-500",
    Indeed: "bg-violet-500",
    Referral: "bg-emerald-500",
    Portfolio: "bg-rose-500",
};

