import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
 title: "Henry Bue | IT Student & Aspiring Developer",
 description: "Portfolio of a third-year Information Technology student exploring web development, networking, databases, and cybersecurity.",
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body><Navbar/><main>{children}</main><Footer/></body></html>;
}
