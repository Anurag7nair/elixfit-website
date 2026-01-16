"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceContactForm from "@/components/ServiceContactForm";
import Image from "next/image";
import { useState, useEffect } from "react";

// --- DATA FOR THE HERO SLIDER ---
const heroSlides = [
  {
    id: 1,
    category: "Project Management",
    title: "Project Management",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    id: 2,
    category: "Site Supervision",
    title: "On-Site Coordination",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    id: 3,
    category: "Execution",
    title: "Timely Delivery",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
  }
];

const focusImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop", 
];

const processSteps = [
  {
    title: "Discovery Meetings",
    desc: "Detailed discussion to understand your goals, budget, and needs.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>)
  },
  {
    title: "Design Development",
    desc: "Access a custom plan, including layout, architecture, and drawings.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M2 17h20"/><path d="M2 7h20"/><path d="M6 12v5"/><path d="M18 12v5"/><path d="M6 7v5"/><path d="M18 7v5"/></svg>)
  },
  {
    title: "Project Coordination",
    desc: "We keep the project on track and budget so the construction supervision wraps up our full-service support.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>)
  },
  {
    title: "Quality Control",
    desc: "Regular checks to maintain superior quality and brand-aligned designs.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>)
  },
  {
    title: "Project Handover",
    desc: "A final walkthrough to provide documents like warranties and care instruction.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>)
  },
  {
    title: "After Service Support",
    desc: "We add the last details to bring the interior design to life.",
    icon: (<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>)
  }
];

export default function ProjectManagementPage() {
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
            <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Laptop Planning" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", width: "100%", height: "50%" }}>
             <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" alt="Construction Worker" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* --- 2. FOCUS SECTION --- */}
      <section style={{ padding: "100px 0", backgroundColor: "white", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "50px", gap: "40px" }}>
            <div style={{ flex: "1 1 400px" }}>
              <h2 style={{ fontSize: "42px", fontWeight: "bold", fontFamily: "sans-serif", color: "black", lineHeight: "1.2" }}>
                Project Management
              </h2>
            </div>
            <div style={{ flex: "1 1 400px" }}>
              <h3 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px", color: "black" }}>Our focus</h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                With our interior design project management services, every interior design project is unique and managed on-time. We are dedicated to making sure the project runs smoothly till the end.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "40px", marginBottom: "40px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
             {["Co-ordination", "Installation", "Follow-ups"].map((tab, i) => (
               <span key={i} style={{ fontSize: "16px", color: "black", fontWeight: "bold", cursor: "pointer" }}>{tab}</span>
             ))}
          </div>
        </div>
        <div style={{ width: "100%", overflow: "hidden", marginTop: "20px" }}>
          <div className="scrolling-wrapper">
             {[...focusImages, ...focusImages, ...focusImages].map((img, i) => (
               <div key={i} style={{ position: "relative", flex: "0 0 400px", height: "250px", marginRight: "20px", borderRadius: "4px", overflow: "hidden" }}>
                 <Image src={img} alt="PM Gallery" fill style={{ objectFit: "cover" }} />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- 3. PROCESS GRID SECTION --- */}
      <section style={{ padding: "100px 5%", backgroundColor: "#fcfcfc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", fontFamily: "sans-serif", color: "black", marginBottom: "60px" }}>
            Project Management Office Interior with Elixi
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