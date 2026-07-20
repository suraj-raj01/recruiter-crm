"use client";

import { ImageIcon, Upload, Download, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function CompressImage() {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0] || null;
    
            if (!file) return;
            setSelectedFile(file);
            // console.log(file,'file')
            const url = URL.createObjectURL(file);
            setPreview(url);
        };
    
        useEffect(() => {
            return () => {
                if (preview) URL.revokeObjectURL(preview);
            };
        }, [preview]);

    return (
        <section className="w-full">
            <div className="mx-auto max-w-6xl px-3">
                <div className="text-center">
                    <Badge className="bg-background text-orange-700 rounded-full border border-orange-600/80 px-5 text-sm py-4 font-bold ">
                       🚀 Image Optimization
                    </Badge>

                    <h1 className="mt-3 text-4xl font-bold lg:text-5xl">
                        Compress Image Size
                    </h1>

                    <p className="mt-3 text-muted-foreground">
                        Reduce image file size without noticeable quality loss.
                    </p>
                </div>

                <Card className="mt-12 p-0 bg-card overflow-hidden rounded-2xl shadow-xl">
                    <div className="grid lg:grid-cols-2">
                        {/* Upload */}
                        <div className="border-b bg-card p-5 lg:p-8 lg:border-b-0 lg:border-r">
                            <h2 className="mb-6 text-xl font-semibold">
                                Upload Image
                            </h2>

                            <Card className="border-dashed border-2 rounded-lg">
                                <CardContent className="flex lg:h-105 flex-col items-center justify-center">

                                    <div className="rounded-full bg-orange-100 p-5 dark:bg-orange-500/10">
                                        <Upload className="h-10 w-10 text-orange-600" />
                                    </div>

                                    <h2 className="mt-6 text-2xl font-bold">
                                        Upload Image
                                    </h2>

                                    <p className="mt-3 text-center text-muted-foreground">
                                        Drag & drop your image here
                                        <br />
                                        or click below to browse.
                                    </p>

                                    <Input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />

                                    <Button
                                        asChild
                                        className="mt-8 rounded-full bg-orange-600 hover:bg-orange-700"
                                    >
                                        <label htmlFor="image-upload" className="px-4 text-white cursor-pointer">
                                            <Upload className="mr-1 h-4 w-4" />
                                            Choose Image
                                        </label>
                                    </Button>

                                    <p className="mt-5 text-xs text-muted-foreground">
                                        PNG, JPG, JPEG • Max 10MB
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Settings */}
                        <div className="bg-card p-5 lg:p-8">
                            <h2 className="mb-2 text-xl font-semibold">
                                Compression Settings
                            </h2>

                            <div className="space-y-8">
                                {/* Preview */}
                                <div>
                                    <p className="mb-3 font-medium">
                                        Preview
                                    </p>

                                    <div className="flex h-56 items-center justify-center rounded-lg border bg-muted/40">
                                        {preview ? (
                                            <img
                                                src={preview}
                                                alt="Preview"
                                                className="h-full w-full object-contain"
                                            />) : (
                                            <ImageIcon className="h-14 w-14 text-muted-foreground" />
                                        )}
                                    </div>
                                </div>

                                {/* Compression */}
                                <div>
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="font-medium">
                                            Compression Level
                                        </span>

                                        <span className="text-orange-600 font-semibold">
                                            70%
                                        </span>
                                    </div>

                                    <Slider
                                        defaultValue={[70]}
                                        max={100}
                                        step={1}
                                    />

                                    <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                                        <span>High Quality</span>
                                        <span>Small File</span>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-xl border p-5">
                                        <p className="text-sm text-muted-foreground">
                                            Original Size
                                        </p>

                                        <h3 className="mt-2 text-2xl font-bold">
                                            3.8 MB
                                        </h3>
                                    </div>

                                    <div className="rounded-xl border p-5">
                                        <p className="text-sm text-muted-foreground">
                                            Estimated Size
                                        </p>

                                        <h3 className="mt-2 text-2xl font-bold text-green-600">
                                            1.1 MB
                                        </h3>
                                    </div>
                                </div>

                                {/* Savings */}
                                <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/30">
                                    <div className="flex items-center gap-2">
                                        <Zap className="h-5 w-5 text-green-600" />

                                        <p className="font-medium text-green-700 dark:text-green-400">
                                            Estimated savings: 71%
                                        </p>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4">
                                    <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white cursor-pointer">
                                        Compress Image
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="flex-1"
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        Download
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}