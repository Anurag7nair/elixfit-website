"use client";

import { useState, useEffect } from "react";

// --- TESTIMONIALS DATA ---
const testimonials = [
  {
    id: 1,
    // THEME: Warm Beige/Gold
    themeColor: "#dcc8b6", 
    bgColor: "#ffffff", 
    text: "Elixi Fit-Out didn't just give interior solutions but also gave us proper consultation regarding Concrete mix design for our road projects and solution regarding project management. They manage our project with great efficiency.",
    author1: "Anil Sonawane",
    credential1: "BE Civil COEP",
    author2: "Abhay Sonawane",
    credential2: "BE Civil",
    role: "MANAGING DIRECTORS",
    company: "PASO ENGINEERS AND CONTRACTORS"
  },
  {
    id: 2,
    // THEME: Cool Blue
    themeColor: "#b6dcd9", 
    bgColor: "#faffff", 
    text: "We recently completed an extensive Constructions with Elixi fit out, and the results exceeded our expectations. From the initial design phase, they were transparent about costs and provided a realistic timeline. Also gave Best architectural solutions regarding our projects.",
    author1: "Anand Sunil Ambore",
    credential1: "M.Tech Structure",
    author2: null,
    credential2: null,
    role: "MD",
    company: "Sai Constructions, Pune"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-switch every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ 
      position: "relative",
      width: "100%",
      minHeight: "750px", // Increased height slightly to handle the spread
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden" // Hides anything that goes too far off screen
    }}>
      
      {/* 1. PARALLAX BACKGROUND */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
        backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", 
        zIndex: 0
      }}>
        <div style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.2)" }}></div>
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div style={{ 
        position: "relative", zIndex: 10, maxWidth: "1100px", width: "90%",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 0"
      }}>
        
         <div style={{ display: "flex", alignItems: "center", width: "100%", position: "relative" }}>
             
             {/* Beige Decorative Block (Static) */}
             <div style={{
                 flexShrink: 0, width: "30%", height: "300px",
                 backgroundColor: "#e6dace", marginRight: "-80px", zIndex: 1
             }} className="hidden-on-mobile"></div>

             {/* TESTIMONIAL CARDS CONTAINER */}
             <div style={{ position: "relative", flexGrow: 1, maxWidth: "600px", height: "600px" }}>
                
                {testimonials.map((item, index) => {
                  const isActive = index === activeIndex;
                  
                  return (
                    <div 
                      key={item.id}
                      style={{
                        backgroundColor: item.bgColor,
                        padding: "60px",
                        boxShadow: "0 15px 40px rgba(0,0,0,0.15)", // Slightly stronger shadow
                        width: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)", 
                        borderTop: `4px solid ${item.themeColor}`,
                        
                        // --- UPDATED ANIMATION LOGIC ---
                        ...(isActive ? {
                          // FRONT CARD
                          zIndex: 10,
                          opacity: 1,
                          transform: "translateX(0) scale(1)",
                          filter: "blur(0px)",
                        } : {
                          // BACK CARD (Waiting on the right)
                          zIndex: 5,
                          opacity: 0.85, // Higher opacity so it's clearly visible
                          // Moved 120px to the RIGHT so it sticks out visibly
                          transform: "translateX(120px) translateY(20px) scale(0.92)", 
                          filter: "blur(3px)", // Blured text so it doesn't distract
                          pointerEvents: "none",
                          // Optional: rotate slightly for a 'fanned' deck look
                          // rotate: "2deg" 
                        })
                      }}
                    >
                      {/* CARD CONTENT */}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                          <span style={{ width: "12px", height: "12px", backgroundColor: item.themeColor }}></span>
                          <span style={{ textTransform: "uppercase", fontSize: "12px", letterSpacing: "2px", color: "#999", fontWeight: "bold", fontFamily: "sans-serif" }}>
                              Testimonials
                          </span>
                      </div>

                      <h2 style={{ fontSize: "36px", fontFamily: "serif", color: "#1a1a1a", marginBottom: "30px", lineHeight: "1.2" }}>
                          What Our Clients Say
                      </h2>

                      <div style={{ width: "100%", height: "1px", backgroundColor: "#eee", marginBottom: "30px", position: "relative" }}>
                        <div style={{ position: "absolute", left: 0, top: 0, height: "1px", width: "50px", backgroundColor: item.themeColor }}></div>
                      </div>

                      <div style={{ fontSize: "60px", color: item.themeColor, lineHeight: "1", fontFamily: "serif", marginBottom: "10px" }}>“</div>

                      <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.8", fontFamily: "sans-serif", marginBottom: "30px", minHeight: "100px" }}>
                          {item.text}
                      </p>

                      <div>
                          <h4 style={{ fontSize: "18px", fontFamily: "serif", fontWeight: "bold", color: "#1a1a1a", marginBottom: "5px" }}>
                              {item.author1} <span style={{ fontSize: "14px", fontWeight: "normal", color: "#666" }}>({item.credential1})</span>
                          </h4>
                          
                          {item.author2 && (
                            <h4 style={{ fontSize: "18px", fontFamily: "serif", fontWeight: "bold", color: "#1a1a1a" }}>
                                {item.author2} <span style={{ fontSize: "14px", fontWeight: "normal", color: "#666" }}>({item.credential2})</span>
                            </h4>
                          )}
                          
                          <p style={{ fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "1px", marginTop: "10px", fontFamily: "sans-serif", lineHeight: "1.5" }}>
                              {item.role} <br/>
                              {item.company}
                          </p>
                      </div>

                    </div>
                  );
                })}

             </div>
         </div>

      </div>
    </section>
  );
}