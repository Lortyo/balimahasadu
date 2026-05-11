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
          <div className="flex items-center gap-2 text-[#27685B] text-sm font-inter font-medium tracking-widest uppercase mb-6">
            <img 
                src="/about/daun.svg" 
                alt="Icon About" 
                className="w-5 h-5 object-contain" 
            />
            About Bali Mahasadu
          </div>

          {/* Heading */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c3832] leading-tight mb-6">
            Restoring Balance,<br /><span className="text-[#27685B]">Uplifting Lives</span>
          </h1>

          {/* Subheading */}
          <p className="text-base text-[#677E77] md:text-lg leading-relaxed max-w-3xl">
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
                Bali Mahasadu began with a simple observation: traditional healing is not just about therapy, but about the people behind it. We noticed that while Balinese massage is globally renowned, many talented visually impaired individuals lacked professional platforms to showcase their healing touch.
              </p>
              <p>
                We set out to change that. Since 2018 in Sanur, we have developed a wellness hub that combines professional therapeutic standards with deep social impact. Our approach focuses on empowering visually impaired therapists, providing them with meaningful livelihoods while delivering authentic wellness to our clients.              </p>
              <p>
                Today, Bali Mahasadu serves local residents and international visitors with services and herbal products that are as good for the community as they are for your body. We’re not just providing a massage—we’re growing a movement toward inclusive and traditional Balinese wellness.
              </p>
            </div>
          </div>

          {/* Image Placeholder (Kotak Hijau) */}
          <div className="order-1 lg:order-2 w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#355E4E] rounded-[2rem] flex flex-col items-center justify-center p-8 text-center text-white shadow-xl">
            {/* Leaf Icon */}
            <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-6">
              <img 
                src="/about/daun_putih.svg" 
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
            <div className="w-12 h-12 bg-[#e6f4f1] text-[#27685B] rounded-full flex items-center justify-center mb-6">
              <img 
                src="about/vision.svg" 
                alt="Vision" 
                className="w-7 h-7"
                />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-[#1c3832] mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a leading center for traditional Balinese wellness that is recognized globally, setting the standard for inclusive employment and proving that professional quality and social impact can seamlessly go hand-in-hand.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#e6f4f1] text-[#27685B] rounded-full flex items-center justify-center mb-6">
              <img 
                src="about/mission.svg" 
                alt="Mission" 
                className="w-7 h-7"
                />
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
              <div className="w-14 h-14 bg-[#e6f4f1] text-[#27685B] rounded-full flex items-center justify-center mb-6">
                <img 
                  src="about/inclusivity.svg" 
                  alt="Inclusivity" 
                  className="w-7 h-7"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1c3832] mb-3">Inclusivity</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We believe in creating a workplace that empowers the marginalized. We employ visually impaired therapists, treating them with dignity and respect.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#e6f4f1] text-[#27685B] rounded-full flex items-center justify-center mb-6">
                <img 
                  src="about/daun.svg" 
                  alt="Authenticity" 
                  className="w-7 h-7"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1c3832] mb-3">Authenticity</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                All our treatments and products are deeply rooted in Balinese traditions. We honor our heritage and share it genuinely with the world.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#e6f4f1] text-[#27685B] rounded-full flex items-center justify-center mb-6">
                <img 
                  src="about/integrity.svg" 
                  alt="Integrity" 
                  className="w-7 h-7"
                />
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
              <div className="w-12 h-12 bg-[#e6f4f1] text-[#27685B] rounded-xl flex items-center justify-center mb-6">
                <img 
                  src="about/orang2.svg" 
                  alt="Vision" 
                  className="w-7 h-7"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1c3832] mb-2">International Travelers</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Providing authentic and restorative Balinese wellness experiences for tourists seeking genuine, high-quality therapeutic care.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#e6f4f1] text-[#27685B] rounded-xl flex items-center justify-center mb-6">
                <img 
                  src="about/inclusivity.svg" 
                  alt="Vision" 
                  className="w-7 h-7"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1c3832] mb-2">Local Residents</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Partnering with the local community to promote holistic wellbeing for individuals seeking regular health and relaxation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#e6f4f1] text-[#27685B] rounded-xl flex items-center justify-center mb-6">
                <img 
                  src="about/bunga.svg" 
                  alt="Vision" 
                  className="w-7 h-7"
                />
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
          
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Join the Mahasadu Community
          </h2>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
            Whether you're looking for professional healing, interested in our herbal products, or want to 
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