"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function ContactUsPage() {
  // State to manage which map is currently showing
  const [activeLocation, setActiveLocation] = useState<"mumbai" | "pune">("mumbai");

  // ✅ UPDATED: Working Google Maps Embed URLs for your specific addresses
  const mapUrls = {
    // Zenith Forex, 608 Shivai Plaza, Marol
    mumbai: "https://maps.google.com/maps?q=Zenith+Forex+608+Shivai+Plaza,+Marol+Cooperative+Industrial+Estate+Rd,+Gamdevi,+Marol,+Andheri+East,+Mumbai,+Maharashtra+400059&t=&z=15&ie=UTF8&iwloc=&output=embed",
    
    // Nandan Prospera Rd, Baner, Pune
    pune: "https://maps.google.com/maps?q=Nandan+Prospera+Rd,+Laxman+Nagar,+Baner,+Pune,+Maharashtra+411045&t=&z=15&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <main>
      <Header />
      
      {/* === CONTACT HERO BANNER IMAGE === */}
      <section style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#333', 
        height: '50vh', 
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
          <div style={{ flex: "1 1 400px", marginTop: "20px" }}>

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
                
                {/* Phone */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:9673135333" style={{ textDecoration: "none", color: "black", fontSize: "16px", fontFamily: "sans-serif" }}>
                    9673135333
                  </a>
                </div>

                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:sales@elixihitec.com" style={{ textDecoration: "none", color: "black", fontSize: "16px", fontFamily: "sans-serif" }}>
                    accounts@elixifitout.com 
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
                
                {/* Social Icons */}
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    
                    {/* Instagram */}
                    <Link href="#" aria-label="Instagram">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" fill="#E1306C"/>
                          <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="#E1306C"/>
                          <circle cx="18.406" cy="5.594" r="1.44" fill="#E1306C"/>
                      </svg>
                    </Link>

                    {/* WhatsApp */}
                    <Link href="#" aria-label="WhatsApp">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                      </svg>
                    </Link>

                    {/* LinkedIn */}
                    <Link href="#" aria-label="LinkedIn">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </Link>

                    {/* X */}
                    <Link href="#" aria-label="X">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </Link>
                </div>

              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: MAP SWITCHER & IFRAME --- */}
          <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column" }}>
            
            {/* Map Toggle Buttons */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              <button 
                onClick={() => setActiveLocation("mumbai")}
                style={{
                  padding: "10px 20px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  backgroundColor: activeLocation === "mumbai" ? "black" : "#f0f0f0",
                  color: activeLocation === "mumbai" ? "white" : "#666",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}
              >
                Mumbai
              </button>
              <button 
                onClick={() => setActiveLocation("pune")}
                style={{
                  padding: "10px 20px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  backgroundColor: activeLocation === "pune" ? "black" : "#f0f0f0",
                  color: activeLocation === "pune" ? "white" : "#666",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}
              >
                Pune
              </button>
            </div>

            {/* Map Container */}
            <div style={{ 
              height: "450px", 
              width: "100%",
              backgroundColor: "#f0f0f0",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}>
              <iframe 
                key={activeLocation} // This forces the iframe to reload when key changes
                src={mapUrls[activeLocation]}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}