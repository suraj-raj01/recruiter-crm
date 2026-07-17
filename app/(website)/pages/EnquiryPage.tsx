'use client'
import { useState } from "react";
import {
    Check,
    ArrowRight,
    ChartLine,
    Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { api } from "../../../services/api";

const features = [
    {
        title: "24h response",
        description: "Personal reply, not a form auto-responder.",
    },
    {
        title: "Free scoping call",
        description: "20-minute intro to align on fit.",
    },
    {
        title: "Fixed-scope pricing",
        description: "No hourly billing surprises.",
    },
];

export default function EnqureSection() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const [step, setStep] = useState(1);

    const submitForm = async () => {
       try {
         const response = await api.createEnquiry(formData)
         console.log(response,'data')
         return response;
       } catch (error) {
            console.log(error)
       }
    };

    const nextStep = async () => {
        if (!formData.name || !formData.email || !formData.message) {
            toast.warning("Please fill all required fields.");
            return;
        }
        try {
            setLoading(true);
            const success = await submitForm();
            if (!success) {
                toast.error("Failed to submit.");
                return;
            }
            toast.success("Details submitted.");
            setStep(2);
        } catch(error:any){
            console.log(error);
            toast.error(error?.response.message)
        } finally {
            setLoading(false);
        }
    };

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [target.name]: target.value,
        }));
    };

    const navigate = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true)
            toast.success("Form Submitted Successfully ✅")
            navigate.push("/")
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20">
            <div className="lg:max-w-6xl w-full mx-auto px-3">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left */}

                    <div className="max-w-xl">
                        <div className="mb-3 flex items-center gap-2 uppercase tracking-[4px] text-sm font-semibold text-orange-600">
                            <ChartLine className="h-4 w-4" />
                            Enquiry
                        </div>

                        <h2 className="text-3xl font-black lg:leading-12 text-blue lg:text-5xl">
                            Tell me what you're
                            <br />
                            Looking for.
                        </h2>

                        <p className="mt-4 text-lg lg:text-xl text-zinc-500">
                            Four fields, no back-and-forth. I reply within one business day.
                        </p>

                        <div className="mt-12 space-y-5">
                            {features.map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="flex h-8 w-8 p-2 items-center justify-center rounded-full bg-orange-600/30">
                                        <Check className="h-5 w-5 text-[#E05A10]" />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-blue">
                                            {item.title}
                                        </h4>

                                        <p className="text-md text-zinc-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}

                    <Card className="rounded-lg border bg-card py-10 px-3 lg:p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="lg:space-y-5 space-y-2">
                            {/* ---------------- STEP 1 ---------------- */}

                            {step === 1 && (
                                <>
                                    {/* Name */}

                                    <div>
                                        <label className="lg:mb-2 mb-1 block text-sm font-bold uppercase">
                                            Name *
                                        </label>

                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Jane Doe"
                                            className='py-5'
                                        />
                                    </div>
                                    {/* Email */}

                                    <div>
                                        <label className="lg:mb-2 mb-1 block text-sm font-bold uppercase">
                                            Work Email *
                                        </label>

                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="jane@brand.com"
                                            className='py-5'
                                        />
                                    </div>

                                    {/* Company */}

                                    <div>
                                        <label className="lg:mb-2 mb-1 block text-sm font-bold uppercase">
                                            Company *
                                        </label>

                                        <Input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className='py-5'
                                            placeholder="www.abc.com"
                                        />
                                    </div>

                                    {/* Message */}

                                    <div>
                                        <label className="lg:mb-2 mb-1 block text-sm font-bold uppercase">
                                            Message *
                                        </label>

                                        <Textarea
                                            rows={6}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className='py-5'
                                            placeholder="Write your message.."
                                        />
                                    </div>

                                    <Button
                                        type="button"
                                        onClick={nextStep}
                                        className="w-full bg-orange-600 hover:bg-orange-600/90 shadow-orange-500/20 shadow-xl hover:transition-all duration-300 hover:scale-102 cursor-pointer text-sm text-white font-bold rounded-full h-11 mt-2"
                                    >
                                        {loading ? "Submitting..." : "Submit"}
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </>
                            )}

                            {/* ---------------- STEP 2 ---------------- */}

                            {step === 2 && (
                                <>
                                    <Card className="bg-muted/30 p-4">
                                        <h4 className="font-semibold mb-3">
                                            Review Your Details
                                        </h4>

                                        <div className="space-y-2 text-sm">
                                            <p>
                                                <strong>Name:</strong> {formData.name}
                                            </p>

                                            <p>
                                                <strong>Email:</strong> {formData.email}
                                            </p>

                                            <p>
                                                <strong>Company:</strong> {formData.company}
                                            </p>

                                            <p>
                                                <strong>Message:</strong>{" "}
                                                {formData.message}
                                            </p>
                                        </div>
                                    </Card>

                                    <div className="flex gap-4">
                                        <Button type="submit" disabled={loading} className="flex-1 py-5 rounded-full bg-orange-500 text-white font-bold">
                                            {loading ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Brief
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </>
                            )}
                        </form>
                    </Card>

                </div>
            </div>
        </section>
    );
}