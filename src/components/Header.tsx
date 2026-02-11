"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  // State for Scroll Effect
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State for Desktop Hover Dropdown
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // State for Mobile Menu Toggle
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
          background: isMobileMenuOpen 
            ? "white" 
            : isScrolled 
              ? "rgba(0, 0, 0, 0.9)" 
              : "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
          padding: isScrolled ? "15px 0" : "30px 0", 
          boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none"
        }}
      >
        <div style={{
          maxWidth: "1400px", 
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
                 width={300} 
                 height={180} 
                 style={{ 
                     objectFit: "contain", 
                     width: "auto", 
                     height: isScrolled ? "90px" : "130px", 
                     transition: "height 0.3s ease"
                 }}
                 priority
               />
             </Link>
          </div>

          {/* =========================================
              DESKTOP NAVIGATION (Hidden on Mobile)
          ========================================= */}
          <nav className="desktop-nav" style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            
            {/* 1. HOME */}
            <Link href="/" style={navLinkStyle}>HOME</Link>

            {/* 2. ABOUT US (Moved Here) */}
            <Link href="/about-us" style={navLinkStyle}>ABOUT US</Link>

            {/* 3. SERVICES DROPDOWN */}
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
                  <div style={{ height: "1px", backgroundColor: "#eaeaea", width: "100%" }}></div>

                  <Link href="/services/brand-aligned" style={dropdownItemStyle}>Brand Aligned Interior</Link>
                  <div style={{ height: "1px", backgroundColor: "#eaeaea", width: "100%" }}></div>

                  <Link href="/services/hvac-systems" style={dropdownItemStyle}>HVAC Systems</Link>
                </div>
              )}
            </div>

            {/* 4. CONTACT US */}
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
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger (☰) Icon - White
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={isScrolled ? "white" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          top: "0", 
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          paddingTop: "150px", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
          zIndex: 40
        }}>
          {/* 1. HOME */}
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>HOME</Link>
          
          {/* 2. ABOUT US (Moved Here) */}
          <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>ABOUT US</Link>

          {/* 3. SERVICES LIST */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} style={{...mobileLinkStyle, color: "#F09C16"}}>SERVICES</Link>
            <Link href="/services/design-and-build" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubLinkStyle}>- Design & Build</Link>
            <Link href="/services/project-management" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubLinkStyle}>- Project Management</Link>
            <Link href="/services/mep-services" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubLinkStyle}>- MEP Services</Link>
            <Link href="/services/av-solution" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubLinkStyle}>- AV Solutions</Link>
            <Link href="/services/brand-aligned" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubLinkStyle}>- Brand Aligned Interior</Link>
            <Link href="/services/hvac-systems" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubLinkStyle}>- HVAC Systems</Link>
          </div>

          {/* 4. CONTACT US */}
          <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>CONTACT US</Link>
        </div>
      )}

      <style jsx global>{`
        .desktop-nav { display: none !important; }
        .mobile-btn { display: block !important; }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-btn { display: none !important; }
          .mobile-menu-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
}

// --- STYLES HELPER ---
const navLinkStyle = {
  color: "white",
  fontSize: "15px",
  fontWeight: "700",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  textDecoration: "none",
  transition: "color 0.2s",
  fontFamily: "sans-serif",
  cursor: "pointer"
};

const dropdownItemStyle = {
  color: "#333",
  fontSize: "14px",
  padding: "12px 20px",
  textDecoration: "none",
  display: "block",
  fontFamily: "sans-serif",
  transition: "background 0.2s",
};

const mobileLinkStyle = {
  textDecoration: 'none', 
  color: "black", 
  fontSize: "20px", 
  fontWeight: "bold",
  fontFamily: "sans-serif"
};

const mobileSubLinkStyle = {
  textDecoration: 'none', 
  color: "#666", 
  fontSize: "16px", 
  fontWeight: "normal",
  fontFamily: "sans-serif"
};