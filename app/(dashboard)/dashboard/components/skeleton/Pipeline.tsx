import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PipelineSkeleton(){
    return(
        <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[1,2,3,4,5].map((item)=>{
                return(
                    <Card className="w-full grid grid-cols-1 rounded-sm gap-2 p-3" key={item}>
                        <div className='flex items-center justify-between'>
                            <Skeleton className="h-5 w-20 rounded-sm"/>
                            <Skeleton className="h-5 w-5 rounded-full"/>
                        </div>
                        <div className='grid grid-cols-1 gap-2 bg-card rounded-sm px-2 py-5 shadow-sm border'>
                            <Skeleton className='w-full h-6 rounded-full'/>
                            <Skeleton className='w-50 h-4 rounded-full'/>
                            <Skeleton className='w-40 h-4 rounded-full'/>
                            <Skeleton className='w-full h-4 rounded-full'/>
                        </div>
                            <hr />
                            <Skeleton className='w-full h-5 rounded-md'/>
                    </Card>
                )
            })}
        </section>
    )
}