"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  BuildingsIcon,
  ChartBarIcon,
  BriefcaseIcon,
  UserListIcon,
} from "@phosphor-icons/react";
import { TrendingUpDown } from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "Jane Doe",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "RECRUITER CRM",
      logo: <BuildingsIcon fill="green"/>,
      plan: "Startup",
    },
    {
      name: "COMPANY CRM",
      logo: <BuildingsIcon fill="blue"/>,
      plan: "Enterprise",
    },
    {
      name: "Evil Corp.",
      logo: <BuildingsIcon fill="red"/>,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Analytics",
      url: "#",
      icon: <ChartBarIcon />,
      isActive: true,
      items: [
        {
          title: "Analytics",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Pipelines",
      url: "#",
      icon: <TrendingUpDown />,
      items: [
        {
          title: "Pipelines",
          url: "/dashboard/pipelines",
        },
      ],
    },
    {
      title: "Jobs",
      url: "#",
      icon: <BriefcaseIcon />,
      items: [
        {
          title: "All Jobs",
          url: "/dashboard/jobs",
        },
        {
          title: "Create Job",
          url: "/dashboard/jobs/create",
        },
      ],
    },
    {
      title: "Candidates",
      url: "#",
      icon: <UserListIcon />,
      items: [
        {
          title: "All Candidates",
          url: "/dashboard/candidate",
        },
        {
          title: "Create Candidate",
          url: "/dashboard/candidate/create",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
