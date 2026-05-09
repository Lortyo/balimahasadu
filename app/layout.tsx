import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
// 1. Tambahkan import Footer di sini. 
// Pastikan path-nya sesuai dengan tempat kamu menyimpan file Footer.tsx
import Footer from "./components/footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F5F5F0]">
        
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