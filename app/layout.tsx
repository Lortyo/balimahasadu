import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer"; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// 3. Setup font Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bali Mahasadu",
  description: "Traditional Wellness & Relaxation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F5F5F0] font-sans">
        
        {/* Navbar nangkring di atas */}
        <Navbar />
        
        {/* Konten Halaman (flex-1 memastikan dia mendorong Footer ke bawah) */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        
        {/* 2. Tambahkan komponen Footer di bawah <main> */}
        <Footer />
        
      </body>
    </html>
  );
}