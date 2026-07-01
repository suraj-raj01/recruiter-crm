"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { Job } from "@/types/dashboard";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface JobViewModalProps {
    id: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function AddNoteModal({
    id,
    open,
    onOpenChange,
}: JobViewModalProps) {
    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        try {
            setLoading(true)
            if(!note){
                toast.error("Please write some notes")
                return
            }
            await api.addNote(id,note);
            setNote("");
            onOpenChange(false);
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl md:p-10">
                <DialogHeader>
                    <DialogTitle>Add Notes</DialogTitle>
                    <DialogDescription>
                        Write suitable notes for this candidate, who make him eligible for this role.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <form action="" onSubmit={handleSubmit} className='space-y-3'>
                        <Textarea
                            placeholder="Write Note."
                            className="text-sm min-h-30 rounded-sm"
                            onChange={(e) => { setNote(e.target.value) }}
                            // required
                        />
                        <Button type="submit" className="rounded-sm text-sm py-4">
                            {loading?"Adding ...":"+ Add Notes"}
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}