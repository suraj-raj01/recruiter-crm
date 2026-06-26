import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function HeaderCard({ title, description, buttontitle, link }
    : { title: string, description: string, buttontitle: string, link: string }) {
    return (
        <Card className="mb-5 rounded-sm">
            <CardContent className="flex items-center text-sm justify-between">
                <div>
                    <h1 className="text-lg font-bold">{title}</h1>
                    <p>{description}</p>
                </div>
                <Button size={"lg"}>
                    <Link href={link} className="text-sm">{buttontitle}</Link>
                </Button>
            </CardContent>
        </Card>
    )
}