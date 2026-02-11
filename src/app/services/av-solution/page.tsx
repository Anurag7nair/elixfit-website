"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceContactForm from "@/components/ServiceContactForm";
import Image from "next/image";
import { useState, useEffect } from "react";

// --- DATA FOR THE HERO SLIDER (UPDATED IMAGES) ---
const heroSlides = [
  {
    id: 1,
    category: "Audio Visual",
    title: "Smart Conference Rooms",
    // NEW: Stable image of a modern conference room with screens
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    id: 2,
    category: "Audio Visual",
    title: "Immersive Auditoriums",
    // NEW: Clear auditorium/stage visual
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    id: 3,
    category: "Audio Visual",
    title: "System Automation",
    // NEW IMAGE: Hand holding a smart control tablet (Automation/Interface)
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
  }
];

// --- DATA FOR THE SCROLLING GALLERY ---
const focusImages = [
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop", // Audio Equipment
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop", // Meeting Space
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop", // Modern Lounge/Screen
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop", // Video Wall
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"  // Sound Waves
];

// --- DATA FOR THE PROCESS GRID ---
const processSteps = [
  {
    title: "Needs Assessment",
    desc: "Analyzing room dimensions and usage to define audio-visual requirements.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M10 12h4"/><rect x="2" y="6" width="20" height="6" rx="1"/></svg>)
  },
  {
    title: "Acoustic Simulation",
    desc: "Mapping sound coverage to eliminate echoes and dead zones for perfect clarity.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/></svg>)
  },
  {
    title: "System Design",
    desc: "Selecting the right mix of displays, microphones, speakers, and control units.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>)
  },
  {
    title: "Seamless Integration",
    desc: "Installing hardware with concealed wiring to maintain the aesthetic of the space.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>)
  },
  {
    title: "Smart Automation",
    desc: "Centralized control systems for lighting, shades, and media with a single touch.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>)
  },
  {
    title: "Support & Maintenance",
    desc: "Ongoing calibration and updates to ensure your technology never fails.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>)
  }
];

export default function AvSolutionsPage() {
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

        {/* RIGHT: STATIC IMAGES */}
        <div style={{ width: "35%", height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", width: "100%", height: "50%" }}>
            <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Conference Screen" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", width: "100%", height: "50%" }}>
             <Image src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" alt="Audio Technology" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* --- 2. FOCUS SECTION --- */}
      <section style={{ padding: "100px 0", backgroundColor: "white", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "50px", gap: "40px" }}>
            <div style={{ flex: "1 1 400px" }}>
              <h2 style={{ fontSize: "42px", fontWeight: "bold", fontFamily: "sans-serif", color: "black", lineHeight: "1.2" }}>
                AV Solutions &<br/>Consultancy
              </h2>
            </div>
            <div style={{ flex: "1 1 400px" }}>
              <h3 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px", color: "black" }}>Our focus</h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                State-of-the-art Audio Visual solutions for modern conference rooms, auditoriums, and collaborative workspaces. We handle acoustics, system integration, and automation to ensure crystal-clear communication and seamless user experiences.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "40px", marginBottom: "40px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
             {["Acoustics", "Visuals", "Automation"].map((tab, i) => (
               <span key={i} style={{ fontSize: "16px", color: "black", fontWeight: "bold", cursor: "pointer" }}>{tab}</span>
             ))}
          </div>
        </div>
        <div style={{ width: "100%", overflow: "hidden", marginTop: "20px" }}>
          <div className="scrolling-wrapper">
             {[...focusImages, ...focusImages, ...focusImages].map((img, i) => (
               <div key={i} style={{ position: "relative", flex: "0 0 400px", height: "250px", marginRight: "20px", borderRadius: "4px", overflow: "hidden" }}>
                 <Image src={img} alt="AV Technology" fill style={{ objectFit: "cover" }} />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 3. PROCESS GRID SECTION --- */}
      <section style={{ padding: "100px 5%", backgroundColor: "#fcfcfc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", fontFamily: "sans-serif", color: "black", marginBottom: "60px" }}>
            Connecting People through Technology
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