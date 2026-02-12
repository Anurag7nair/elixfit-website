"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// 1. Import the new stylish font "Allura"
import { Allura, Montserrat } from "next/font/google";
// 2. Import Link from Next.js (optional, but standard <a> tag is fine for external links too)
import Link from "next/link"; 

// 3. Configure the fonts
const allura = Allura({ 
  subsets: ["latin"], 
  weight: ["400"] 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600"] 
});

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
          gap: "5px" 
      }}>
        
        {/* WRAPPER FOR TITLE & SUBTITLE ALIGNMENT */}
        <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-end" }}>
            
            {/* 1. MAIN TITLE */}
            <h1 className={allura.className} style={{ 
              color: "white", 
              fontSize: "clamp(70px, 13vw, 150px)", 
              fontWeight: "400", 
              textTransform: "capitalize", 
              lineHeight: "1.1",
              marginBottom: "0px", 
              textShadow: "3px 3px 0px rgba(0,0,0,0.5), 0 0 30px rgba(0,0,0,0.8)", 
              whiteSpace: "nowrap"
            }}>
              Elixi Fit Out
            </h1>

            {/* 2. SUBTITLE "by Elixi Hitec" (NOW CLICKABLE) */}
            <p className={montserrat.className} style={{ 
              color: "#F09C16", 
              fontSize: "clamp(12px, 3vw, 22px)", 
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontWeight: "600",
              marginBottom: "20px", 
              marginTop: "-10px", 
              textAlign: "right", 
              width: "100%"
            }}>
               {/* Using a standard <a> tag is best for external links. 
                  target="_blank" opens it in a new tab.
                  style={{ color: "inherit", textDecoration: "none" }} keeps your gold color and removes the blue underline.
               */}
               <a 
                 href="https://elixihitec.in/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
               >
                 by Elixi Hitec
               </a>
            </p>

        </div>

        {/* 3. TAGLINE */}
        <div style={{ position: "relative", marginTop: "10px" }}>
            <p className={montserrat.className} style={{ 
              color: "#e0e0e0", 
              fontSize: "clamp(12px, 2vw, 18px)", 
              fontWeight: "400",
              letterSpacing: "6px", 
              textTransform: "uppercase",
              whiteSpace: "nowrap" 
            }}>
              Weaving stories through spaces
            </p>
        </div>

      </div>
    </section>
  );
}