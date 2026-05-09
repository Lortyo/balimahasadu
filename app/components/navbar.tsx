'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Data link dideklarasikan langsung agar rapi, 
  // tapi kamu tetap bisa memindahkannya ke siteData.json jika mau.
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="relative w-full bg-[#f8f9f6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          
          {/* Bagian Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center gap-3">
              {/* Ini bagian yang diubah! Huruf 'A' diganti dengan gambar logo */}
              <img 
                src="/logo.png" 
                alt="Bali Mahasadu Logo" 
                className="w-10 h-10 object-contain" 
              />
              <span className="font-serif text-2xl font-medium text-[#1c3832]">
                Balimahasadu
              </span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#e6f4f1] text-[#275c53]'
                      : 'text-gray-500 hover:text-[#275c53]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Tombol Get in Touch (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="rounded-[10px] bg-[#275c53] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1e4740]"
            >
              Get in Touch
            </Link>
          </div>

          {/* Tombol Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-200 hover:text-[#275c53] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Panel Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#f8f9f6] border-t border-gray-200 absolute w-full z-50">
          <div className="space-y-1 px-4 pb-4 pt-2 shadow-lg bg-[#f8f9f6]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-full px-4 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#e6f4f1] text-[#275c53]'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-[#275c53]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full rounded-[10px] bg-[#275c53] px-3 py-3 text-center text-base font-medium text-white hover:bg-[#1e4740]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}