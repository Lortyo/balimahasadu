export const metadata = {
  title: "Contact Us | Bali Mahasadu",
  description: "Get in touch with Bali Mahasadu for therapeutic services, herbal products, or partnerships.",
};

export default function ContactPage() {
  return (
    <div className="flex-1 flex flex-col w-full">
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="w-full pt-20 pb-16 md:pt-28 md:pb-24 px-4 bg-[#F5F5F0]">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          
          {/* Label */}
          <div className="flex items-center gap-2 text-[#275c53] text-sm font-semibold tracking-widest uppercase mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            Get in Touch
          </div>

          {/* Heading */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-[60px] font-bold text-[#1c3832] leading-tight mb-6">
            Contact <span className="text-[#275c53]">Bali Mahasadu</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Have questions about our therapeutic services, herbal products, or interested in 
            partnering with us? We would love to hear from you.
          </p>

        </div>
      </section>

      {/* =========================================
          SECTION 2: CONTACT INFO & WA BUTTON
      ========================================= */}
      <section className="w-full py-16 lg:py-24 px-4 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT COLUMN: Direct WhatsApp Card */}
          <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white rounded-[2rem] border border-gray-200/80 shadow-sm h-full">
            <div className="w-20 h-20 bg-[#e6f4f1] text-[#275c53] rounded-full flex items-center justify-center mb-6">
              {/* WhatsApp Icon Besar */}
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.764.457 3.42 1.258 4.88L2 22l5.293-1.168A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm.006 18c-1.464 0-2.883-.377-4.148-1.09l-.297-.167-3.085.681.693-3.003-.183-.29A8.005 8.005 0 014.006 12C4.006 7.589 7.595 4 12.006 4s8 3.589 8 8-3.589 8-8 8zm4.394-5.632c-.241-.12-1.424-.704-1.644-.784-.22-.081-.382-.12-.542.12-.16.241-.623.784-.764.945-.14.16-.282.18-.523.06-.24-.12-1.016-.375-1.934-1.193-.715-.637-1.197-1.425-1.337-1.665-.14-.241-.015-.371.106-.492.109-.108.241-.282.362-.423.12-.14.16-.241.24-.402.081-.16.04-.301-.02-.422-.06-.12-.542-1.306-.743-1.788-.196-.471-.395-.407-.542-.415-.14-.008-.302-.008-.462-.008-.16 0-.422.06-.643.301-.22.241-.843.824-.843 2.01 0 1.186.863 2.331.984 2.492.12.16 1.7 2.595 4.12 3.639 2.42 1.044 2.42.697 2.862.657.442-.04 1.424-.582 1.625-1.145.201-.562.201-1.044.14-1.145-.06-.1-.22-.16-.462-.28z" clipRule="evenodd" /></svg>
            </div>
            
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1c3832] mb-4">
              Let's Chat Directly
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-10 max-w-sm mx-auto text-base">
              Skip the forms! Click the button below to message us directly on WhatsApp. We are ready to answer your questions and assist with your orders.
            </p>

            {/* Ganti link wa.me ini dengan nomormu */}
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Bali%20Mahasadu,%20saya%20ingin%20bertanya%20seputar%20produk%20dan%20layanan%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#275c53] text-white font-medium rounded-xl text-lg hover:bg-[#1e4740] transition-transform hover:scale-105 duration-300 w-full sm:w-auto shadow-md"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.764.457 3.42 1.258 4.88L2 22l5.293-1.168A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm.006 18c-1.464 0-2.883-.377-4.148-1.09l-.297-.167-3.085.681.693-3.003-.183-.29A8.005 8.005 0 014.006 12C4.006 7.589 7.595 4 12.006 4s8 3.589 8 8-3.589 8-8 8zm4.394-5.632c-.241-.12-1.424-.704-1.644-.784-.22-.081-.382-.12-.542.12-.16.241-.623.784-.764.945-.14.16-.282.18-.523.06-.24-.12-1.016-.375-1.934-1.193-.715-.637-1.197-1.425-1.337-1.665-.14-.241-.015-.371.106-.492.109-.108.241-.282.362-.423.12-.14.16-.241.24-.402.081-.16.04-.301-.02-.422-.06-.12-.542-1.306-.743-1.788-.196-.471-.395-.407-.542-.415-.14-.008-.302-.008-.462-.008-.16 0-.422.06-.643.301-.22.241-.843.824-.843 2.01 0 1.186.863 2.331.984 2.492.12.16 1.7 2.595 4.12 3.639 2.42 1.044 2.42.697 2.862.657.442-.04 1.424-.582 1.625-1.145.201-.562.201-1.044.14-1.145-.06-.1-.22-.16-.462-.28z" clipRule="evenodd" /></svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT COLUMN: Contact Info */}
          <div className="flex flex-col h-full justify-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1c3832] mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Feel free to reach out through any of the following channels. We're here to help and typically respond within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-gray-200/80 bg-white">
                <div className="w-12 h-12 bg-[#e6f4f1]/80 text-[#275c53] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1c3832] text-[15px] mb-0.5">Email</h4>
                  <p className="text-gray-600 text-[15px]">balimahasadu@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-gray-200/80 bg-white">
                <div className="w-12 h-12 bg-[#e6f4f1]/80 text-[#275c53] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.54-4.24-7.136-7.136l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1c3832] text-[15px] mb-0.5">WhatsApp</h4>
                  <p className="text-gray-600 text-[15px]">+62 812-3456-7890</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-gray-200/80 bg-white">
                <div className="w-12 h-12 bg-[#e6f4f1]/80 text-[#275c53] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1c3832] text-[15px] mb-0.5">Location</h4>
                  <p className="text-gray-600 text-[15px]">Sanur, Bali, Indonesia.</p>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-gray-200/80 bg-white">
                <div className="w-12 h-12 bg-[#e6f4f1]/80 text-[#275c53] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1c3832] text-[15px] mb-0.5">Response Time</h4>
                  <p className="text-gray-600 text-[15px]">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Connect With Us Section */}
            <div className="bg-[#e6f4f1]/40 border border-[#275c53]/10 rounded-3xl p-8 mt-8">
              <h3 className="font-playfair text-xl font-bold text-[#1c3832] mb-3">Connect With Us</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                Follow us on social media for wellness tips, traditional herbal insights, and our community updates.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                {/* Instagram */}
                <a href="#" className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#1c3832] hover:bg-[#275c53] hover:text-white hover:border-[#275c53] transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                
                {/* Facebook */}
                <a href="#" className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#1c3832] hover:bg-[#275c53] hover:text-white hover:border-[#275c53] transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>

                {/* WhatsApp */}
                <a href="#" className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#1c3832] hover:bg-[#275c53] hover:text-white hover:border-[#275c53] transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.764.457 3.42 1.258 4.88L2 22l5.293-1.168A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm.006 18c-1.464 0-2.883-.377-4.148-1.09l-.297-.167-3.085.681.693-3.003-.183-.29A8.005 8.005 0 014.006 12C4.006 7.589 7.595 4 12.006 4s8 3.589 8 8-3.589 8-8 8zm4.394-5.632c-.241-.12-1.424-.704-1.644-.784-.22-.081-.382-.12-.542.12-.16.241-.623.784-.764.945-.14.16-.282.18-.523.06-.24-.12-1.016-.375-1.934-1.193-.715-.637-1.197-1.425-1.337-1.665-.14-.241-.015-.371.106-.492.109-.108.241-.282.362-.423.12-.14.16-.241.24-.402.081-.16.04-.301-.02-.422-.06-.12-.542-1.306-.743-1.788-.196-.471-.395-.407-.542-.415-.14-.008-.302-.008-.462-.008-.16 0-.422.06-.643.301-.22.241-.843.824-.843 2.01 0 1.186.863 2.331.984 2.492.12.16 1.7 2.595 4.12 3.639 2.42 1.044 2.42.697 2.862.657.442-.04 1.424-.582 1.625-1.145.201-.562.201-1.044.14-1.145-.06-.1-.22-.16-.462-.28z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>

          </div>
          
        </div>
      </section>

    </div>
  );
}