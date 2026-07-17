'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
    ChevronDown,
    LogIn,
    Menu,
    UserPlus,
    X,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { api } from "@/services/api";

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/aboutus",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "Tools",
        children: [
            {
                title: "Resume Builder",
                href: "/resume-builder",
            },
            {
                title: "Resume ATS Checker",
                href: "/resume-ats-checker",
            },
            {
                title: "Job Description Analyzer",
                href: "/job-description-analyzer",
            },
            {
                title: "Background Remover",
                href: "/bg-remover",
            },
            {
                title: "Adjust Image Pixel",
                href: "/bg-remover/adjust-pixel",
            },
            {
                title: "Image Resize / Compress",
                href: "/bg-remover/image-resizer",
            },
        ],
    },
];

export default function Navbar() {
    const router = useRouter();

    const [mobileMenu, setMobileMenu] = useState(false);
    const [toolMenu, setToolMenu] = useState(false);
    const hideTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
        }
        setToolMenu(true);
    };

    const handleMouseLeave = () => {
        hideTimeout.current = setTimeout(() => {
            setToolMenu(false);
        }, 500); // 1 second delay
    };

    useEffect(() => {
        return () => {
            if (hideTimeout.current) {
                clearTimeout(hideTimeout.current);
            }
        };
    }, []);

    const loadCandidates = async () => {
        try {
            await api.awake();
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        loadCandidates();
    }, []);

    return (
        <>
            <nav className="sticky top-2 z-50 max-w-7xl mx-auto w-full h-17 bg-background/50 backdrop-blur-md border shadow-md md:rounded-full md:px-15 px-5 flex items-center justify-between">
                {/* Logo */}
                <div
                    onClick={() => router.push("/")}
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <span className="h-10 w-10 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center">
                        TD
                    </span>

                    <div>
                        <h1 className="font-bold text-lg">TalentDesk</h1>
                        <p className="text-xs -mt-1 hidden lg:block text-muted-foreground">
                            Recruiter CRM Management System
                        </p>
                        <p className="text-xs -mt-1 lg:hidden block text-muted-foreground">
                            Recruiter CRM Management
                        </p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => {
                        if (item.children) {
                            return (
                                <div
                                    key={item.title}
                                    className="relative z-20"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="flex items-center gap-1 font-medium transition hover:text-orange-500">
                                        {item.title}
                                        <ChevronDown size={16} />
                                    </button>

                                    {toolMenu && (
                                        <div
                                            className="absolute top-11.5 border-t-0 -left-30 z-10 -ml-20 min-w-120 rounded-b-lg border bg-background p-3 shadow-xl"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className="grid grid-cols-2">
                                                {item.children.map((tool) => (
                                                    <Link
                                                        key={tool.title}
                                                        href={tool.href}
                                                        className="rounded-lg px-4 py-2 transition hover:bg-muted"
                                                    >
                                                        {tool.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.title}
                                href={item.href!}
                                className="font-medium hover:text-orange-600 transition"
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <ModeToggle />
                    <Button className="lg:block hidden rounded-full px-5 text-sm bg-orange-600 text-white hover:bg-orange-700 shadow-orange-500/20 shadow-xl hover:transition-all duration-300 hover:scale-102 cursor-pointer" onClick={() => router.push("/contact")}>
                        Contact Us
                    </Button>

                    <button
                        className="lg:hidden"
                        onClick={() => setMobileMenu(!mobileMenu)}
                    >
                        {mobileMenu ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className="lg:hidden z-10 h-full pt-25 fixed w-full border rounded-b-md bg-background shadow-lg">
                    <section className="flex flex-col items-start h-full justify-between">
                        <div className="flex flex-col gap-2 px-6 text-3xl w-full">
                            <Link
                                href="#about"
                                className="py-1"
                                onClick={() => setMobileMenu(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/aboutus"
                                className="py-1"
                                onClick={() => setMobileMenu(false)}
                            >
                                About
                            </Link>

                            <Link
                                href="/services"
                                className="py-1"
                                onClick={() => setMobileMenu(false)}
                            >
                                Services
                            </Link>

                            <details className="group">
                                <summary className="cursor-pointer w-full py-1 list-none flex items-center justify-between">
                                    Tools
                                    <ChevronDown
                                        size={25}
                                        className="group-open:rotate-180 rounded-sm px-1 h-8 w-8 mr-50 bg-card transition"
                                    />
                                </summary>

                                <div className="ml-4 mt-2 bg-card w-full p-3 rounded-lg flex flex-col text-2xl">
                                    <Link
                                        href="/resume-builder"
                                        className="py-1"
                                        onClick={() => setMobileMenu(false)}
                                    >
                                        Resume Builder
                                    </Link>

                                    <Link
                                        href="/resume-ats-checker"
                                        className="py-1"
                                        onClick={() => setMobileMenu(false)}
                                    >
                                        Resume ATS Checker
                                    </Link>

                                    <Link
                                        href="/job-description-analyzer"
                                        className="py-1"
                                        onClick={() => setMobileMenu(false)}
                                    >
                                        Job Description Analyzer
                                    </Link>
                                    <Link
                                        href="/bg-remover"
                                        className="py-1"
                                        onClick={() => setMobileMenu(false)}
                                    >
                                        Background Remover
                                    </Link>
                                    <Link
                                        href="/bg-remover/adjust-pixel"
                                        className="py-1"
                                        onClick={() => setMobileMenu(false)}
                                    >
                                        Adjust Image Pixel
                                    </Link>
                                    <Link
                                        href="/bg-remover/image-resizer"
                                        className="py-1"
                                        onClick={() => setMobileMenu(false)}
                                    >
                                        Image Resize / Compress
                                    </Link>
                                </div>
                            </details>

                            <Link
                                href="/contact"
                                className="py-1"
                                onClick={() => setMobileMenu(false)}
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="bg-accent/20 px-6 py-5 w-full flex items-center justify-between gap-3">
                            <Link
                                href="/auth/login"
                                className="flex items-center justify-center gap-2 rounded-md bg-orange-600 md:px-8 px-3 py-3 text-white w-full lg:w-fit shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl text-lg"
                            >
                                <LogIn size={16} />
                                Login
                            </Link>
                            <Link
                                href="/auth/login"
                                className="flex items-center justify-center gap-2 rounded-md dark:border-zinc-700 bg-accent dark:text-white dark:hover:bg-zinc-800 md:px-8 px-3 py-3 text-accent-foreground border w-full lg:w-fit shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl text-lg"
                            >
                                <UserPlus size={16} />
                                Get Started
                            </Link>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}