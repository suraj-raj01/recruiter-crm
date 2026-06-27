'use client'
import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { getInitials } from "@/services/initials"
import { User } from "@/types/api"
import { Roboto } from "next/font/google"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: "--font-roboto",
});

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [profile, setProfile] = useState<User | null>(null);
    useEffect(() => {
        const user = localStorage.getItem("ats_user");
        if (user) {
            setProfile(JSON.parse(user));
        } else {
            setProfile(null);
        }
    }, [])


    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex sticky z-50 top-0 bg-background shadow-xs h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <section className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-vertical:h-4 data-vertical:self-auto"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block text-sm">
                                        <BreadcrumbLink href="/dashboard">
                                            Dashboard
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem className="text-sm">
                                        <BreadcrumbPage>Dashboard anlytics</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>

                        {/* profile */}
                        {profile && (
                            <div className="flex items-center gap-3 md:mr-6 mr-4">
                                <ModeToggle />
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-semibold text-slate-400">{profile.name}</p>
                                    <p className="text-xs text-slate-400 capitalize">{profile?.role}</p>
                                </div>
                                <Avatar className="md:h-10 md:w-10 h-9 w-9 ring-1 ring-slate-500 shadow-sm">
                                    <AvatarFallback
                                        className="text-white text-sm font-bold"
                                        style={{ backgroundColor: profile?.avatarColor ?? "#3B63F6" }}
                                    >
                                        {getInitials(profile.name)}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        )}
                    </section>
                </header>
                <main className={`${roboto.className} min-h-full flex flex-col`}>
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}