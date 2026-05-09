import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D5A4F] text-white pt-16 pb-8 border-t border-[#254A41]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="Bali Mahasadu" className="w-11 h-11 object-contain" />
              {/* font-serif dihapus, pakai font default yang lebih modern */}
              <span className="text-[1.35rem] font-bold tracking-wide">
                Bali Mahasadu
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering wellness through traditional Balinese healing and social inclusivity since 2018.
            </p>
            <div className="flex items-center gap-2.5 text-white/90 text-sm font-medium">
              {/* Ini ikon Daun (Leaf) yang benar */}
              <svg className="w-5 h-5 text-white/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              Eco-friendly & Sustainable
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide mb-6">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/social-impact" className="hover:text-white transition-colors">Social Impact</Link></li>
              <li><Link href="/why-us" className="hover:text-white transition-colors">Why Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Product Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide mb-6">Products</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/80">
              <li><Link href="/products/herbal-incense" className="hover:text-white transition-colors">Herbal Incense</Link></li>
              <li><Link href="/products/massage-oils" className="hover:text-white transition-colors">Massage Oils</Link></li>
              <li><Link href="/products/red-ginger" className="hover:text-white transition-colors">Red Ginger Powder</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide mb-6">Contact</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:balimahasadu@algred.com" className="hover:text-white transition-colors">balimahasadu@algred.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+6281234567890" className="hover:text-white transition-colors">+62 812-3456-7890</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sanur, Bali, Indonesia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs">
            © 2026 Bali Mahasadu. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/60">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}