"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

// --- 1. DATA: IMAGES ---
const projectImages = [
  // Renders / Views
  { src: "/consultancyimages/FINAL PRINT_3 - Photo.jpg", alt: "Final Print View 3" },
  { src: "/consultancyimages/FINAL PRINT_5 - Photo.jpg", alt: "Final Print View 5" },
  { src: "/consultancyimages/FRONT VIEW.png", alt: "Front Elevation" },
  { src: "/consultancyimages/FRONT-RIGHT CORNER VIEW.png", alt: "Corner View" },
  { src: "/consultancyimages/NIGHT VIEW.png", alt: "Night Perspective" },

  // Site Photos
  { src: "/consultancyimages/20241001_135542.jpg", alt: "Site Photo" },
  { src: "/consultancyimages/20250111_141907.jpg", alt: "Site Photo" },
  { src: "/consultancyimages/20251226_145418.jpg", alt: "Site Photo" },
  { src: "/consultancyimages/20251226_145516.jpg", alt: "Site Photo" },
  { src: "/consultancyimages/IMG-20240321-WA0032.jpg", alt: "Site Progress" },
  
  // June 2024
  { src: "/consultancyimages/IMG-20240613-WA0016.jpg", alt: "Site Progress" },
  { src: "/consultancyimages/IMG-20240613-WA0017.jpg", alt: "Site Progress" },
  { src: "/consultancyimages/IMG-20240613-WA0018.jpg", alt: "Site Progress" },
  { src: "/consultancyimages/IMG-20240613-WA0019.jpg", alt: "Site Progress" },
  { src: "/consultancyimages/IMG-20240613-WA0020.jpg", alt: "Site Progress" },
  
  // June 23
  { src: "/consultancyimages/IMG-20240623-WA0009.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0013.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0014.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0015.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0018.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0019.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0020.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0021.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0022.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0023.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0024.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0026.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0028.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0029.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0030.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0033.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0034.jpg", alt: "Construction" },
  { src: "/consultancyimages/IMG-20240623-WA0037.jpg", alt: "Construction" },

  // 2025 Batch (Fixed .jpeg extensions)
  { src: "/consultancyimages/IMG-20250201-WA0022.jpg", alt: "Interior Work" },
  { src: "/consultancyimages/IMG-20250511-WA0000.jpg", alt: "Site View" },
  { src: "/consultancyimages/IMG-20250531-WA0014.jpeg", alt: "Details" },
  { src: "/consultancyimages/IMG-20250531-WA0015.jpeg", alt: "Details" },
  { src: "/consultancyimages/IMG-20250618-WA0021.jpg", alt: "Progress" },
  { src: "/consultancyimages/IMG-20250917-WA0009.jpeg", alt: "Progress" },
  { src: "/consultancyimages/IMG-20251009-WA0010.jpg", alt: "Progress" },
  
  // Late 2025
  { src: "/consultancyimages/IMG-20251119-WA0019.jpg", alt: "Site Update" },
  { src: "/consultancyimages/IMG-20251119-WA0020.jpg", alt: "Site Update" },
  { src: "/consultancyimages/IMG-20251126-WA0017.jpg", alt: "Exterior" },
  { src: "/consultancyimages/IMG-20251126-WA0018.jpg", alt: "Exterior" },
  { src: "/consultancyimages/IMG-20251126-WA0020.jpg", alt: "Exterior" },
  { src: "/consultancyimages/IMG-20251204-WA0014.jpg", alt: "Structure" },
  { src: "/consultancyimages/IMG-20251204-WA0015.jpg", alt: "Structure" },
  { src: "/consultancyimages/IMG-20251204-WA0018.jpg", alt: "Structure" }
];

// --- 2. DATA: VIDEOS ---
const projectVideos = [
  "/consultancyimages/20240622_104608.mp4",
  "/consultancyimages/dji_fly_20250726_134022_784_1753532040414_video.mp4",
  "/consultancyimages/VID-20240320-WA0029.mp4",
  "/consultancyimages/VID-20240712-WA0002.mp4",
  "/consultancyimages/VID-20250123-WA0010.mp4"
];

