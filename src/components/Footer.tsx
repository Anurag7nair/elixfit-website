"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: "white", 
      padding: "80px 20px", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      textAlign: "center",
      borderTop: "1px solid #eaeaea" // Subtle border to separate from content
    }}>
      
      {/* 1. LOGO */}
      <div style={{ marginBottom: "30px" }}>
        <Image 
          src="/logo.png" // Using your local logo
          alt="Company Logo" 
          width={80} 
          height={80} 
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* 2. TAGLINE */}
      <h3 style={{ 
        fontSize: "14px", 
        letterSpacing: "1px", 
        textTransform: "uppercase", 
        color: "#1a1a1a",
        marginBottom: "30px",
        fontFamily: "sans-serif",
        fontWeight: "bold"
      }}>
        Building Strong Foundations That Last
      </h3>

      {/* 3. NAVIGATION LINKS */}
      <div style={{ 
        display: "flex", 
        gap: "25px", 
        marginBottom: "30px",
        fontFamily: "sans-serif",
        fontSize: "15px"
      }}>
        {["About", "Services", "Contact"].map((item) => (
          <Link 
            key={item} 
            href={`/${item.toLowerCase()}`}
            style={{ 
              color: "#1a1a1a", 
              textDecoration: "none", 
              fontWeight: "500" 
            }}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* 4. CONTACT INFO */}
      <div style={{ marginBottom: "35px", fontFamily: "sans-serif", fontSize: "15px", color: "#1a1a1a" }}>
        <p style={{ marginBottom: "8px" }}>elixifiout@gmail.com </p>
        <p>9673135333</p>
      </div>

      {/* 5. SOCIAL ICONS (SVG) */}
      <div style={{ 
        display: "flex", 
        gap: "20px", 
        marginBottom: "40px",
        alignItems: "center"
      }}>
        {/* Instagram */}
        <a href="#" aria-label="Instagram">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "black" }}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>

        {/* Facebook */}
        <a href="#" aria-label="Facebook">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "black" }}>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>

        {/* X (Twitter) */}
        <a href="#" aria-label="X">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="black" style={{ color: "black" }}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a href="#" aria-label="WhatsApp">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "black" }}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="#" aria-label="LinkedIn">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "black" }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>

      {/* 6. COPYRIGHT */}
      <div style={{ fontSize: "14px", color: "#1a1a1a", fontFamily: "sans-serif" }}>
        ©2026. All rights reserved.
      </div>

    </footer>
  );
}