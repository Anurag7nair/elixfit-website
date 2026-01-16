"use client";

import { useState, useEffect } from "react";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Definition",
    description: "In architecture, discovery sparks innovation, while definition brings structure to creative processes.",
    iconPath: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    ),
  },
  {
    id: "02",
    title: "Design & Development",
    description: "Designing and developing spaces where imagination meets innovation seamlessly.",
    iconPath: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    ),
  },
  {
    id: "03",
    title: "Documentation & Approval",
    description: "Embark on the journey of clarity and progress with meticulous Documentation & Approval.",
    iconPath: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM16.5 4.125c0-.621-.504-1.125-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h4.5c.621 0 1.125-.504 1.125-1.125v-1.5z" />
    ),
  },
  {
    id: "04",
    title: "Construction & Completion",
    description: "Foundation laid, structure rises, details crafted; vision realized in architectural masterpiece's completion.",
    iconPath: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    ),
  },
];

export default function WorkingProcess() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section style={{ 
        backgroundColor: "#1a1a1a", 
        padding: "100px 10%", 
        color: "white",
        overflow: "hidden" 
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* HEADER SECTION - UPDATED: Single Line & No Button */}
        <div style={{ 
            textAlign: "center", 
            marginBottom: "80px"
        }}>
          <h2 style={{ 
             fontSize: "clamp(36px, 5vw, 60px)", 
             fontFamily: "var(--font-allura), cursive", 
             lineHeight: "1",
             color: "white"
          }}>
            <span style={{ 
                fontFamily: "sans-serif", 
                fontSize: "16px", 
                letterSpacing: "0.2em", 
                textTransform: "uppercase", 
                marginRight: "15px",
                verticalAlign: "middle",
                fontWeight: "normal"
            }}>
              Our Working
            </span>
            Process
          </h2>
        </div>
        
        {/* GRID SECTION */}
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
            gap: "40px 30px", 
            alignItems: "start" 
        }}>
          {processSteps.map((step, index) => {
            const isStaggered = index % 2 !== 0;
            const marginTopValue = (isStaggered && isDesktop) ? "70px" : "0px";

            return (
            <div 
              key={step.id} 
              style={{ 
                  border: "1px solid #a67c52", 
                  padding: "40px 30px", 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "flex-start",
                  backgroundColor: "#1a1a1a", 
                  marginTop: marginTopValue,
                  maxWidth: "280px",
                  width: "100%",
                  marginLeft: "auto",
                  marginRight: "auto"
              }}
            >
              <div style={{ color: "#a67c52", width: "60px", height: "60px", marginBottom: "30px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "100%", height: "100%" }}>
                  {step.iconPath}
                </svg>
              </div>
              
              <h3 style={{ fontSize: "22px", marginBottom: "15px", fontFamily: "serif", color: "white" }}>
                {step.title}
              </h3>
              
              <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.6", fontFamily: "sans-serif" }}>
                {step.description}
              </p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}