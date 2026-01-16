"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Ensures we can use the logo image

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        // If the menu is open, make background white. Otherwise, transparent (glass effect)
        backgroundColor: isMenuOpen ? "white" : "rgba(0,0,0,0.3)",
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
           {/* Replace '/logo.png' with your actual logo path if different */}
           <img 
             src="/logo.png" 
             alt="Elixi Fit-Out" 
             style={{ height: "50px", objectFit: "contain" }} 
           />
        </Link>


        {/* === DESKTOP NAVIGATION (Hidden on Mobile) === */}
        {/* 'hidden md:flex' means: Hidden on mobile, Flex on Medium screens and up */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-orange-500 font-bold transition-colors">
            HOME
          </Link>
          <Link href="/services" className="text-white hover:text-orange-500 font-bold transition-colors">
            SERVICES
          </Link>
          <Link href="/about-us" className="text-white hover:text-orange-500 font-bold transition-colors">
            ABOUT US
          </Link>
          
          {/* Contact Us Button */}
          <Link href="/contact-us" style={{
            backgroundColor: "#F09C16", // Orange
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            fontWeight: "bold",
            textDecoration: "none"
          }}>
            CONTACT US
          </Link>
        </nav>


        {/* === MOBILE MENU BUTTON (Visible ONLY on Mobile) === */}
        {/* 'md:hidden' means: Hidden on Medium screens and up (Desktop) */}
        <button 
          className="md:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {/* Toggle between Hamburger (☰) and Close (X) Icon */}
          {isMenuOpen ? (
            // Close Icon (X) - Black color because background is white
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger Icon (☰) - White color to contrast with dark background
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

      </div>

      {/* === MOBILE MENU DROPDOWN === */}
      {/* Only shows when isMenuOpen is true */}
      {isMenuOpen && (
        <div style={{
          position: "absolute",
          top: "100%", // Right below the header
          left: 0,
          width: "100%",
          backgroundColor: "white",
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
        }}>
          <Link href="/" onClick={() => setIsMenuOpen(false)} style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}>
            HOME
          </Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}>
            SERVICES
          </Link>
          <Link href="/about-us" onClick={() => setIsMenuOpen(false)} style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}>
            ABOUT US
          </Link>
          <Link href="/contact-us" onClick={() => setIsMenuOpen(false)} style={{ color: "#F09C16", fontSize: "18px", fontWeight: "bold" }}>
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
}