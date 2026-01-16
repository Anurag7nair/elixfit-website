"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <main>
      <Header />
      
      {/* === NEW: CONTACT HERO BANNER IMAGE === */}
      <section style={{ 
        // UPDATED: Stable public URL for a modern office image
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#333', // Fallback color while image loads
        
        // Height settings
        height: '50vh', 
        minHeight: '400px',
        
        // Centering the text
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        // Text styling
        color: 'white',
        textAlign: 'center',
        paddingTop: '80px' 
      }}>
        <h1 style={{ 
          fontSize: "clamp(40px, 6vw, 75px)", 
          fontFamily: "var(--font-playfair), serif", 
          fontWeight: "bold",
          letterSpacing: '2px'
        }}>
          CONTACT US
        </h1>
      </section>


      {/* === MAIN CONTACT CONTENT SECTION === */}
      <section style={{ 
        paddingTop: "100px", 
        paddingBottom: "100px",
        backgroundColor: "white",
      }}>
        <div style={{ 
          maxWidth: "1300px", 
          margin: "0 auto", 
          padding: "0 20px",
          display: "flex", 
          flexWrap: "wrap", 
          gap: "60px",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }}>

          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div style={{ flex: "1 1 500px", marginTop: "20px" }}>

            {/* Subtitle */}
            <p style={{ 
              fontSize: "16px", 
              lineHeight: "1.6", 
              fontFamily: "sans-serif", 
              color: "#333",
              maxWidth: "500px",
              marginBottom: "50px"
            }}>
              Ready to build on a strong foundation? Get in touch with us and let us 
              know about your next big project or any other queries.
            </p>

            <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
              
              {/* Let's Talk Section */}
              <div>
                <h3 style={{ 
                  color: "black", 
                  fontSize: "18px", 
                  marginBottom: "20px", 
                  fontFamily: "sans-serif",
                  fontWeight: "600"
                }}>
                  Let's talk
                </h3>
                
                {/* Phone - Black SVG */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:9673135333" style={{ textDecoration: "none", color: "black", fontSize: "16px", fontFamily: "sans-serif" }}>
                    9673135333
                  </a>
                </div>

                {/* Email - Black SVG */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:sales@elixihitec.com" style={{ textDecoration: "none", color: "black", fontSize: "16px", fontFamily: "sans-serif" }}>
                    sales@elixihitec.com
                  </a>
                </div>
              </div>

              {/* Follow Us Section */}
              <div>
                <h3 style={{ 
                  color: "black", 
                  fontSize: "18px", 
                  marginBottom: "20px", 
                  fontFamily: "sans-serif",
                  fontWeight: "600"
                }}>
                  Follow Us
                </h3>
                
                {/* Social Icons (Black SVGs) */}
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                   {/* Instagram */}
                   <Link href="#" aria-label="Instagram">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                     </svg>
                   </Link>

                   {/* WhatsApp */}
                   <Link href="#" aria-label="WhatsApp">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                     </svg>
                   </Link>

                   {/* LinkedIn */}
                   <Link href="#" aria-label="LinkedIn">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                     </svg>
                   </Link>

                   {/* X (Twitter) */}
                   <Link href="#" aria-label="X">
                     <svg width="22" height="22" viewBox="0 0 24 24" fill="black">
                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                     </svg>
                   </Link>
                </div>

              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: MAP --- */}
          <div style={{ 
            flex: "1 1 600px", 
            height: "450px", 
            backgroundColor: "#f0f0f0",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.121169988876!2d73.77490237465225!3d18.56857508253457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b930d674254b%3A0x6b1f20d2076046e7!2sBaner%2C%20Pune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1709664583214!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}