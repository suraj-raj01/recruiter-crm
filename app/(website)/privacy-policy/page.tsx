'use client'

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
    {
        title: "1. Introduction",
        content:
            "Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform, including Resume Builder, ATS Resume Checker, Recruiter CRM, Candidate Management, and related services.",
    },
    {
        title: "2. Information We Collect",
        content:
            "We may collect personal information such as your name, email address, profile details, resumes, job preferences, uploaded files, recruiter information, and any other information you voluntarily provide while using our platform.",
    },
    {
        title: "3. How We Use Your Information",
        content:
            "We use your information to provide our services, create resumes, analyze ATS compatibility, manage recruitment pipelines, improve user experience, provide customer support, process subscriptions, and communicate important updates.",
    },
    {
        title: "4. Resume & File Processing",
        content:
            "Documents and images uploaded to our platform are processed only to provide requested features such as resume generation, ATS scoring, and image background removal. We do not claim ownership of your uploaded content.",
    },
    {
        title: "5. Recruiter Data",
        content:
            "Recruiters using our CRM are responsible for ensuring that candidate information is collected and processed in accordance with applicable privacy laws and employment regulations.",
    },
    {
        title: "6. Cookies & Analytics",
        content:
            "We may use cookies and similar technologies to remember your preferences, maintain secure sessions, analyze website traffic, and improve platform performance.",
    },
    {
        title: "7. Data Security",
        content:
            "We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of electronic storage or internet transmission is completely secure.",
    },
    {
        title: "8. Data Sharing",
        content:
            "We do not sell your personal information. We may share limited information with trusted third-party service providers that help us operate the platform, process payments, provide cloud storage, or deliver essential services.",
    },
    {
        title: "9. Data Retention",
        content:
            "We retain your information only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.",
    },
    {
        title: "10. Your Rights",
        content:
            "Depending on your jurisdiction, you may have the right to access, update, correct, download, or delete your personal information. You may also request the closure of your account by contacting our support team.",
    },
    {
        title: "11. Children's Privacy",
        content:
            "Our services are not intended for individuals under the age required by applicable law. We do not knowingly collect personal information from children.",
    },
    {
        title: "12. Third-Party Services",
        content:
            "Our platform may integrate with third-party services such as payment gateways, authentication providers, cloud storage, or AI services. Their use is governed by their respective privacy policies.",
    },
    {
        title: "13. Changes to This Policy",
        content:
            "We may update this Privacy Policy from time to time. Any significant changes will be reflected on this page, along with the updated revision date.",
    },
    {
        title: "14. Contact Us",
        content:
            "If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us through our Contact page.",
    },
];

export default function PrivacyPolicy() {
    return (
        <section className="bg-background">
            {/* Hero */}
            <div className="border-b">
                <div className="mx-auto max-w-6xl px-4 py-20 text-center">
                    <Badge className="mb-5 bg-background text-orange-600 border-orange-600/80 rounded-full py-4 text-sm font-bold px-4">
                        Legal Information
                    </Badge>

                    <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                        Privacy Policy
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                        This Privacy Policy explains how we collect, use,
                        disclose, and safeguard your information when you use
                        our platform. We are committed to protecting your
                        personal data and maintaining your trust.
                    </p>

                    <p className="mt-6 text-sm text-muted-foreground">
                        Last Updated: July 20, 2026
                    </p>
                </div>
            </div>

            {/* Policy Sections */}
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="bg-muted/30 rounded-lg overflow-hidden">
                    {sections.map((section) => (
                        <Card key={section.title} className='bg-transparent border-0'>
                            <CardContent className="px-6 py-3">
                                <h2 className="text-xl font-bold">
                                    {section.title}
                                </h2>

                                <p className="mt-2 lg:text-sm lg:leading-5 text-muted-foreground">
                                    {section.content}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Footer Notice */}
                <div className="mt-12 rounded-xl border bg-orange-50 p-6 dark:bg-orange-950/20">
                    <h3 className="text-xl font-semibold">
                        Your Privacy Matters
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                        We are committed to handling your information
                        responsibly, securely, and transparently. By using our
                        platform, you acknowledge that you have read and
                        understood this Privacy Policy.
                    </p>
                </div>
            </div>
        </section>
    );
}