export default function AboutUsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Helper function to assign grid classes based on index to create a "Bento" look
  const getGridClass = (index: number) => {
    // Pattern: 
    // 0: Large (2x2)
    // 4: Wide (2x1)
    // 10: Tall (1x2)
    // 16: Large (2x2)
    // Others: Standard (1x1)
    
    if (index % 16 === 0) return "span-2-2"; // Large Square
    if (index % 16 === 4) return "span-2-1"; // Wide Horizontal
    if (index % 16 === 10) return "span-1-2"; // Tall Vertical
    return "span-1-1"; // Standard
  };

  return (
    <main>
      <Header />
      
      {/* --- HERO SECTION --- */}
      <section style={{ 
        position: "relative", width: "100%", height: "70vh", 
        display: "flex", alignItems: "center", justifyContent: "center", 
        textAlign: "center", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0
        }}></div>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1 }}></div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1100px", padding: "0 20px", color: "white" }}>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: "bold", marginBottom: "25px" }}>
            Crafting Premium Commercial Interiors | Elixi Interior Expertise
          </h1>
          <p style={{ fontSize: "clamp(16px, 1.5vw, 18px)", maxWidth: "900px", margin: "0 auto", color: "#f0f0f0" }}>
            Elixi Interior delivers exceptional office designs and functional expertise with data driven process in commercial interiors.
          </p>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section style={{ backgroundColor: "white", padding: "100px 5%" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "80px", justifyContent: "center" }}>
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "30px", color: "black" }}>Mission</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#666", textAlign: "justify" }}>
              At <strong>Elixi Interior</strong>, our mission is to redefine office environments by delivering tailored and technically advanced design solutions...
            </p>
          </div>
          <div style={{ flex: "1 1 500px" }}>
            <div style={{ position: "relative", width: "100%", height: "450px", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Our Mission" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* --- VISION SECTION --- */}
      <section style={{ backgroundColor: "white", padding: "0px 5% 100px 5%" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto", display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", alignItems: "center", gap: "80px", justifyContent: "center" }}>
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "30px", color: "black" }}>Vision</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#666", textAlign: "justify" }}>
              Our vision is to establish <strong>Elixi Interior</strong> as a distinguished leader in the commercial interior design sector...
            </p>
          </div>
          <div style={{ flex: "1 1 500px" }}>
             <div style={{ position: "relative", width: "100%", height: "450px", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop" alt="Our Vision" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* --- CREATIVE PROJECT GALLERY (BENTO GRID) --- */}
      <section style={{ padding: "80px 20px", backgroundColor: "#f9f9f9" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "40px", fontWeight: "bold", color: "black", marginBottom: "15px" }}>Our Consultancy Projects</h2>
            <p style={{ color: "#666", fontSize: "18px" }}>A glimpse into our site supervision, structural planning, and finished projects.</p>
          </div>

          <div className="bento-grid">
            {projectImages.map((img, index) => (
              <div 
                key={index} 
                className={`gallery-card ${getGridClass(index)}`}
                onClick={() => setSelectedImage(img.src)}
              >
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="gallery-image"
                />
                <div className="overlay">
                  <span className="overlay-text">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- VIDEO SECTION --- */}
      <section style={{ padding: "100px 5%", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "black" }}>Site Walkthroughs & Videos</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {projectVideos.map((videoSrc, index) => (
              <div key={index} style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", backgroundColor: "black", minHeight: "200px" }}>
                <video controls style={{ width: "100%", height: "100%", display: "block" }}>
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX --- */}
      {selectedImage && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, backgroundColor: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={() => setSelectedImage(null)}>
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh", width: "100%", height: "100%" }}>
            <Image src={selectedImage} alt="Full view" fill style={{ objectFit: "contain" }} />
            <button style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "white", border: "none", borderRadius: "50%", width: "40px", height: "40px", fontSize: "20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
          </div>
        </div>
      )}

      {/* --- CREATIVE STYLES (Styles JSX) --- */}
      <style jsx>{`
        /* GRID LAYOUT */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
          grid-auto-flow: dense; /* IMPORTANT: Fills gaps automatically */
        }

        /* CARD STYLES */
        .gallery-card {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          min-height: 250px; /* Default height */
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        /* GRID SPANS (Creative Sizes) */
        .span-2-2 { grid-column: span 2; grid-row: span 2; min-height: 515px; } /* Large Square */
        .span-2-1 { grid-column: span 2; } /* Wide Horizontal */
        .span-1-2 { grid-row: span 2; min-height: 515px; } /* Tall Vertical */
        .span-1-1 { grid-column: span 1; } /* Standard */

        /* Responsive: On mobile, everything becomes standard square */
        @media (max-width: 768px) {
          .span-2-2, .span-2-1, .span-1-2 {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            min-height: 250px !important;
          }
        }

        /* HOVER EFFECTS */
        .gallery-image {
          transition: transform 0.5s ease;
        }
        .gallery-card:hover .gallery-image {
          transform: scale(1.1);
        }

        /* TEXT OVERLAY (Hidden by default, slides up on hover) */
        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          transform: translateY(100%);
          transition: transform 0.3s ease;
          display: flex;
          align-items: flex-end;
        }
        .gallery-card:hover .overlay {
          transform: translateY(0);
        }
        .overlay-text {
          color: white;
          font-family: sans-serif;
          font-size: 14px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>

      <Footer />
    </main>
  );
}