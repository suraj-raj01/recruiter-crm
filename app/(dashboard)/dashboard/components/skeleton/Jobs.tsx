import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function JobsSkeleton() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5].map((item) => {
                return (
                    <Card className="w-full grid grid-cols-1 rounded-sm gap-2 px-3 md:py-8 py-4" key={item}>
                        <div className='flex items-center justify-between'>
                            <div className="flex flex-col gap-1">
                                <Skeleton className="h-5 w-15 rounded-sm" />
                                <Skeleton className="h-3 w-30 rounded-sm" />
                            </div>
                            <Skeleton className="h-5 w-15 rounded-sm" />
                        </div>
                        <div className='grid grid-cols-1 gap-2 bg-card rounded-sm shadow-sm'>
                            <Skeleton className='w-full h-4 rounded-full' />
                            <Skeleton className='w-50 h-4 rounded-full' />
                            <Skeleton className='w-40 h-4 rounded-full' />
                        </div>
                        <div className='grid grid-cols-5 gap-2 bg-card rounded-sm shadow-sm'>
                            <Skeleton className='w-11 h-5 rounded-xs' />
                            <Skeleton className='w-11 h-5 rounded-xs' />
                            <Skeleton className='w-11 h-5 rounded-xs' />
                            <Skeleton className='w-11 h-5 rounded-xs' />
                            <Skeleton className='w-11 h-5 rounded-xs' />
                        </div>
                    </Card>
                )
            })}
        </section>
    )
}