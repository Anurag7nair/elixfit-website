"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceContactForm from "@/components/ServiceContactForm";
import Image from "next/image";
import { useState, useEffect } from "react";

// --- HERO SLIDER IMAGES (Reusing working Design page images) ---
const heroSlides = [
  {
    id: 1,
    category: "Branding",
    title: "Identity Integration",
    // Reused from Design page (Ergonomic Workspaces)
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Branding",
    title: "Cultural Resonance",
    // Reused from Design page (Modern Design)
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Branding",
    title: "Visual Storytelling",
    // Reused from Design page (Contemporary Design)
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
  }
];

// --- FOCUS GALLERY IMAGES (Reusing working Design page images) ---
const focusImages = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
];

// --- PROCESS GRID ---
const processSteps = [
  {
    title: "Brand Discovery",
    desc: "We analyze your brand guidelines, values, and culture to define the design language.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>)
  },
  {
    title: "Thematic Concepts",
    desc: "Developing mood boards and color palettes that mirror your corporate identity.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>)
  },
  {
    title: "Space Planning",
    desc: "Integrating brand elements into the physical layout for maximum impact.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>)
  },
  {
    title: "Custom Fabrication",
    desc: "Creating bespoke furniture and fixtures that are unique to your brand.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>)
  },
  {
    title: "Graphics & Signage",
    desc: "Strategic placement of logos, mottos, and environmental graphics.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>)
  },
  {
    title: "Final Walkthrough",
    desc: "Ensuring every corner tells your story before you move in.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>)
  }
];

export default function BrandAlignedPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <Header />
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-wrapper {
          display: flex;
          animation: scroll 30s linear infinite;
        }
        .scrolling-wrapper:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* --- 1. HERO SECTION --- */}
      <section style={{ width: "100%", height: "100vh", display: "flex", position: "relative" }}>
        {/* LEFT: SLIDER */}
        <div style={{ width: "65%", height: "100%", position: "relative", overflow: "hidden" }}>
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              style={{
                position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                opacity: index === currentSlide ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                zIndex: 1
              }}
            >
              <Image src={slide.image} alt={slide.title} fill style={{ objectFit: "cover" }} priority={index === 0} />
              <div style={{
                position: "absolute", bottom: "100px", left: "60px",
                backgroundColor: "white", padding: "40px 50px", maxWidth: "400px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}>
                 <span style={{ fontSize: "14px", color: "#999", textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "10px", fontFamily: "sans-serif", fontWeight: "bold" }}>{slide.category}</span>
                 <h2 style={{ fontSize: "40px", fontWeight: "bold", color: "black", lineHeight: "1.1", fontFamily: "sans-serif" }}>{slide.title}</h2>
              </div>
            </div>
          ))}
          <div style={{
            position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", zIndex: 10,
            display: "flex", flexDirection: "column", gap: "10px"
          }}>
            {heroSlides.map((_, index) => (
              <div key={index} onClick={() => setCurrentSlide(index)}
                style={{ width: "3px", height: "40px", backgroundColor: index === currentSlide ? "white" : "rgba(255,255,255,0.3)", cursor: "pointer", transition: "background-color 0.3s" }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: STATIC IMAGES (Reusing working Design page images) */}
        <div style={{ width: "35%", height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", width: "100%", height: "50%" }}>
            {/* Reused from Design (Lounge) */}
            <Image src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" alt="Lounge Area" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", width: "100%", height: "50%" }}>
             {/* Reused from Design (Team Meeting) */}
             <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop" alt="Team Work" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* --- 2. FOCUS SECTION --- */}
      <section style={{ padding: "100px 0", backgroundColor: "white", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "50px", gap: "40px" }}>
            <div style={{ flex: "1 1 400px" }}>
              <h2 style={{ fontSize: "42px", fontWeight: "bold", fontFamily: "sans-serif", color: "black", lineHeight: "1.2" }}>
                Brand-Aligned<br/>Interiors
              </h2>
            </div>
            <div style={{ flex: "1 1 400px" }}>
              <h3 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px", color: "black" }}>Our focus</h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Your workspace is a physical manifestation of your brand. We design environments that narrate your company's story, instill pride in employees, and leave a lasting impression on clients by seamlessly integrating your visual identity into every square foot.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "40px", marginBottom: "40px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
             {["Identity", "Culture", "Experience"].map((tab, i) => (
               <span key={i} style={{ fontSize: "16px", color: "black", fontWeight: "bold", cursor: "pointer" }}>{tab}</span>
             ))}
          </div>
        </div>
        <div style={{ width: "100%", overflow: "hidden", marginTop: "20px" }}>
          <div className="scrolling-wrapper">
             {[...focusImages, ...focusImages, ...focusImages].map((img, i) => (
               <div key={i} style={{ position: "relative", flex: "0 0 400px", height: "250px", marginRight: "20px", borderRadius: "4px", overflow: "hidden" }}>
                 <Image src={img} alt="Brand Gallery" fill style={{ objectFit: "cover" }} />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 3. PROCESS GRID SECTION --- */}
      <section style={{ padding: "100px 5%", backgroundColor: "#fcfcfc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", fontFamily: "sans-serif", color: "black", marginBottom: "60px" }}>
            Creating Your Brand Sanctuary with Elixi
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "50px", rowGap: "70px" }}>
            {processSteps.map((step, index) => (
              <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ marginBottom: "20px", color: "#0056b3" }}>{step.icon}</div>
                <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "black", marginBottom: "15px" }}>{step.title}</h3>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6", maxWidth: "280px" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceContactForm />
      <Footer />
    </main>
  );
}