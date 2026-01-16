"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
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
             <img 
               src="/logo.png" 
               alt="Elixi Fit-Out" 
               style={{ height: "50px", objectFit: "contain" }} 
             />
          </Link>

          {/* === DESKTOP NAVIGATION === */}
          {/* We use the class 'desktop-nav' which we define in styles below */}
          <nav className="desktop-nav" style={{ alignItems: "center", gap: "30px" }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
              HOME
            </Link>
            <Link href="/services" style={{ textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
              SERVICES
            </Link>
            <Link href="/about-us" style={{ textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
              ABOUT US
            </Link>
            
            <Link href="/contact-us" style={{
              backgroundColor: "#F09C16",
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

          {/* === MOBILE MENU BUTTON === */}
          {/* We use the class 'mobile-btn' which we define in styles below */}
          <button 
            className="mobile-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", zIndex: 60 }}
          >
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
          <div className="mobile-menu-dropdown">
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

      {/* === CSS STYLES TO HANDLE RESPONSIVENESS === */}
      <style jsx global>{`
        /* DEFAULT (MOBILE VIEW) */
        .desktop-nav {
          display: none !important; /* Hide links on mobile */
        }
        .mobile-btn {
          display: block !important; /* Show hamburger on mobile */
        }
        .mobile-menu-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: white;
          padding: 30px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
          border-top: 1px solid #eee;
        }

        /* DESKTOP VIEW (Screens wider than 768px) */
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important; /* Show links on desktop */
          }
          .mobile-btn {
            display: none !important; /* Hide hamburger on desktop */
          }
          .mobile-menu-dropdown {
            display: none !important; /* Safety: Hide dropdown on desktop */
          }
        }
      `}</style>
    </>
  );
}