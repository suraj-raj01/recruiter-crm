"use client";

import {
    Download,
    Eraser,
    ImageIcon,
    Loader2,
    Sparkles,
    Upload,
    WandSparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export default function BgRemover() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");
    const [outputImage, setOutputImage] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;

        if (!file) return;
        setSelectedFile(file);
        // console.log(file,'file')
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

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/remove-background`, {
                method: "POST",
                body: formData,
            })
            const data = await response.json();
            // console.log(data.image,'image')
            setOutputImage(data.image);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!outputImage) return;
        const timer = setTimeout(() => {
            setOutputImage("");
            setPreview("");
        }, 5000 * 24);
        return () => clearTimeout(timer);
    }, [outputImage]);

    const downloadImage = async () => {
        if (!outputImage) return;

        try {
            const response = await fetch(outputImage);
            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = `bg-removed-${Date.now()}.png`;

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    return (
        <section className="min-h-screen w-full py-20">
            <div className="w-full">

                {/* Hero */}
                <div className="text-center py-15 mx-auto max-w-6xl px-3 flex flex-col relative w-full items-center min-h-110 overflow-hidden">
                    <InteractiveGridPattern
                        opacity={0.5}
                        className={cn(
                            "absolute inset-0 lg:mask-[radial-gradient(450px_circle_at_center,white,transparent)] mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
                        )}
                        width={30}
                        height={30}
                        squares={[80, 80]}
                        squaresClassName="hover:fill-orange-600"
                    />
                    <div className="inline-flex relative border border-orange-600/80 items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-semibold text-orange-600 ">
                        <Sparkles size={16} />
                        AI Background Remover
                    </div>

                    <h1 className="mt-6 relative text-4xl font-extrabold tracking-tight md:text-6xl bg-linear-to-r from-orange-600 via-indigo-500 to-orange-600 bg-clip-text text-transparent">
                        Remove Instantly Background
                        <span className="block text-orange-600">
                            Image with AI
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                        Upload any image and remove its background in seconds.
                        Perfect for product photos, profile pictures, logos,
                        resumes, and social media.
                    </p>
                </div>

                {/* Main Tool */}
                <div className="mt-16 grid lg:grid-cols-2 mx-auto max-w-6xl px-3">

                    {/* Upload */}
                    <Card className="border-dashed border-2 lg:rounded-l-lg rounded-t-lg lg:rounded-tr-xs">
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

                    {/* Preview */}
                    <Card className='lg:rounded-r-lg rounded-b-lg lg:rounded-bl-xs'>
                        <CardContent className="flex h-105 rounded-lg flex-col items-center justify-center">

                            <div className="flex h-64 w-60 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed">
                                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-muted">
                                    {loading ? (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
                                            <Loader2 className="h-12 w-12 animate-spin text-primary" />
                                            <p className="mt-4 text-sm font-medium text-muted-foreground">
                                                Removing background...
                                            </p>
                                        </div>
                                    ) : outputImage ? (
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
                            </div>

                            <h3 className="mt-6 text-xl font-semibold">
                                Preview
                            </h3>
                            {outputImage ? (
                                <p className="mt-1 text-center text-muted-foreground">Your output image will be <span className='text-red-500 font-bold'>deleted</span> in 2 minutes</p>
                            ) : (
                                <p className="mt-1 text-center text-muted-foreground">
                                    Your processed image will appear here.
                                </p>
                            )}

                            <div className="mt-3 flex gap-3">
                                {selectedFile && (
                                    <Button
                                        onClick={removeBackground}
                                        disabled={!selectedFile || loading || !!outputImage}
                                        className="rounded-full bg-orange-600 text-white hover:bg-orange-700 cursor-pointer"
                                    >
                                        <Eraser className="mr-2 h-4 w-4" />
                                        {loading ? "Removing..." : "Remove Background"}
                                    </Button>
                                )}

                                {outputImage ? (
                                    <Button
                                        variant="outline"
                                        disabled={!selectedFile || loading}
                                        className="rounded-full px-5 cursor-pointer"
                                        onClick={downloadImage}
                                    >
                                        <Download className="mr-1 h-4 w-4 px" />
                                        Download
                                    </Button>
                                ) : ("")}

                            </div>

                        </CardContent>
                    </Card>

                </div>

                {/* Features */}
                <div className="mt-20 grid gap-6 md:grid-cols-3 mx-auto max-w-6xl px-3">
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