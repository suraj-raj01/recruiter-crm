'use client'

import { useState } from "react"
import CompressImage from "../components/CompressImage"

export default function ImageResizer() {
    const [pro, setPro] = useState(true)
    return (
        <section className='py-40 -mt-20 mx-auto w-full'>
            {pro ? (
                <CompressImage />
            ) : (
                <div className='blur-xs'>
                    <CompressImage />
                </div>
            )}
        </section>
    )
}