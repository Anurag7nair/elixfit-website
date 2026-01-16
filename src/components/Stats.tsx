"use client";

import { useState, useEffect, useRef } from "react";

const statsData = [
  { id: 1, value: 50, suffix: "+", label: "Projects Completed" },
  { id: 2, value: 250, suffix: "+", label: "Happy Clients" },
  { id: 3, value: 15, suffix: "+", label: "Awards Won" },
  { id: 4, value: 10, suffix: "+", label: "Years Experience" },
];

// Helper Component that accepts a 'start' prop
const AnimatedCounter = ({ target, suffix, start }: { target: number; suffix: string; start: boolean }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Only animate if 'start' is true and we haven't started yet
    if (!start || hasStarted) return;

    setHasStarted(true); // Lock it so it only runs once

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * target));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, start, hasStarted]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function Stats() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section comes into view, start animation
        if (entry.isIntersecting) {
          setIsInView(true);
          // Stop observing once visible (so it doesn't reset)
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} // Attach ref here to detect scroll
      style={{ 
        position: "relative",
        width: "100%",
        padding: "100px 20px",
        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      
      {/* Dark Overlay */}
      <div style={{ 
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%", 
        backgroundColor: "rgba(0, 0, 0, 0.7)", zIndex: 0 
      }}></div>

      {/* Content Container */}
      <div style={{ 
        position: "relative", zIndex: 10, maxWidth: "1200px", width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "50px",
        textAlign: "center"
      }}>
        
        {statsData.map((stat) => (
          <div key={stat.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            
            <span style={{ 
              fontSize: "60px", 
              fontWeight: "bold", 
              color: "#e3d5c6", 
              fontFamily: "var(--font-playfair), serif", 
              lineHeight: "1",
              marginBottom: "15px"
            }}>
              {/* Pass the 'isInView' state to start animation */}
              <AnimatedCounter target={stat.value} suffix={stat.suffix} start={isInView} />
            </span>

            <span style={{ 
              color: "white", 
              fontSize: "14px", 
              textTransform: "uppercase", 
              letterSpacing: "2px",
              fontFamily: "sans-serif"
            }}>
              {stat.label}
            </span>

          </div>
        ))}

      </div>
    </section>
  );
}