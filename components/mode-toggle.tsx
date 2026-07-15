"use client"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"

export function ModeToggle() {
    return (
        <div className="flex justify-center">
            <AnimatedThemeToggler variant="circle" duration={600} fromCenter 
            className="border p-2 rounded-full cursor-pointer"
            />
        </div>
    )
}
