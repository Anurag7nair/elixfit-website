"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        // If menu is open (on mobile), background is white. 
        // Otherwise, it uses a dark transparent background for the "premium" look.
        backgroundColor: isMenuOpen ? "white" : "rgba(0,0,0,0.6)",
        backdropFilter: "blur(5px)" 
      }}
    >
      <div style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "15px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        
        {/* === LOGO === */}
        <Link href="/">
           {/* Ensure this path matches your logo file in the public folder */}
           <img 
             src="/logo.png" 
             alt="Elixi Fit-Out" 
             style={{ height: "50px", objectFit: "contain" }} 
           />
        </Link>


        {/* === DESKTOP NAVIGATION (Restored to Original Look) === */}
        {/* 'hidden md:flex' ensures this ONLY shows on Desktop/Tablet */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-orange-500 font-bold transition-colors" style={{ textDecoration: 'none', color: 'white', fontSize: '16px' }}>
            HOME
          </Link>
          <Link href="/services" className="text-white hover:text-orange-500 font-bold transition-colors" style={{ textDecoration: 'none', color: 'white', fontSize: '16px' }}>
            SERVICES
          </Link>
          <Link href="/about-us" className="text-white hover:text-orange-500 font-bold transition-colors" style={{ textDecoration: 'none', color: 'white', fontSize: '16px' }}>
            ABOUT US
          </Link>
          
          {/* Original Desktop Contact Button */}
          <Link href="/contact-us" style={{
            backgroundColor: "#F09C16", // The specific orange you like
            color: "white",
            padding: "10px 25px",
            borderRadius: "5px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "16px"
          }}>
            CONTACT US
          </Link>
        </nav>


        {/* === MOBILE MENU BUTTON (Only for Mobile) === */}
        {/* 'md:hidden' ensures this ONLY shows on Mobile */}
        <button 
          className="md:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", zIndex: 60 }}
        >
          {/* Toggle Icon color: Black if background is white, White if background is dark */}
          {isMenuOpen ? (
            // Close (X) Icon - Black
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger (☰) Icon - White
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

      </div>

      {/* === MOBILE DROPDOWN MENU === */}
      {isMenuOpen && (
        <div style={{
          position: "absolute",
          top: "100%", 
          left: 0,
          width: "100%",
          backgroundColor: "white",
          padding: "30px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
          boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
          borderTop: "1px solid #eee"
        }}>
          <Link href="/" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: "black", fontSize: "18px", fontWeight: "bold" }}>
            HOME
          </Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: "black", fontSize: "18px", fontWeight: "bold" }}>
            SERVICES
          </Link>
          <Link href="/about-us" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: "black", fontSize: "18px", fontWeight: "bold" }}>
            ABOUT US
          </Link>
          <Link href="/contact-us" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: "#F09C16", fontSize: "18px", fontWeight: "bold" }}>
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
}