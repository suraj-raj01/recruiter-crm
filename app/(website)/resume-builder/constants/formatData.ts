export const formatMonthYear = (value: string) => {
    if (!value) return "";

    return new Date(`${value}-01`).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
};