"use client";

import { Upload, Image as ImageIcon, Lock, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

export default function AdjustPixel() {
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
                    <Badge className="bg-background text-orange-700 rounded-full border border-orange-600/80 px-5 py-4 text-sm font-bold ">
                        🚀 Image Optimization
                    </Badge>
                    <h1 className="text-4xl mt-4 font-bold lg:text-5xl">
                        Adjust Image Pixels
                    </h1>

                    <p className="mt-3 text-muted-foreground">
                        Resize your images by selecting a preset or entering custom dimensions.
                    </p>
                </div>

                <Card className="mt-12 p-0 overflow-hidden rounded-2xl border-0 shadow-xl">
                    <div className="grid lg:grid-cols-2">
                        {/* Upload Section */}
                        <div className="border-b bg-card p-8 lg:border-b-0 lg:border-r">
                            <h2 className="mb-6 text-xl font-semibold">
                                Upload Image
                            </h2>
                            <Card className="border-dashed border-2 rounded-lg">
                                <CardContent className="flex h-105 flex-col items-center justify-center p-8">

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
                                        <label htmlFor="image-upload" className="px-4 text-white cursor-pointer font-bold">
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

                        {/* Controls */}
                        <div className="bg-card p-8">
                            <h2 className="mb-6 text-xl font-semibold">
                                Resize Settings
                            </h2>

                            <div className="space-y-6">
                                {/* Preset */}
                                <div>
                                    <Label>Preset Size</Label>

                                    <Select>
                                        <SelectTrigger className="mt-2">
                                            <SelectValue placeholder="Select preset" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="1080x1080">
                                                Instagram Post (1080 × 1080)
                                            </SelectItem>

                                            <SelectItem value="1920x1080">
                                                Full HD (1920 × 1080)
                                            </SelectItem>

                                            <SelectItem value="1280x720">
                                                HD (1280 × 720)
                                            </SelectItem>

                                            <SelectItem value="800x800">
                                                800 × 800
                                            </SelectItem>

                                            <SelectItem value="custom">
                                                Custom Size
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Manual Width/Height */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label>Width (px)</Label>
                                        <Input
                                            type="number"
                                            placeholder="1920"
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label>Height (px)</Label>
                                        <Input
                                            type="number"
                                            placeholder="1080"
                                            className="mt-2"
                                        />
                                    </div>
                                </div>

                                {/* Aspect Ratio */}
                                <div className="flex items-center justify-between rounded-xl border p-4">
                                    <div className="flex items-center gap-3">
                                        <Lock className="h-5 w-5 text-orange-600" />

                                        <div>
                                            <p className="font-medium">
                                                Lock Aspect Ratio
                                            </p>

                                            <p className="text-sm text-muted-foreground">
                                                Keep original proportions
                                            </p>
                                        </div>
                                    </div>

                                    <Switch defaultChecked={false} />
                                </div>

                                {/* Preview */}
                                <div>
                                    <Label>Preview</Label>

                                    <div className="mt-2 flex h-52 items-center justify-center rounded-lg border bg-muted/40">
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

                                <Button
                                    className="h-12 w-full text-white bg-orange-600 text-base hover:bg-orange-700"
                                >
                                    <Wand2 className="mr-2 h-5 w-5" />
                                    Adjust Image
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}