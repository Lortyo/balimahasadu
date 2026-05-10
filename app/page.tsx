import { Inter, Playfair_Display } from 'next/font/google';

// Konfigurasi Font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: "Traditional Wellness & Relaxation | Bali Mahasadu",
};

export default function HomePage() {
  return (
    // Wrapper Utama: Menampung seluruh section di dalam halaman ini
    <div className={`flex-1 flex flex-col w-full ${inter.variable} ${playfair.variable} font-sans`}>
      
      {/* =========================================
          SECTION 1: HERO
          Tinggi di-set menyesuaikan sisa layar setelah dikurangi Navbar (96px)
      ========================================= */}
      <section className="min-h-[calc(100vh-96px)] flex items-center w-full py-10 md:py-0 bg-[#F4F7F5]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Kolom Kiri: Teks & CTA (order-2 di mobile, order-1 di desktop) */}
          <div className="flex flex-col gap-4 md:p-6 lg:p-8 order-2 md:order-1 text-center md:text-left items-center md:items-start">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-950 leading-[1.1]">
              Traditional Wellness & Relaxation
            </h1>
            
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-xl">
              Experience professional massage therapies and natural herbal products rooted in local Balinese wisdom. We empower visually impaired therapists to bring you physical wellness and peace of mind.
            </p>
            
            <div className="pt-4 md:pt-2">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-[#355E4E] text-white font-medium rounded-xl text-base hover:bg-[#2A4D40] transition-colors group w-max">
                View Products 
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Gambar (order-1 di mobile, order-2 di desktop) */}
          <div className="flex justify-center items-center md:p-1 lg:p-1 order-1 md:order-2">
            <img 
              src="/logo.svg" 
              alt="Bali Mahasadu Logo" 
              // Lebar gambar disesuaikan agar tidak terlalu besar di HP (w-48)
              className="w-48 sm:w-64 md:w-full max-w-[280px] md:max-w-[340px] lg:max-w-[394px] h-auto object-contain drop-shadow-md"
            />
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: WHO WE ARE
          Tinggi di-set min-h-screen agar penuh 1 layar saat di-scroll
      ========================================= */}
      <section className="min-h-screen flex items-center justify-center w-full py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Label: Who We Are */}
          <div className="flex items-center gap-2 text-[#275c53] text-sm font-semibold tracking-widest uppercase mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 4.362-8.25 8.928-8.25 13.5a8.25 8.25 0 0016.5 0c0-4.572-2.865-9.138-8.25-13.5zM12 11.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            </svg>
            Who We Are
          </div>

          {/* Heading */}
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c3832] leading-tight mb-8 max-w-3xl">
            Empowering Souls through Authentic Healing
          </h2>

          {/* Paragraf */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
            Bali Mahasadu is a Sanur-based wellness center established in 2018. We are dedicated to 
            providing professional massage therapies while creating meaningful social impact by 
            empowering visually impaired therapists. We believe that wellness should be inclusive, 
            natural, and rooted in Balinese wisdom.
          </p>

          {/* CTA Button */}
          <a 
            href="/impact" 
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#275c53] text-[#275c53] font-medium rounded-full text-base hover:bg-[#275c53] hover:text-white transition-all duration-300 group"
          >
            Learn More About Our Impact 
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>

        </div>
      </section>

      {/* =========================================
          SECTION 3: OUR PRODUCTS
      ========================================= */}
      <section className="w-full py-20 lg:py-24 px-4 bg-[#F4F7F5]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <div className="flex items-center gap-2 text-[#355E4E] text-sm font-semibold tracking-widest uppercase mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
            </svg>
            Our Products
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1c3832] text-center mb-6">
            Nature’s Healing for Your Wellbeing
          </h2>

          <p className="text-gray-500 text-base md:text-lg text-center max-w-2xl mb-14">
            From aromatic incense to soothing oils, discover our range of natural herbal products crafted with Balinese local wisdom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-200/80 bg-[#FAFAF7]">
              <div className="h-64 w-full bg-[#C4C4C4]"></div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-playfair text-2xl font-bold text-[#1c3832] mb-3">Herbal Incense</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">Aromatic incense made from natural Balinese herbs to create a calming atmosphere and enhance your relaxation experience.</p>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-200/80 bg-[#FAFAF7]">
              <div className="h-64 w-full bg-[#C4C4C4]"></div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-playfair text-2xl font-bold text-[#1c3832] mb-3">Massage Oils</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">Premium oils formulated with traditional ingredients to nourish your skin and ease muscle tension during therapy.</p>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-200/80 bg-[#FAFAF7]">
              <div className="h-64 w-full bg-[#C4C4C4]"></div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-playfair text-2xl font-bold text-[#1c3832] mb-3">Red Ginger Powder</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">100% pure red ginger powder for a natural health boost, perfect for warming the body and improving circulation.</p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <a href="/products" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#355E4E] text-white font-medium rounded-xl text-base hover:bg-[#2A4D40] transition-colors group">
              Explore All Products 
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 4: CALL TO ACTION (CTA)
      ========================================= */}
      <section className="w-full py-20 lg:py-24 px-4 bg-gradient-to-br from-[#30584b] to-[#4d7b6a]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <div className="flex items-center gap-2 text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            Join Our Mission
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6 max-w-3xl">
            Ready to Experience True Balinese Relaxation?
          </h2>

          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mb-10">
            Whether you are seeking a professional therapeutic massage or natural herbal wellness products, Bali Mahasadu is here to rejuvenate your body and soul. Let's start your wellness journey today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="/products" className="w-full sm:w-auto px-8 py-3.5 border border-white text-white font-medium rounded-xl text-base hover:bg-white hover:text-[#30584b] transition-all duration-300">
              Browse Products
            </a>
            
            <a href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#F8F9F6] text-[#30584b] font-medium rounded-xl text-base hover:bg-white transition-all duration-300 group">
              Get in Touch 
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}