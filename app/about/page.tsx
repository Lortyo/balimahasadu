import { Inter, Playfair_Display } from 'next/font/google';

// Konfigurasi Font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: "About Us | Bali Mahasadu",
  description: "Learn more about Bali Mahasadu's mission to empower visually impaired therapists.",
};

export default function AboutPage() {
  return (
    // Wrapper Utama: Menampung seluruh konten dengan background off-white
    <div className={`flex-1 flex flex-col w-full bg-[#F5F5F0] ${inter.variable} ${playfair.variable} font-sans`}>
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="w-full pt-20 pb-16 md:pt-28 md:pb-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Label */}
          <div className="flex items-center gap-2 text-[#275c53] text-sm font-semibold tracking-widest uppercase mb-6">
            <img 
                src="/daun.svg" 
                alt="Icon About" 
                className="w-5 h-5 object-contain" 
            />
            About Bali Mahasadu
          </div>

          {/* Heading */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c3832] leading-tight mb-6">
            Restoring Balance,<br />Uplifting Lives
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Founded in 2018 with a vision for traditional healing and social inclusion, Bali Mahasadu is 
            transforming the wellness experience by empowering visually impaired therapists to deliver 
            professional, heart-centered care.
          </p>

        </div>
      </section>

      {/* =========================================
          SECTION 2: OUR STORY
      ========================================= */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1c3832]">Our Story</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                Bali Mahasadu began with a simple observation: traditional Balinese massage is deeply rooted in our culture, but the people who often possess the most intuitive touch—the visually impaired—are frequently marginalized. We wanted to change that reality and create a space where their skills could truly shine.
              </p>
              <p>
                What started as a small initiative in 2018 in Sanur has blossomed into a full-fledged wellness center. We pair professional therapeutic standards with deep cultural roots. Our therapists receive comprehensive training, ensuring they deliver outstanding treatments while securing stable, respectful livelihoods.
              </p>
              <p>
                Today, Bali Mahasadu serves both local residents and international visitors. We are more than just a place to get a massage; we are a community built on mutual respect, empowerment, and the profound healing power of human touch.
              </p>
            </div>
          </div>

          {/* Image Placeholder (Kotak Hijau) */}
          <div className="order-1 lg:order-2 w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#355E4E] rounded-[2rem] flex flex-col items-center justify-center p-8 text-center text-white shadow-xl">
            {/* Leaf Icon */}
            <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-6">
              <img 
                src="/daun_putih.svg" 
                alt="Icon About" 
                className="w-10 h-10 object-contain" 
            />
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl font-medium leading-snug">
              Empowering lives through healing touch since 2018
            </h3>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 3: VISION & MISSION
      ========================================= */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#e6f4f1] text-[#275c53] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-[#1c3832] mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a leading center for traditional Balinese wellness that is recognized globally, setting the standard for inclusive employment and proving that professional quality and social impact can seamlessly go hand-in-hand.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#e6f4f1] text-[#275c53] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-[#1c3832] mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide high-quality, restorative treatments through professional massage therapies and natural herbal products. We empower visually impaired therapists by providing a platform for them to apply their skills and earn a sustainable income.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 4: OUR CORE VALUES
      ========================================= */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1c3832] mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make, from how we craft our products to how we treat our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#e6f4f1] text-[#275c53] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1c3832] mb-3">Inclusivity</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We believe in creating a workplace that empowers the marginalized. We employ visually impaired therapists, treating them with dignity and respect.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#e6f4f1] text-[#275c53] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1c3832] mb-3">Authenticity</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                All our treatments and products are deeply rooted in Balinese traditions. We honor our heritage and share it genuinely with the world.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#e6f4f1] text-[#275c53] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1c3832] mb-3">Integrity</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We operate with transparency and honesty in every interaction, from how we treat our staff to the quality of service we provide.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 5: WHO WE SERVE
      ========================================= */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1c3832] mb-4">Who We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bali Mahasadu is designed to meet the needs of diverse individuals seeking authentic healing and traditional Balinese remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#e6f4f1] text-[#275c53] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1c3832] mb-2">International Travelers</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Providing authentic and restorative Balinese wellness experiences for tourists seeking genuine, high-quality therapeutic care.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#e6f4f1] text-[#275c53] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1c3832] mb-2">Local Residents</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Partnering with the local community to promote holistic wellbeing for individuals seeking regular health and relaxation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#e6f4f1] text-[#275c53] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1c3832] mb-2">Wellness Professionals</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Supplying our handcrafted natural herbal products, massage oils, and incense to local spas and wellness centers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 6: CALL TO ACTION (CTA)
      ========================================= */}
      <section className="w-full py-20 lg:py-24 px-4 bg-gradient-to-br from-[#30584b] to-[#4d7b6a]">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Join the Mahasadu Community
          </h2>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
            Whether you are looking for professional massage, natural herbal products, or want to 
            support our social mission, we'd love to connect with you.
          </p>

          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#30584b] font-medium rounded-xl text-base hover:bg-gray-100 transition-all duration-300 group"
          >
            Get in Touch 
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>

        </div>
      </section>

    </div>
  );
}