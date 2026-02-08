"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/images/slide1.jpg", 
  "/images/slide2.jpg",
  "/images/slide3.jpg"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ 
      position: "relative", 
      width: "100%", 
      height: "100vh", 
      backgroundColor: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      
      {/* BACKGROUND SLIDESHOW */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0, left: 0, width: "100%", height: "100%",
              opacity: isActive ? 1 : 0,
              transition: "opacity 1.5s ease-in-out", 
              zIndex: 0
            }}
          >
              <div style={{
                  width: "100%", height: "100%",
                  willChange: "transform",
                  transform: isActive ? "scale(1.15)" : "scale(1)",
                  transition: isActive ? "transform 7s ease-out" : "transform 0s linear 1.5s" 
              }}>
                  <Image
                    src={slide}
                    alt="Architecture Slide"
                    fill
                    unoptimized 
                    style={{ objectFit: "cover", opacity: 0.4 }} 
                    priority={index === 0}
                  />
                  <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)" }}></div>
              </div>
          </div>
        );
      })}

      {/* TEXT CONTENT */}
      <div style={{ 
          position: "relative", 
          zIndex: 10, 
          textAlign: "center", 
          width: "100%",          
          maxWidth: "1400px",     
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px" // Reduced gap between main blocks
      }}>
        
        {/* WRAPPER FOR TITLE & SUBTITLE ALIGNMENT */}
        <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-end" }}>
            
            {/* 1. MAIN TITLE "ELIXI FIT OUT" */}
            <h1 style={{ 
              color: "white", 
              fontSize: "clamp(32px, 6vw, 80px)", 
              fontFamily: "sans-serif", 
              fontWeight: "900", 
              textTransform: "uppercase",
              lineHeight: "1",
              letterSpacing: "2px", 
              marginBottom: "5px",
              textShadow: "0 10px 30px rgba(0,0,0,0.5)",
              whiteSpace: "nowrap" 
            }}>
              ELIXI FIT OUT
            </h1>

            {/* 2. SUBTITLE "by Elixi Hitec" - UPDATED: BIGGER SIZE */}
            <p style={{ 
              color: "#F09C16", 
              fontSize: "clamp(18px, 4vw, 32px)", // Increased size significantly
              fontFamily: "sans-serif",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: "bold",
              marginBottom: "15px", // UPDATED: Reduced margin to pull the next line closer
              textAlign: "right", 
              width: "100%"
            }}>
               by Elixi Hitec
            </p>

        </div>

        {/* 3. TAGLINE "Weaving stories..." - Professional & Closer to text above */}
        <div style={{ position: "relative", marginTop: "0px" }}>
            <p style={{ 
              color: "#e0e0e0", 
              fontSize: "clamp(16px, 2vw, 22px)", 
              fontFamily: "sans-serif", 
              fontWeight: "400",
              letterSpacing: "4px",  
              whiteSpace: "nowrap" 
            }}>
              Weaving stories through spaces
            </p>
        </div>

      </div>
    </section>
  );
}