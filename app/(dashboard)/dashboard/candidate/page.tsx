'use client'
import { api } from "@/services/api";
import { useEffect, useState } from "react"
import { HeaderCard } from "../components/HeaderCard";
import { DataTable } from "@/components/ui/data-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";
import { Candidate } from "@/types/dashboard";
import { ColumnDef } from "@tanstack/react-table";
import { STAGE_BADGE, STAGE_DOT } from "@/services/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import Link from "next/link";
import CandidateViewModal from "../components/CandidateViewModel";
// import { useRouter } from "next/navigation";

export default function Candidates() {
    const [candidates, setCandidates] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [selectedId, setSelectedId] = useState("");
    const [open, setOpen] = useState(false);

    const loadCandidates = async () => {
        try {
            setLoading(true);
            const query: Record<string, number> = {
                page,
                limit: 6
            }
            const candidates = await api.getCandidates(query);
            setCandidates(candidates?.candidates ?? []);
            setPageCount(candidates?.totalPages ?? 1);
            setPage(candidates?.page ?? 1)
            console.log(candidates);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        const token = localStorage.getItem("ats_token");
        if (token) loadCandidates();
        else setLoading(false);
    }, [page, searchQuery]);

    const handleSearch = (query: string) => {
        setSearchQuery(query)
    }

    function StageBadge({ stage }: { stage: string }) {
        return (
            <span
                className={`inline-flex min-w-20 py-1 items-center gap-1 text-xs px-2 rounded-full font-medium ${STAGE_BADGE[stage] ?? "bg-slate-50 text-slate-600 border border-slate-100"
                    }`}
            >
                <span className={`w-1.5 h-1.5 rounded-full ${STAGE_DOT[stage] ?? "bg-slate-400"}`} />
                {stage}
            </span>
        );
    }

    const candidateDelete = (id: string) => {
        toast("Delete Candidate?", {
            description: "This action cannot be undone.",
            action: {
                label: "Delete",
                onClick: async () => {
                    try {
                        await api.deleteCandidate(id);
                        await loadCandidates();
                        toast.success("Candidate deleted successfully");
                    } catch (error) {
                        toast.error("Failed to delete candidate");
                    }
                },
            },
            cancel: {
                label: "Cancel",
                onClick: () => { },
            },
            duration: 10000, // Optional: keep toast visible for 10 seconds
        });
    };


    const columns: ColumnDef<Candidate>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: true,
            enableHiding: true,
        },
        {
            accessorKey: 'name',
            header: "Name",
            cell: ({ row }) => {
                return (
                    <div className={`cursor-pointer hover:underline`} onClick={() => {
                        setSelectedId(row.original.id);
                        setOpen(true);
                    }}>
                        {row.original.name}
                    </div>
                )
            }
        },
        {
            accessorKey: 'email',
            header: "Email",
        },
        {
            accessorKey: 'phone',
            header: "Phone",
        },
        {
            accessorKey: 'location',
            header: "Location",
        },
        {
            accessorKey: 'stage',
            header: "Stage",
            cell: ({ row }) => {
                return (
                    <div className={``}>
                        <StageBadge stage={row.original.stage} />
                    </div>
                )
            }
        },
        {
            accessorKey: 'source',
            header: "Source",
        },
        {
            accessorKey: 'job',
            header: "Job title",
            cell: ({ row }) => {
                return (
                    <div>
                        {row.original.job.title}
                    </div>
                )
            }
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const candidate = row.original
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => {
                                setSelectedId(candidate.id);
                                setOpen(true);
                            }}>
                                <Eye className="mr-2 h-4 w-4" />
                                View
                            </DropdownMenuItem>
                            <DropdownMenuItem >
                                <Link href={`/dashboard/candidate/${candidate.id}`} className="flex items-center gap-3">
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => { candidateDelete(candidate.id) }}>
                                <Trash className="mr-2 h-4 w-4" />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    return (
        <div className="p-5">
            <HeaderCard
                title="Candidates"
                description="Manage all candidates and track their hiring pipeline."
                buttontitle="Create Candidate"
                link="/dashboard/candidate/create"
            />
            <CandidateViewModal
                id={selectedId}
                open={open}
                onOpenChange={setOpen}
            />

            <DataTable
                columns={columns}
                data={candidates}
                pageCount={pageCount}
                currentPage={page}
                onPageChange={setPage}
                onSearch={handleSearch}
                isLoading={loading}
            />
        </div>
    )
}