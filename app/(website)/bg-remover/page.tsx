"use client";

import {
    Download,
    Eraser,
    ImageIcon,
    Sparkles,
    Upload,
    WandSparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function BgRemover() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");
    const [outputImage, setOutputImage] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setSelectedFile(file);

        const url = URL.createObjectURL(file);
        setPreview(url);

        setOutputImage("");
    };

    const removeBackground = async () => {
        if (!selectedFile) return;

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("image", selectedFile);

            const response = await fetch("/api/remove-background", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            setOutputImage(data.image);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    return (
        <section className="min-h-screen w-full py-20">
            <div className="mx-auto max-w-7xl px-4">

                {/* Hero */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/20 px-4 py-2 text-sm font-semibold text-orange-600 dark:bg-orange-600/20">
                        <Sparkles size={16} />
                        AI Background Remover
                    </div>

                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                        Remove Image Background
                        <span className="block text-orange-600">
                            Instantly with AI
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Upload any image and remove its background in seconds.
                        Perfect for product photos, profile pictures, logos,
                        resumes, and social media.
                    </p>
                </div>

                {/* Main Tool */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">

                    {/* Upload */}
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
                                <label htmlFor="image-upload" className="px-4 cursor-pointer">
                                    <Upload className="mr-1 h-4 w-4" />
                                    Choose Image
                                </label>
                            </Button>

                            <p className="mt-5 text-xs text-muted-foreground">
                                PNG, JPG, JPEG • Max 10MB
                            </p>
                        </CardContent>
                    </Card>

                    {/* Preview */}
                    <Card className='rounded-lg'>
                        <CardContent className="flex h-105 rounded-lg flex-col items-center justify-center">

                            <div className="flex h-64 w-64 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed">

                                {outputImage ? (
                                    <img
                                        src={outputImage}
                                        alt="Output"
                                        className="h-full w-full object-contain"
                                    />
                                ) : preview ? (
                                    <img
                                        src={preview}
                                        alt="Preview"
                                            className="h-full w-full object-contain"
                                    />
                                ) : (
                                    <ImageIcon
                                        size={70}
                                        className="text-muted-foreground"
                                    />
                                )}

                            </div>

                            <h3 className="mt-6 text-xl font-semibold">
                                Preview
                            </h3>

                            <p className="mt-2 text-center text-muted-foreground">
                                Your processed image will appear here.
                            </p>

                            <div className="mt-8 flex gap-3">
                                <Button
                                    onClick={removeBackground}
                                    disabled={!selectedFile || loading}
                                    className="rounded-full bg-orange-600 hover:bg-orange-700"
                                >
                                    <Eraser className="mr-2 h-4 w-4" />
                                    {loading ? "Removing..." : "Remove Background"}
                                </Button>

                                <Button
                                    variant="outline"
                                    disabled={!selectedFile || loading}
                                    className="rounded-full px-5"
                                >
                                    <Download className="mr-1 h-4 w-4 px" />
                                    Download
                                </Button>

                            </div>

                        </CardContent>
                    </Card>

                </div>

                {/* Features */}

                <div className="mt-20 grid gap-6 md:grid-cols-3">

                    <Card className="rounded-lg">
                        <CardContent className="p-8 text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/10">
                                <WandSparkles className="text-orange-600" />
                            </div>

                            <h3 className="mt-5 text-xl font-bold">
                                AI Powered
                            </h3>

                            <p className="mt-3 text-muted-foreground">
                                Advanced AI detects the subject and removes the
                                background automatically.
                            </p>

                        </CardContent>
                    </Card>

                    <Card className="rounded-lg">
                        <CardContent className="p-8 text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/10">
                                <Sparkles className="text-orange-600" />
                            </div>

                            <h3 className="mt-5 text-xl font-bold">
                                HD Quality
                            </h3>

                            <p className="mt-3 text-muted-foreground">
                                Preserve image quality while removing backgrounds
                                with pixel-perfect precision.
                            </p>

                        </CardContent>
                    </Card>

                    <Card className="rounded-lg">
                        <CardContent className="p-8 text-center">

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/10">
                                <Download className="text-orange-600" />
                            </div>

                            <h3 className="mt-5 text-xl font-bold">
                                Instant Download
                            </h3>

                            <p className="mt-3 text-muted-foreground">
                                Download transparent PNG images instantly after
                                processing.
                            </p>

                        </CardContent>
                    </Card>

                </div>

            </div>
        </section>
    );
}