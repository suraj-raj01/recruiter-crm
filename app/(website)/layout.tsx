import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}