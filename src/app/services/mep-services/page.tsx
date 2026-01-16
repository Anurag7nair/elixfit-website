"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceContactForm from "@/components/ServiceContactForm";
import Image from "next/image";
import { useState, useEffect } from "react";

// --- DATA FOR THE HERO SLIDER (Left Side) ---
const heroSlides = [
  {
    id: 1,
    category: "MEP",
    title: "Mechanical",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    id: 2,
    category: "MEP",
    title: "Electrical",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
  },
  {
    id: 3,
    category: "MEP",
    title: "Plumbing",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2070&auto=format&fit=crop" 
  }
];

// --- DATA FOR THE SCROLLING GALLERY ---
const focusImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop",
];

// --- DATA FOR THE PROCESS GRID ---
const processSteps = [
  {
    title: "Schematics",
    desc: "Access detailed schematics that facilitate understanding and implementation.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M2 12l5-5"/><path d="M2 12l5 5"/><path d="M22 12l-5-5"/><path d="M22 12l-5 5"/><circle cx="12" cy="12" r="3"/></svg>)
  },
  {
    title: "Layouts",
    desc: "Develop efficient layouts that optimize space, airflow, and maintenance access.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>)
  },
  {
    title: "HVAC Equipment Selection",
    desc: "Assess facility requirements to choose the most suitable HVAC systems for maximum performance.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/><circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 0 1 0 20"/><path d="M2 12a15 15 0 0 1 20 0"/></svg>)
  },
  {
    title: "Distribution and Load Management",
    desc: "Implement detailed load analysis to enhance electrical distribution efficiency and reliability.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>)
  },
  {
    title: "Sustainable Systems and Solutions",
    desc: "Know about new technologies and systems that would make your office life efficient.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 14.9L22 13l-1.6-1.6c.1-.4.2-.9.2-1.4 0-.5-.1-1-.2-1.4l1.6-1.6-1.8-1.8-1.6 1.6c-.4-.1-.9-.2-1.4-.2-.5 0-1 .1-1.4.2L13 2 11.2 3.8l1.6 1.6c-.1.4-.2.9-.2 1.4 0 .5.1 1 .2 1.4l-1.6 1.6 1.8 1.8 1.6-1.6c.4.1.9.2 1.4.2.5 0 1-.1 1.4-.2l1.6 1.6 1.8-1.8z"/><circle cx="12" cy="12" r="3"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/></svg>)
  },
  {
    title: "Contact us",
    desc: "For more MEP services related inquiries, please contact us for expert assistance.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>)
  }
];

export default function MepServicesPage() {
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

        {/* RIGHT: STATIC IMAGES - WHITE LINE REMOVED */}
        <div style={{ width: "35%", height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", width: "100%", height: "50%" }}>
            <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" alt="Ventilation System" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", width: "100%", height: "50%" }}>
             <Image src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070&auto=format&fit=crop" alt="Industrial Pipes" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* --- 2. FOCUS SECTION --- */}
      <section style={{ padding: "100px 0", backgroundColor: "white", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "50px", gap: "40px" }}>
            <div style={{ flex: "1 1 400px" }}>
              <h2 style={{ fontSize: "42px", fontWeight: "bold", fontFamily: "sans-serif", color: "black", lineHeight: "1.2" }}>
                MEP Engineering<br/>Services
              </h2>
            </div>
            <div style={{ flex: "1 1 400px" }}>
              <h3 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px", color: "black" }}>Our focus</h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Our MEP engineering design services provide sustainable solutions for projects across industries such as Offices, Restaurants, Hospitals, Commercial Buildings, Industrial factories, and others.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "40px", marginBottom: "40px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
             {["Energy Efficient", "Sustainable", "Safety"].map((tab, i) => (
               <span key={i} style={{ fontSize: "16px", color: "black", fontWeight: "bold", cursor: "pointer" }}>{tab}</span>
             ))}
          </div>
        </div>
        <div style={{ width: "100%", overflow: "hidden", marginTop: "20px" }}>
          <div className="scrolling-wrapper">
             {[...focusImages, ...focusImages, ...focusImages].map((img, i) => (
               <div key={i} style={{ position: "relative", flex: "0 0 400px", height: "250px", marginRight: "20px", borderRadius: "4px", overflow: "hidden" }}>
                 <Image src={img} alt="MEP Gallery" fill style={{ objectFit: "cover" }} />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 3. PROCESS GRID SECTION --- */}
      <section style={{ padding: "100px 5%", backgroundColor: "#fcfcfc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", fontFamily: "sans-serif", color: "black", marginBottom: "60px" }}>
            MEP Engineering Services with Elixi
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