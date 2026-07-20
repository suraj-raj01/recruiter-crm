import HeroSection from "./pages/Hero";
import Features from "./pages/Features";
import CTA from "./pages/CTA";
import Tesitmonials from "./pages/Testimonial";
import EnqureSection from "./pages/EnquiryPage";
import FaqSection from "./pages/FaqSection";
import AboutPage from "./aboutus/page";
import Services from "./services/page";

export default function Home() {
  return (
    <div className="min-h-screen py-10 -mt-27">
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
      {/* about us */}
      <AboutPage/>
      {/* services */}
      <Services/>
      {/* Enquiry */}
      <EnqureSection/>
      {/* <Footer/> */}
    </div>
  );
}