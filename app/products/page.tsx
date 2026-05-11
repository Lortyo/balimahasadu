export const metadata = {
  title: "Our Products | Bali Mahasadu",
  description: "Discover our range of authentic Balinese herbal wellness products.",
};

export default function ProductsPage() {
  return (
    // Wrapper Utama
    <div className="flex-1 flex flex-col w-full bg-[#F5F5F0]">
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="w-full pt-20 pb-16 md:pt-28 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Label */}
          <div className="flex items-center gap-2 text-[#275c53] text-sm font-semibold tracking-widest uppercase mb-6">
            {/* Sparkle Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
            </svg>
            Our Products
          </div>

          {/* Heading */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-[60px] font-bold text-[#1c3832] leading-tight mb-6">
            Premium Herbal <br />
            <span className="text-[#275c53]">Wellness Products</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            From traditional incense to natural healing oils, discover our range of authentic 
            Balinese products designed to nourish your body and soul through local wisdom.
          </p>

        </div>
      </section>

      {/* =========================================
          SECTION 2: PRODUCT 1 (Incense)
          Layout: Image Left, Text Right
      ========================================= */}
      <section className="w-full py-16 lg:py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Placeholder */}
          <div className="order-1 lg:order-1 w-full aspect-square bg-[#C4C4C4] rounded-[2rem] shadow-sm"></div>

          {/* Content */}
          <div className="order-2 lg:order-2 flex flex-col gap-5">
            <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Pure Relaxation For Your Home
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1c3832]">
              Aromatic Herbal Incense
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our aromatic incense is handcrafted from premium natural Balinese herbs to create a serene environment. Inspired by local wisdom, each stick delivers a calming scent that helps reduce stress and enhance your meditation or relaxation experience.
            </p>
            
            <div className="pt-2">
              <h4 className="font-bold text-[#1c3832] mb-3">Key Benefits:</h4>
              <ul className="space-y-3">
                {[
                  "Natural aroma to calm the mind",
                  "Handcrafted with authentic Balinese herbs",
                  "Long-burning for extended relaxation",
                  "Free from harmful synthetic fragrances",
                  "Supports sustainable local craftsmanship",
                  "100% natural ingredients"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-[15px]">
                    <svg className="w-5 h-5 text-[#275c53] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Use Box */}
            <div className="bg-[#e6f4f1]/50 border border-[#275c53]/20 rounded-xl p-6 mt-4">
              <h4 className="font-bold text-[#1c3832] text-sm mb-2">How to Use:</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Light the tip of the incense stick and allow the flame to catch for a few seconds. Gently blow out the flame and place the stick in a secure holder. Use in a well-ventilated room to enjoy the soothing herbal aroma.
              </p>
            </div>

            <div className="pt-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#275c53] text-white font-medium rounded-xl text-sm hover:bg-[#1e4740] transition-colors w-max">
                Inquire About This Product &rarr;
              </a>
            </div>
          </div>
          
        </div>
      </section>

      {/* =========================================
          SECTION 3: PRODUCT 2 (Healing Oil)
          Layout: Text Left, Image Right
      ========================================= */}
      <section className="w-full py-16 lg:py-24 px-4 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content (Diubah jadi order-2 di mobile, order-1 di desktop) */}
          <div className="order-2 lg:order-1 flex flex-col gap-5">
            <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Pure Essence of Balinese Wellness
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1c3832]">
              Traditional Healing Oil
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our premium healing oil is a signature blend of traditional Balinese herbs and natural carrier oils. Developed through years of local expertise, this oil is specifically formulated to nourish the skin, alleviate muscle tension, and provide deep relaxation during your therapeutic massage sessions.
            </p>
            
            <div className="pt-2">
              <h4 className="font-bold text-[#1c3832] mb-3">Key Benefits:</h4>
              <ul className="space-y-3">
                {[
                  "Relieves muscle tension and stiffness",
                  "Infused with authentic Balinese healing herbs",
                  "Deeply nourishes and hydrates the skin",
                  "Non-greasy formula for a comfortable experience",
                  "Soothing natural aroma for mental relaxation",
                  "100% natural and chemical-free ingredients"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-[15px]">
                    <svg className="w-5 h-5 text-[#275c53] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Use Box */}
            <div className="bg-[#e6f4f1]/50 border border-[#275c53]/20 rounded-xl p-6 mt-4">
              <h4 className="font-bold text-[#1c3832] text-sm mb-2">How to Use:</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Warm a small amount of oil in your palms before applying it to the skin. Massage gently into the desired areas using long, flowing strokes. For best results, use during a professional Balinese massage or as a daily moisturizer after bathing.
              </p>
            </div>

            <div className="pt-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#275c53] text-white font-medium rounded-xl text-sm hover:bg-[#1e4740] transition-colors w-max">
                Inquire About This Product &rarr;
              </a>
            </div>
          </div>

          {/* Image Placeholder (Selalu di atas saat di Mobile) */}
          <div className="order-1 lg:order-2 w-full aspect-square bg-[#C4C4C4] rounded-[2rem] shadow-sm"></div>
          
        </div>
      </section>

      {/* =========================================
          SECTION 4: PRODUCT 3 (Ginger Powder)
          Layout: Image Left, Text Right
      ========================================= */}
      <section className="w-full py-16 lg:py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Placeholder */}
          <div className="order-1 lg:order-1 w-full aspect-square bg-[#C4C4C4] rounded-[2rem] shadow-sm"></div>

          {/* Content */}
          <div className="order-2 lg:order-2 flex flex-col gap-5">
            <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Ancient Remedy for Modern Wellbeing
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1c3832]">
              Pure Red Ginger Powder
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our 100% natural red ginger powder is sourced from local farmers and processed with care to preserve its potent health benefits. Known for its warming properties, this traditional Balinese remedy is perfect for boosting your immune system and maintaining daily vitality.
            </p>
            
            <div className="pt-2">
              <h4 className="font-bold text-[#1c3832] mb-3">Key Benefits:</h4>
              <ul className="space-y-3">
                {[
                  "Boosts immune system naturally",
                  "Powerful anti-inflammatory and antioxidant properties",
                  "Warms the body and improves blood circulation",
                  "Soothes digestive discomfort",
                  "No added preservatives or artificial colors",
                  "100% pure locally sourced red ginger"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-[15px]">
                    <svg className="w-5 h-5 text-[#275c53] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Use Box */}
            <div className="bg-[#e6f4f1]/50 border border-[#275c53]/20 rounded-xl p-6 mt-4">
              <h4 className="font-bold text-[#1c3832] text-sm mb-2">How to Use:</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mix 1-2 teaspoons of red ginger powder into a glass of warm water, tea, or coffee. Add honey or lemon for extra flavor if desired. Best consumed in the morning or when you need a natural energy boost to start your day.
              </p>
            </div>

            <div className="pt-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#275c53] text-white font-medium rounded-xl text-sm hover:bg-[#1e4740] transition-colors w-max">
                Inquire About This Product &rarr;
              </a>
            </div>
          </div>
          
        </div>
      </section>

      {/* =========================================
          SECTION 5: CALL TO ACTION (CTA)
      ========================================= */}
      <section className="w-full py-20 lg:py-24 px-4 bg-gradient-to-br from-[#30584b] to-[#4d7b6a]">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Looking for a Wellness Partnership?
          </h2>

          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
            We collaborate with hotels, villas, and organizations to provide professional therapeutic 
            services or customized herbal gift sets. Let's discuss how we can bring authentic 
            Balinese wellness to your community.
          </p>

          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#30584b] font-medium rounded-xl text-base hover:bg-gray-100 transition-all duration-300 group"
          >
            Contact Us 
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>

        </div>
      </section>

    </div>
  );
}