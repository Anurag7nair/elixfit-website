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
                   style={{ objectFit: "cover", opacity: 0.5 }} 
                   priority={index === 0}
                 />
                 <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.3)" }}></div>
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
          padding: "0 20px"
      }}>
        
        {/* MAIN HEADING */}
        <h1 style={{ 
          color: "white", 
          fontSize: "clamp(28px, 5.5vw, 60px)", 
          fontFamily: "sans-serif", 
          fontWeight: "900", 
          textTransform: "uppercase",
          lineHeight: "1.1",
          letterSpacing: "1px", 
          marginBottom: "10px", // Reduced margin to bring the new line closer
          textShadow: "0 10px 30px rgba(0,0,0,0.5)" 
        }}>
          Building Strong <br />
          Foundations That Last
        </h1>

        {/* --- NEW LINE INSERTED HERE --- */}
        <p style={{ 
          color: "#d4af37", // A subtle gold/beige to make it stand out
          fontSize: "14px", 
          fontFamily: "sans-serif",
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontWeight: "600",
          marginBottom: "25px" // Space before the description paragraph
        }}>
           Elixi fitout By elixihetic
        </p>

        {/* SUBHEADING */}
        <p style={{ 
          color: "#e0e0e0", 
          fontSize: "clamp(14px, 1.5vw, 18px)", 
          fontFamily: "sans-serif",
          fontWeight: "400",
          letterSpacing: "1px",
          maxWidth: "700px",
          margin: "0 auto"
        }}>
          We lay the groundwork for structures that stand the test of time
        </p>

      </div>
    </section>
  );
}