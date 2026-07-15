import HeroSection from "./pages/Hero";
import Features from "./pages/Features";
import CTA from "./pages/CTA";
import Tesitmonials from "./pages/Testimonial";
import EnqureSection from "./pages/EnquiryPage";
import FaqSection from "./pages/FaqSection";

export default function Home() {
  return (
    <div className="min-h-screen py-10 -mt-27 bg-linear-to-br from-slate-50 via-white to-orange-50 dark:from-black dark:via-zinc-950 dark:to-zinc-900">
      {/* <Navbar /> */}
      {/* Hero */}
      <HeroSection />
      {/* Features */}
      <Features />
      {/* Testimonial */}
      <Tesitmonials />
      {/* FAQ */}
      <FaqSection/>
      {/* Bottom CTA */}
      <CTA />
      {/* Enquiry */}
      <EnqureSection/>
      {/* <Footer/> */}
    </div>
  );
}