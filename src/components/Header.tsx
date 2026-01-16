"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  // State to manage the dropdown visibility
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        transition: "all 0.3s ease",
        background: isScrolled 
          ? "rgba(0, 0, 0, 0.9)" 
          : "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
        padding: isScrolled ? "10px 0" : "20px 0"
      }}
    >
      <div style={{
        maxWidth: "1200px", 
        width: "90%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        
        {/* LOGO */}
        <div style={{ position: "relative", zIndex: 50 }}>
           <Link href="/">
             <Image 
               src="/logo.png" 
               alt="Company Logo" 
               width={140} 
               height={90} 
               style={{ objectFit: "contain", width: "auto", height: "90px" }}
               priority
             />
           </Link>
        </div>

        {/* NAVIGATION */}
        <nav style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          
          {/* HOME LINK */}
          <Link href="/" style={navLinkStyle}>HOME</Link>

          {/* SERVICES DROPDOWN CONTAINER */}
          <div 
            style={{ position: "relative", padding: "10px 0" }}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            {/* The Main "Services" Link */}
            <Link 
              href="/services" 
              style={navLinkStyle}
            >
              SERVICES <span style={{ fontSize: "10px", marginLeft: "5px" }}>▼</span>
            </Link>

            {/* THE DROPDOWN MENU */}
            {isServicesOpen && (
              <div style={{
                position: "absolute",
                top: "100%", // Pushes it right below the text
                left: "50%",
                transform: "translateX(-50%)", // Centers it relative to "Services"
                backgroundColor: "white",
                minWidth: "240px", // Slightly wider to fit AV Solution text
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
                borderRadius: "2px",
                padding: "10px 0",
                display: "flex",
                flexDirection: "column",
                zIndex: 100
              }}>
                {/* Dropdown Item 1 */}
                <Link href="/services/design-and-build" style={dropdownItemStyle}>
                  Design and Build
                </Link>
                <div style={{ height: "1px", backgroundColor: "#eaeaea", width: "100%" }}></div>

                {/* Dropdown Item 2 */}
                <Link href="/services/project-management" style={dropdownItemStyle}>
                  Project Management
                </Link>
                <div style={{ height: "1px", backgroundColor: "#eaeaea", width: "100%" }}></div>

                {/* Dropdown Item 3 */}
                <Link href="/services/mep-services" style={dropdownItemStyle}>
                  MEP Services
                </Link>
                <div style={{ height: "1px", backgroundColor: "#eaeaea", width: "100%" }}></div>

                {/* Dropdown Item 4 (NEW) */}
                <Link href="/services/av-solution" style={dropdownItemStyle}>
                  AV Solution and Consultancy
                </Link>
              </div>
            )}
          </div>

          {/* OTHER LINKS */}
          <Link href="/about-us" style={navLinkStyle}>ABOUT US</Link>
          <Link href="/contact-us" style={navLinkStyle}>CONTACT US</Link>

        </nav>

      </div>
    </header>
  );
}

// --- STYLES HELPER ---
const navLinkStyle = {
  color: "white",
  fontSize: "14px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  textDecoration: "none",
  transition: "color 0.2s",
  fontFamily: "sans-serif",
  cursor: "pointer"
};

const dropdownItemStyle = {
  color: "#333", // Black text
  fontSize: "14px",
  padding: "12px 20px",
  textDecoration: "none",
  display: "block",
  fontFamily: "sans-serif",
  transition: "background 0.2s",
};