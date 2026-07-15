"use client"

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { setAuthToken } from "@/services/api"
import { getInitials } from "@/services/initials"
import { User } from "@/types/api"
import { CaretUpDownIcon, SparkleIcon, CheckCircleIcon, CreditCardIcon, BellIcon, SignOutIcon } from "@phosphor-icons/react"
import { Monitor } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()
  const [profile, setProfile] = useState<User | null>(null);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("ats_user");
    if (user) {
      setProfile(JSON.parse(user));
    } else {
      setProfile(null);
    }
  }, [])

  const router = useRouter();
  const logout = () => {
    toast("Logout?", {
      description: "Are you sure you want to logout?",
      action: {
        label: "Logout",
        onClick: () => {
          setAuthToken("");
          localStorage.removeItem("ats_user");
          localStorage.removeItem("ats_token");
          router.push("/");
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => { },
      },
    });
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-10 w-10 ring-1 ring-slate-500 shadow-sm">
                <AvatarFallback
                  className="text-white text-sm font-bold"
                  style={{ backgroundColor: profile?.avatarColor ?? "#3B63F6" }}
                >
                  {getInitials(profile?.name || "JD")}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{profile?.name}</span>
                <span className="truncate text-xs">{profile?.email}</span>
              </div>
              <CaretUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-fit"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-10 w-10 ring-2 ring-white shadow-sm">
                  <AvatarFallback
                    className="text-white text-sm font-bold"
                    style={{ backgroundColor: profile?.avatarColor ?? "#3B63F6" }}
                  >
                    {getInitials(profile?.name || "JD")}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{profile?.name}</span>
                  <span className="truncate text-xs">{profile?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <SparkleIcon
                />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <Monitor
                />
                <Link href='/'> Visit Site</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <CreditCardIcon
                />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <BellIcon
                />
                <Link href='/dashboard'> Notifications</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout} variant="destructive" className="font-bold cursor-pointer">
              <SignOutIcon
              />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
