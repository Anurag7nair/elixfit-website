"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  // State for Scroll Effect (From your code)
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State for Desktop Hover Dropdown (From your code)
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // State for Mobile Menu Toggle (From my code)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          transition: "all 0.3s ease",
          // Use your specific background logic
          background: isMobileMenuOpen 
            ? "white" // Mobile menu open = White background
            : isScrolled 
              ? "rgba(0, 0, 0, 0.9)" 
              : "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
          padding: isScrolled ? "10px 0" : "20px 0",
          boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none"
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
          
          {/* === LOGO === */}
          <div style={{ position: "relative", zIndex: 60 }}>
             <Link href="/">
               <Image 
                 src="/logo.png" 
                 alt="Company Logo" 
                 width={140} 
                 height={90} 
                 style={{ objectFit: "contain", width: "auto", height: "50px" }}
                 priority
               />
             </Link>
          </div>

          {/* =========================================
              DESKTOP NAVIGATION (Hidden on Mobile)
          ========================================= */}
          <nav className="desktop-nav" style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            
            {/* HOME */}
            <Link href="/" style={navLinkStyle}>HOME</Link>

            {/* SERVICES DROPDOWN */}
            <div 
              style={{ position: "relative", padding: "10px 0" }}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/services" style={navLinkStyle}>
                SERVICES <span style={{ fontSize: "10px", marginLeft: "5px" }}>▼</span>
              </Link>

              {/* The Hover Menu */}
              {isServicesOpen && (
                <div style={{
                  position: "absolute",
                  top: "100%", 
                  left: "50%",
                  transform: "translateX(-50%)", 
                  backgroundColor: "white",
                  minWidth: "240px", 
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
                  borderRadius: "2px",
                  padding: "10px 0",
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 100
                }}>
                  <Link href="/services/design-and-build" style={dropdownItemStyle}>Design and Build</Link>
                  <div style={{ height: "1px", backgroundColor: "#eaeaea", width: "100%" }}></div>
                  
                  <Link href="/services/project-management" style={dropdownItemStyle}>Project Management</Link>
                  <div style={{ height: "1px", backgroundColor: "#eaeaea", width: "100%" }}></div>
                  
                  <Link href="/services/mep-services" style={dropdownItemStyle}>MEP Services</Link>
                  <div style={{ height: "1px", backgroundColor: "#eaeaea", width: "100%" }}></div>
                  
                  <Link href="/services/av-solution" style={dropdownItemStyle}>AV Solution and Consultancy</Link>
                </div>
              )}
            </div>

            {/* OTHER LINKS */}
            <Link href="/about-us" style={navLinkStyle}>ABOUT US</Link>
            <Link href="/contact-us" style={navLinkStyle}>CONTACT US</Link>

          </nav>


          {/* =========================================
              MOBILE HAMBURGER BUTTON (Hidden on Desktop)
          ========================================= */}
          <button 
            className="mobile-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", zIndex: 60 }}
          >
            {isMobileMenuOpen ? (
              // Close (X) Icon - Black
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger (☰) Icon - White (unless scrolled/menu open)
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={isScrolled ? "white" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

        </div>
      </header>

      {/* =========================================
          MOBILE MENU LIST (Visible when Open)
      ========================================= */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" style={{
          position: "fixed",
          top: "80px", // Pushes it below the header
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
          zIndex: 40
        }}>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>HOME</Link>
          
          {/* Mobile Services Section */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} style={{...mobileLinkStyle, color: "#F09C16"}}>SERVICES</Link>
            <Link href="/services/design-and-build" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubLinkStyle}>- Design & Build</Link>
            <Link href="/services/project-management" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubLinkStyle}>- Project Management</Link>
            <Link href="/services/mep-services" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubLinkStyle}>- MEP Services</Link>
            <Link href="/services/av-solution" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubLinkStyle}>- AV Solutions</Link>
          </div>

          <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>ABOUT US</Link>
          <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>CONTACT US</Link>
        </div>
      )}

      {/* =========================================
          CSS STYLES (Responsive Logic)
      ========================================= */}
      <style jsx global>{`
        /* DEFAULT (MOBILE VIEW) */
        .desktop-nav {
          display: none !important; /* Hide complicated desktop nav on mobile */
        }
        .mobile-btn {
          display: block !important; /* Show hamburger */
        }

        /* DESKTOP VIEW (Screens wider than 768px) */
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important; /* Show desktop nav */
          }
          .mobile-btn {
            display: none !important; /* Hide hamburger */
          }
          .mobile-menu-overlay {
            display: none !important; /* Safety: Hide mobile menu on desktop */
          }
        }
      `}</style>
    </>
  );
}

// --- STYLES HELPER ---

// Desktop Nav Link Style
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

// Desktop Dropdown Item Style
const dropdownItemStyle = {
  color: "#333", // Black text
  fontSize: "14px",
  padding: "12px 20px",
  textDecoration: "none",
  display: "block",
  fontFamily: "sans-serif",
  transition: "background 0.2s",
};

// Mobile Main Link Style
const mobileLinkStyle = {
  textDecoration: 'none', 
  color: "black", 
  fontSize: "18px", 
  fontWeight: "bold",
  fontFamily: "sans-serif"
};

// Mobile Sub Link (Services) Style
const mobileSubLinkStyle = {
  textDecoration: 'none', 
  color: "#666", 
  fontSize: "15px", 
  fontWeight: "normal",
  fontFamily: "sans-serif"
};