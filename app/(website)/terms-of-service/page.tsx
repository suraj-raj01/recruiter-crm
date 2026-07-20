'use client'

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
    {
        title: "1. Acceptance of Terms",
        content:
            "By accessing or using our platform, you agree to be bound by these Terms and Services. If you do not agree with any part of these terms, please discontinue using our services.",
    },
    {
        title: "2. Services",
        content:
            "Our platform provides resume building, ATS resume analysis, recruiter CRM, candidate pipeline management, image background removal, and other career-related tools. We may add, modify, or discontinue features at any time.",
    },
    {
        title: "3. User Responsibilities",
        content:
            "You are responsible for maintaining the confidentiality of your account credentials and for ensuring that the information you upload is accurate, lawful, and does not violate the rights of others.",
    },
    {
        title: "4. Resume & Uploaded Content",
        content:
            "You retain ownership of the resumes, documents, and other content you upload. By uploading content, you grant us permission to process it solely for providing our services.",
    },
    {
        title: "5. Recruiter Accounts",
        content:
            "Recruiters are responsible for managing candidate information in compliance with applicable privacy laws. Candidate data should only be used for legitimate recruitment purposes.",
    },
    {
        title: "6. Prohibited Activities",
        content:
            "Users must not misuse the platform, upload malicious files, attempt unauthorized access, distribute spam, violate intellectual property rights, or engage in any unlawful activities.",
    },
    {
        title: "7. Payments & Subscriptions",
        content:
            "Certain features may require a paid subscription. Subscription fees are billed according to the selected plan. Unless otherwise stated, payments are non-refundable.",
    },
    {
        title: "8. Privacy",
        content:
            "Your use of our platform is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.",
    },
    {
        title: "9. Intellectual Property",
        content:
            "All trademarks, logos, software, designs, and content provided by our platform remain our intellectual property unless otherwise stated.",
    },
    {
        title: "10. Limitation of Liability",
        content:
            "We strive to provide reliable services but cannot guarantee uninterrupted availability. We are not liable for any indirect, incidental, or consequential damages arising from the use of our platform.",
    },
    {
        title: "11. Termination",
        content:
            "We reserve the right to suspend or terminate accounts that violate these terms or misuse our services without prior notice.",
    },
    {
        title: "12. Changes to These Terms",
        content:
            "We may update these Terms and Services periodically. Continued use of the platform after updates constitutes acceptance of the revised terms.",
    },
    {
        title: "13. Contact Us",
        content:
            "If you have any questions regarding these Terms and Services, please contact our support team through the Contact page.",
    },
];

export default function TermsAndServices() {
    return (
        <section className="bg-background">
            {/* Hero */}
            <div className="border-b">
                <div className="mx-auto max-w-6xl px-3 py-20 text-center">
                    <Badge className="mb-5 bg-background text-orange-600 border-orange-600/80 rounded-full py-4 text-sm font-bold px-4">
                        Legal Information
                    </Badge>

                    <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                        Terms & Services
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg lg:leading-6 text-muted-foreground">
                        Please read these Terms and Services carefully before
                        using our platform. These terms govern your access to
                        and use of all features including Resume Builder, ATS
                        Resume Checker, Recruiter CRM, Candidate Management, and
                        related services.
                    </p>

                    <p className="mt-6 text-sm text-muted-foreground">
                        Last Updated: July 20, 2026
                    </p>
                </div>
            </div>

            {/* Terms */}
            <div className="mx-auto max-w-6xl px-3 py-16">
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
                        Agreement
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                        By continuing to use our platform, you acknowledge that
                        you have read, understood, and agreed to these Terms and
                        Services. If you do not agree with these terms, please
                        discontinue use of the platform.
                    </p>
                </div>
            </div>
        </section>
    );
}