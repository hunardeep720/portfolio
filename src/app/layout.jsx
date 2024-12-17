import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import StyledBackground from "../../components/StyledBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Hunardeep Singh - Portfolio",
  description: "Full-stack and mobile developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="bg-background text-text relative">
        <StyledBackground />
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}