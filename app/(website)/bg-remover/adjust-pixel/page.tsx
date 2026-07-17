'use client'

import { useState } from "react"
import AdjustPixel from "../components/AdjustPixel"

export default function PixelAduster() {
    const [pro, setPro] = useState(true)
    return (
        <section className='py-40 mx-auto w-full -mt-20'>
            {pro ? (
                <AdjustPixel />
            ) : (
                <div className='blur-xs'>
                    <AdjustPixel />
                </div>
            )}
        </section>
    )
}