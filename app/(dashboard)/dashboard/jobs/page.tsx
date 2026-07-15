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
import JobViewModal from "../components/JobViewModel";
// import { useRouter } from "next/navigation";

export default function Jobs() {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [selectedId, setSelectedId] = useState("");
        const [open, setOpen] = useState(false);

    const loadJobs = async () => {
        try {
            setLoading(true);
            const jobs = await api.getJobs();
            setJobs(jobs?.jobs ?? []);
            // console.log(jobs);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        const token = localStorage.getItem("ats_token");
        if (token) loadJobs();
        else setLoading(false);
    }, []);

    const handleSearch = (query: string) => {
        setSearchQuery(query)
    }

    const jobDelete = (id: string) => {
        toast("Delete Candidate?", {
            description: "This action cannot be undone.",
            action: {
                label: "Delete",
                onClick: async () => {
                    try {
                        await api.deleteCandidate(id);
                        await loadJobs();
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
            accessorKey: 'title',
            header: "Title",
        },
        {
            accessorKey: 'status',
            header: "Status",
        },
        {
            accessorKey: 'priority',
            header: "Priority",
        },
        {
            accessorKey: 'hiringManager',
            header: "Hiring Manager",
        },
        {
            accessorKey: 'location',
            header: "Location",
        },
        {
            accessorKey: 'department',
            header: "Department",
        },
        {
            accessorKey: 'salaryRange',
            header: "Salary Range",
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
                            <DropdownMenuItem className="cursor-pointer" onClick={() => {
                                setSelectedId(candidate.id);
                                setOpen(true);
                            }}>
                                <Eye className="mr-2 h-4 w-4" />
                                View
                            </DropdownMenuItem>
                            <DropdownMenuItem >
                                <Link href={`/dashboard/jobs/${candidate.id}`} className="flex items-center gap-3">
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => { jobDelete(candidate.id) }}>
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
                buttontitle="Create Jobs"
                link="/dashboard/jobs/create"
            />
            <JobViewModal
                id={selectedId}
                open={open}
                onOpenChange={setOpen}
            />

            <DataTable
                columns={columns}
                data={jobs}
                pageCount={1}
                currentPage={1}
                onPageChange={()=>{()=>{}}}
                onSearch={handleSearch}
                isLoading={loading}
            />
        </div>
    )
}