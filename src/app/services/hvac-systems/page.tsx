"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceContactForm from "@/components/ServiceContactForm";
import Image from "next/image";
import { useState, useEffect } from "react";

// --- HERO SLIDER IMAGES (Reusing working MEP images) ---
const heroSlides = [
  {
    id: 1,
    category: "HVAC",
    title: "Air Quality Control",
    // Reused from your MEP page (Mechanical)
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "HVAC",
    title: "Thermal Comfort",
    // Reused from your MEP page (Ventilation System)
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "HVAC",
    title: "Energy Efficiency",
    // Reused from your MEP page (Plumbing/Pipes)
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2070&auto=format&fit=crop"
  }
];

// --- FOCUS GALLERY IMAGES (Reusing working MEP images) ---
const focusImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
];

// --- PROCESS GRID ---
const processSteps = [
  {
    title: "Load Calculation",
    desc: "Detailed heat load analysis to determine precise cooling and heating requirements.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M12 12h.01"/><path d="M12 16h.01"/><path d="M8 12h.01"/><path d="M8 16h.01"/><path d="M16 12h.01"/><path d="M16 16h.01"/></svg>)
  },
  {
    title: "System Design",
    desc: "Designing ductwork and piping layouts for optimal airflow and efficiency.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M2 12l5-5"/><path d="M2 12l5 5"/><path d="M22 12l-5-5"/><path d="M22 12l-5 5"/></svg>)
  },
  {
    title: "Equipment Selection",
    desc: "Choosing the right VRF, Chillers, or Split systems based on site constraints.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M12 4v16"/><path d="M8 10h8"/><path d="M8 14h8"/></svg>)
  },
  {
    title: "Installation",
    desc: "Expert installation of units, ducts, and vents with minimal disruption.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>)
  },
  {
    title: "Air Quality Testing",
    desc: "Ensuring proper ventilation and filtration for a healthy work environment.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h2"/><path d="M20 12h2"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></svg>)
  },
  {
    title: "Maintenance",
    desc: "Ongoing support and servicing to keep your systems running smoothly.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>)
  }
];

export default function HvacServicesPage() {
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

        {/* RIGHT: STATIC IMAGES (Reusing working MEP images) */}
        <div style={{ width: "35%", height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", width: "100%", height: "50%" }}>
            {/* Reused from MEP (Industrial) */}
            <Image src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070&auto=format&fit=crop" alt="Industrial HVAC" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", width: "100%", height: "50%" }}>
             {/* Reused from MEP (Electrical) */}
             <Image src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" alt="Systems" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* --- 2. FOCUS SECTION --- */}
      <section style={{ padding: "100px 0", backgroundColor: "white", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "50px", gap: "40px" }}>
            <div style={{ flex: "1 1 400px" }}>
              <h2 style={{ fontSize: "42px", fontWeight: "bold", fontFamily: "sans-serif", color: "black", lineHeight: "1.2" }}>
                HVAC System<br/>Solutions
              </h2>
            </div>
            <div style={{ flex: "1 1 400px" }}>
              <h3 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px", color: "black" }}>Our focus</h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                We prioritize thermal comfort and indoor air quality. Our advanced HVAC solutions are designed to maintain optimal temperatures, reduce energy costs, and ensure a healthy breathing environment for every occupant in your workspace.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "40px", marginBottom: "40px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
             {["Comfort", "Efficiency", "Health"].map((tab, i) => (
               <span key={i} style={{ fontSize: "16px", color: "black", fontWeight: "bold", cursor: "pointer" }}>{tab}</span>
             ))}
          </div>
        </div>
        <div style={{ width: "100%", overflow: "hidden", marginTop: "20px" }}>
          <div className="scrolling-wrapper">
             {[...focusImages, ...focusImages, ...focusImages].map((img, i) => (
               <div key={i} style={{ position: "relative", flex: "0 0 400px", height: "250px", marginRight: "20px", borderRadius: "4px", overflow: "hidden" }}>
                 <Image src={img} alt="HVAC Gallery" fill style={{ objectFit: "cover" }} />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 3. PROCESS GRID SECTION --- */}
      <section style={{ padding: "100px 5%", backgroundColor: "#fcfcfc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", fontFamily: "sans-serif", color: "black", marginBottom: "60px" }}>
            Climate Control Expertise with Elixi
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