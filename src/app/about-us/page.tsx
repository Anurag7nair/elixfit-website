"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

// ==========================================
// 1. PROJECT DATA (YOUR EXACT SEQUENCE & COVERS - NO VIDEOS)
// ==========================================

const projects = [
  {
    id: 1,
    title: "Sai Shrushti Phase 1",
    location: "Talegaon Dabhade",
    sqFt: "50,000 sq.ft",
    description: "A landmark residential development featuring modern amenities and spacious planning in the heart of Talegaon.",
    folder: "sai-shrushti-phase-1",
    coverImage: "NIGHT VIEW.png",
    gallery: [
      { type: "image", src: "IMG-20250618-WA0021.jpg.jpeg" },
      { type: "image", src: "NIGHT VIEW (1).png" },
      { type: "image", src: "NIGHT VIEW.png" }
    ]
  },
  {
    id: 2,
    title: "Sai Shrushti Phase 2",
    location: "Talegaon Dabhade",
    sqFt: "40,000 sq.ft",
    description: "The second phase of the premium township, continuing the legacy of quality construction with advanced structural design.",
    folder: "sai-shrushti-phase-2",
    coverImage: "FRONT VIEW.png",
    gallery: [
      { type: "image", src: "FRONT VIEW.png" },
      { type: "image", src: "IMG_3794.JPG.jpeg" },
      { type: "image", src: "IMG_3795.JPG.jpeg" },
      { type: "image", src: "IMG_3796.JPG.jpeg" },
      { type: "image", src: "IMG_3797.JPG.jpeg" },
      { type: "image", src: "IMG_3798.JPG.jpeg" },
      { type: "image", src: "IMG_3799.JPG.jpeg" },
      { type: "image", src: "IMG_3800.JPG.jpeg" },
      { type: "image", src: "IMG_3801.JPG.jpeg" },
      { type: "image", src: "IMG_3884.JPG.jpeg" },
      { type: "image", src: "IMG_3886.JPG (1).jpeg" },
      { type: "image", src: "IMG_3886.JPG.jpeg" },
      { type: "image", src: "IMG_3888.JPG.jpeg" },
      { type: "image", src: "IMG_3891.JPG.jpeg" },
      { type: "image", src: "IMG_3893.JPG.jpeg" },
      { type: "image", src: "IMG_3894.JPG.jpeg" },
      { type: "image", src: "IMG_3911.JPG.jpeg" },
      { type: "image", src: "IMG_3912.JPG.jpeg" },
      { type: "image", src: "IMG_3913.JPG.jpeg" },
      { type: "image", src: "IMG_3914.JPG.jpeg" },
      { type: "image", src: "IMG_3915.JPG.jpeg" },
      { type: "image", src: "IMG_3916.JPG.jpeg" }
    ]
  },
  {
    id: 3,
    title: "20 Talathi Office",
    location: "Rahuri",
    sqFt: "706 sq.ft/unit (14,000 Total)",
    description: "Comprehensive construction of 20 administrative units, delivering robust infrastructure for the Rahuri Talathi office.",
    folder: "20-talathi-office-rahuri",
    coverImage: "IMG-20250917-WA0009.jpeg",
    gallery: [
      { type: "image", src: "20250111_141907.jpg.jpeg" },
      { type: "image", src: "20251226_145418.jpg.jpeg" },
      { type: "image", src: "20251226_145516.jpg.jpeg" },
      { type: "image", src: "IMG_9729.jpg" },
      { type: "image", src: "IMG_9730.jpg" },
      { type: "image", src: "IMG_9757.jpg" },
      { type: "image", src: "IMG_9768.jpg" },
      { type: "image", src: "IMG_9769.jpg" },
      { type: "image", src: "IMG-20241012-WA0000.jpg.jpeg" },
      { type: "image", src: "IMG-20250917-WA0009.jpeg" }
    ]
  },
  {
    id: 4,
    title: "21 Talathi Office",
    location: "Karjat Taluka",
    sqFt: "1,000 sq.ft/unit (21,000 Total)",
    description: "Modern office fit-out and civil development for 21 administrative blocks, designed for public service efficiency.",
    folder: "21-talathi-office-karjat",
    coverImage: "IMG_2980.JPG.jpeg",
    gallery: [
      { type: "image", src: "IMG_2980.JPG.jpeg" },
      { type: "image", src: "IMG_2982.JPG.jpeg" },
      { type: "image", src: "IMG_5123.jpg" },
      { type: "image", src: "IMG_7135.JPG.jpeg" },
      { type: "image", src: "IMG_7706.jpg" },
      { type: "image", src: "IMG-20251009-WA0010.jpg.jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.46.02.jpeg" }
    ]
  },
  {
    id: 5,
    title: "Sai Park Row Houses",
    location: "Shirdi",
    sqFt: "16,000 sq.ft Project Area",
    description: "Premium community of 30 row houses in Shirdi, offering modern living spaces with 3 years of free maintenance.",
    folder: "sai-park-row-houses",
    coverImage: "1769832598998.png",
    gallery: [
      { type: "image", src: "1768018770403.jpg.jpeg" },
      { type: "image", src: "1768018936944.jpg.jpeg" },
      { type: "image", src: "1768155500872.jpg.jpeg" },
      { type: "image", src: "1768155813348.jpg.jpeg" },
      { type: "image", src: "1768490446386.jpg.jpeg" },
      { type: "image", src: "1768490730203.jpg.jpeg" },
      { type: "image", src: "1768490959448.jpg.jpeg" },
      { type: "image", src: "1768491064903.jpg.jpeg" },
      { type: "image", src: "1768491468553.jpg.jpeg" },
      { type: "image", src: "1769832093845.png" },
      { type: "image", src: "1769832598998.png" },
      { type: "image", src: "1769851196994.png" }
    ]
  },
  {
    id: 6,
    title: "Sai Silk Saree",
    location: "Shirdi",
    sqFt: "Retail Showroom",
    description: "Elegant interior design and showroom fit-out optimizing display space and customer flow.",
    folder: "sai-silk-saree",
    coverImage: "IMG_2368.JPG.jpeg",
    gallery: [
      { type: "image", src: "IMG_2368.JPG.jpeg" },
      { type: "image", src: "IMG_2369.JPG.jpeg" },
      { type: "image", src: "IMG_2370.JPG.jpeg" },
      { type: "image", src: "IMG_2371.JPG.jpeg" },
      { type: "image", src: "IMG_2372.JPG.jpeg" },
      { type: "image", src: "IMG_2373.JPG.jpeg" },
      { type: "image", src: "IMG_2374.JPG.jpeg" },
      { type: "image", src: "IMG_2375.JPG.jpeg" }
    ]
  },
  {
    id: 7,
    title: "Primary Residential Hospital",
    location: "Fakhrabad",
    sqFt: "4,000 sq.ft",
    description: "Construction of a primary residential hospital facility, focusing on healthcare standards and patient comfort.",
    folder: "primary-residential-hospital",
    coverImage: "IMG_3522.jpg",
    gallery: [
      { type: "image", src: "IMG_3522.jpg" },
      { type: "image", src: "IMG_3523.jpg" },
      { type: "image", src: "IMG_3524.jpg" },
      { type: "image", src: "IMG_3525.jpg" },
      { type: "image", src: "IMG_3526.jpg" }
    ]
  },
  {
    id: 8,
    title: "Mud House Project",
    location: "Rahuri",
    sqFt: "Sustainable Homes",
    description: "Eco-friendly sustainable housing project utilizing traditional mud construction techniques for natural cooling.",
    folder: "mud-house",
    coverImage: "IMG_6957.JPG.jpeg",
    gallery: [
      { type: "image", src: "IMG_6957.JPG.jpeg" },
      { type: "image", src: "IMG_6958.JPG.jpeg" }
    ]
  },
  {
    id: 9,
    title: "Footers & Foundation",
    location: "Shirdi",
    sqFt: "Structural",
    description: "Deep foundation work and footing reinforcement executed with precision engineering.",
    folder: "footers",
    coverImage: "IMG_0122.JPG.jpeg",
    gallery: [
      { type: "image", src: "IMG_0122.JPG.jpeg" },
      { type: "image", src: "IMG_0123.JPG.jpeg" },
      { type: "image", src: "IMG_0124.JPG.jpeg" },
      { type: "image", src: "IMG_0125.JPG.jpeg" },
      { type: "image", src: "IMG_7448.jpg" },
      { type: "image", src: "IMG_9805.JPG.jpeg" },
      { type: "image", src: "IMG_9896.JPG.jpeg" },
      { type: "image", src: "IMG_9897.JPG.jpeg" },
      { type: "image", src: "IMG_9904.JPG.jpeg" },
      { type: "image", src: "IMG_9909.JPG.jpeg" },
      { type: "image", src: "IMG_9917.JPG.jpeg" },
      { type: "image", src: "IMG_9970.JPG.jpeg" },
      { type: "image", src: "IMG_9971.JPG.jpeg" },
      { type: "image", src: "IMG_9972.JPG.jpeg" }
    ]
  },
  {
    id: 10,
    title: "Cheera Stone Work",
    location: "Maharashtra",
    sqFt: "N/A",
    description: "Exquisite traditional Cheera stone masonry work, showcasing durability and heritage aesthetics.",
    folder: "cheera-stone-work",
    coverImage: "WhatsApp Image 2026-02-11 at 11.41.32.jpeg",
    gallery: [
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.32 (1).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.32 (2).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.32 (3).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.32.jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.33 (1).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.33 (2).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.33 (3).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.33.jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.34 (3).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.34.jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.35 (1).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.35 (2).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.35 (3).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.35.jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-11 at 11.41.36.jpeg" }
    ]
  },
  {
    id: 11,
    title: "Our Office Interior",
    location: "Corporate HQ",
    sqFt: "1,800 sq.ft",
    description: "Design and fit-out of our own corporate office, showcasing our interior capabilities and design philosophy.",
    folder: "our-office-interior",
    coverImage: "IMG_6483.jpg",
    gallery: [
      { type: "image", src: "IMG_6483.jpg" },
      { type: "image", src: "IMG_6492.jpg" },
      { type: "image", src: "IMG_6505.jpg" },
      { type: "image", src: "IMG_6510.jpg" },
      { type: "image", src: "IMG_6531.jpg" },
      { type: "image", src: "IMG_6537.jpg" },
      { type: "image", src: "IMG_6542.jpg" },
      { type: "image", src: "IMG_6553.jpg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.51.jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.52 (1).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.52 (2).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.52 (3).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.52.jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.53 (1).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.53.jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.54 (1).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.54 (2).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.54.jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.55 (1).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.55 (2).jpeg" },
      { type: "image", src: "WhatsApp Image 2026-02-07 at 22.45.55.jpeg" }
    ]
  },
  {
    id: 12,
    title: "Government Projects",
    location: "Maharashtra",
    sqFt: "Infrastructure",
    description: "Large-scale infrastructure and development projects executed for government bodies meeting strict quality standards.",
    folder: "our-government-projects",
    coverImage: "IMG-20240623-WA0009.jpg.jpeg",
    gallery: [
      { type: "image", src: "IMG-20240321-WA0032.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0009.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0013.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0014.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0015.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0018.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0019.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0020.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0021.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0022.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0023.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0024.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0028.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0029.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0030.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0033.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0034.jpg.jpeg" },
      { type: "image", src: "IMG-20240623-WA0037.jpg.jpeg" },
      { type: "image", src: "IMG-20251119-WA0020.jpg.jpeg" },
      { type: "image", src: "IMG-20251126-WA0017.jpg.jpeg" },
      { type: "image", src: "IMG-20251126-WA0018.jpg.jpeg" },
      { type: "image", src: "IMG-20251126-WA0020.jpg.jpeg" },
      { type: "image", src: "IMG-20251204-WA0014.jpg.jpeg" },
      { type: "image", src: "IMG-20251204-WA0015.jpg.jpeg" },
      { type: "image", src: "IMG-20251204-WA0018.jpg.jpeg" },
      { type: "image", src: "IMG_5968.jpg" },
      { type: "image", src: "IMG_5969.jpg" },
      { type: "image", src: "IMG_9608.JPG.jpeg" }
    ]
  },
  {
    id: 13,
    title: "Look & Feel (Concepts)",
    location: "Design Studio",
    sqFt: "Conceptual",
    description: "Architectural visualizations, 3D renders, and aesthetic planning for bringing clients' dreams to life.",
    folder: "look-and-feel",
    coverImage: "FINAL PRINT_3 - Photo.jpg.jpeg",
    gallery: [
      { type: "image", src: "FINAL PRINT_3 - Photo.jpg.jpeg" },
      { type: "image", src: "FINAL PRINT_5 - Photo.jpg.jpeg" },
      { type: "image", src: "FRONT VIEW.png" },
      { type: "image", src: "1768155500872.jpg.jpeg" },
      { type: "image", src: "1768155813348.jpg.jpeg" },
      { type: "image", src: "1768490446386.jpg.jpeg" },
      { type: "image", src: "1768490730203.jpg.jpeg" },
      { type: "image", src: "1768490959448.jpg.jpeg" },
      { type: "image", src: "1768491064903.jpg.jpeg" },
      { type: "image", src: "1768491468553.jpg.jpeg" },
      { type: "image", src: "1769832093845.png" },
      { type: "image", src: "1769832598998.png" },
      { type: "image", src: "1769851196994.png" },
      { type: "image", src: "IMG_3797.JPG.jpeg" },
      { type: "image", src: "IMG_3798.JPG.jpeg" },
      { type: "image", src: "IMG_3799.JPG.jpeg" },
      { type: "image", src: "IMG_3800.JPG.jpeg" },
      { type: "image", src: "IMG_3801.JPG.jpeg" },
      { type: "image", src: "IMG_3884.JPG.jpeg" },
      { type: "image", src: "IMG_3886.JPG (1).jpeg" },
      { type: "image", src: "IMG_3886.JPG.jpeg" },
      { type: "image", src: "IMG_3888.JPG.jpeg" },
      { type: "image", src: "IMG_3891.JPG.jpeg" },
      { type: "image", src: "IMG_3893.JPG.jpeg" }
    ]
  },
  {
    id: 14,
    title: "Our Other Work",
    location: "Multiple Sites",
    sqFt: "Various",
    description: "A diverse collection of miscellaneous civil and interior projects completed across the region.",
    folder: "our-other-work",
    coverImage: "20241001_135542.jpg.jpeg",
    gallery: [
      { type: "image", src: "20241001_135542.jpg.jpeg" },
      { type: "image", src: "IMG_4045.JPG.jpeg" },
      { type: "image", src: "IMG_4052.JPG.jpeg" },
      { type: "image", src: "IMG_4124.JPG.jpeg" },
      { type: "image", src: "IMG_4125.JPG.jpeg" },
      { type: "image", src: "IMG-20240623-WA0026.jpg.jpeg" },
      { type: "image", src: "IMG-20250201-WA0022.jpg.jpeg" },
      { type: "image", src: "IMG-20250511-WA0000.jpg.jpeg" },
      { type: "image", src: "IMG-20250531-WA0014.jpeg" },
      { type: "image", src: "IMG-20250531-WA0015.jpeg" },
      { type: "image", src: "IMG-20251119-WA0019.jpg.jpeg" }
    ]
  }
];

export default function AboutUsPage() {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [lightboxMedia, setLightboxMedia] = useState<any>(null);

  const openProject = (project: any) => {
    setActiveProject(project);
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  const closeProject = () => {
    setActiveProject(null);
  };

  // Helper to get full path
  const getPath = (folder: string, file: string) => `/${folder}/${file}`;

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

      {/* --- MISSION SECTION (HIDDEN WHEN FOLDER IS OPEN) --- */}
      {!activeProject && (
        <>
          <section style={{ backgroundColor: "white", padding: "100px 5%" }}>
            <div style={{ maxWidth: "1300px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "80px", justifyContent: "center" }}>
              <div style={{ flex: "1 1 500px" }}>
                <h2 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "30px", color: "black", textTransform: "uppercase", letterSpacing: "1px" }}>Our Mission</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#666", textAlign: "justify" }}>
                  At <strong>Elixi Interior</strong>, our mission is to <strong>revolutionize</strong> the very fabric of commercial environments. We are not just builders; we are architects of ambition. We strive to engineer spaces that transcend functionality—creating ecosystems that foster innovation, accelerate productivity, and embody the pinnacle of corporate excellence. By fusing <strong>cutting-edge technology</strong> with <strong>bespoke craftsmanship</strong>, we aim to deliver turnkey solutions that don’t just meet standards but obliterate them, setting a new global benchmark for what a workspace can achieve.
                </p>
              </div>
              <div style={{ flex: "1 1 500px" }}>
                <div style={{ position: "relative", width: "100%", height: "450px", overflow: "hidden", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                  <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Our Mission" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </section>

          <section style={{ backgroundColor: "#fcfcfc", padding: "100px 5%" }}>
            <div style={{ maxWidth: "1300px", margin: "0 auto", display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", alignItems: "center", gap: "80px", justifyContent: "center" }}>
              <div style={{ flex: "1 1 500px" }}>
                <h2 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "30px", color: "black", textTransform: "uppercase", letterSpacing: "1px" }}>Our Vision</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#666", textAlign: "justify" }}>
                  Our vision is to stand as the <strong>undisputed titan</strong> of the commercial interior design industry. We envision a future where every structure we touch becomes a landmark of prestige and performance. We aim to be the definitive partner for world-class enterprises, empowering them to lead their industries through spaces that radiate authority and sophistication. Elixi Interior is dedicated to pioneering a legacy of <strong>uncompromising quality</strong> and <strong>visionary aesthetics</strong>, ensuring that our clients don't just occupy a space—they dominate it.
                </p>
              </div>
              <div style={{ flex: "1 1 500px" }}>
                  <div style={{ position: "relative", width: "100%", height: "450px", overflow: "hidden", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                  <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop" alt="Our Vision" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* --- PROJECT GALLERY SYSTEM --- */}
      <section style={{ padding: "80px 20px", backgroundColor: "#f5f5f5", minHeight: "800px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          
          {/* 1. FOLDER LIST VIEW */}
          {!activeProject && (
            <>
              <div style={{ textAlign: "center", marginBottom: "50px" }}>
                <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "black" }}>Our Consultancy Projects</h2>
                <p style={{ color: "#666", marginTop: "10px", fontSize: "18px" }}>Select a project folder to view details.</p>
              </div>

              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
                gap: "30px" 
              }}>
                {projects.map((project) => (
                  <div 
                    key={project.id} 
                    onClick={() => openProject(project)}
                    className="project-folder"
                    style={{ 
                      backgroundColor: "white", 
                      borderRadius: "12px", 
                      overflow: "hidden", 
                      cursor: "pointer",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      border: "1px solid #eaeaea",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    {/* Visual Tab */}
                    <div style={{ height: "12px", backgroundColor: "#f09c16", width: "30%", borderRadius: "6px 6px 0 0", marginLeft: "20px", marginBottom: "-1px", position: "relative", zIndex: 1 }}></div>

                    {/* Folder Cover */}
                    <div style={{ position: "relative", height: "220px", width: "100%", borderRadius: "8px 8px 0 0", overflow: "hidden" }}>
                      <Image 
                        src={getPath(project.folder, project.coverImage)} 
                        alt={project.title} 
                        fill 
                        style={{ objectFit: "cover" }} 
                      />
                      <div style={{ 
                        position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        opacity: 0, transition: "opacity 0.3s"
                      }} className="folder-overlay">
                        <span style={{ 
                          backgroundColor: "white", padding: "10px 20px", borderRadius: "30px", 
                          fontWeight: "bold", fontSize: "14px", color: "black" 
                        }}>Open Folder</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "black", marginBottom: "8px" }}>{project.title}</h3>
                        <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.5", marginBottom: "15px" }}>{project.description}</p>
                      </div>
                      
                      <div style={{ borderTop: "1px solid #eee", paddingTop: "15px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "#777", marginBottom: "5px" }}>
                           <span>📍 {project.location}</span>
                           <span>📐 {project.sqFt}</span>
                        </div>
                        <p style={{ color: "#f09c16", fontSize: "12px", fontWeight: "bold" }}>
                          📁 {project.gallery.length} Photos
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* 2. PROJECT DETAIL VIEW (OPEN FOLDER) */}
          {activeProject && (
            <div className="fade-in" style={{ backgroundColor: "white", padding: "40px", borderRadius: "12px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
              
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "start", marginBottom: "40px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
                <div style={{ marginBottom: "20px" }}>
                  <button 
                    onClick={closeProject}
                    style={{ 
                      background: "none", border: "none", color: "#666", fontSize: "16px", fontWeight: "600", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px"
                    }}
                  >
                    ← Back to Projects
                  </button>
                  <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "black" }}>{activeProject.title}</h2>
                  <div style={{ display: "flex", gap: "20px", marginTop: "10px", flexWrap: "wrap" }}>
                    <span style={{ backgroundColor: "#f5f5f5", padding: "5px 15px", borderRadius: "20px", fontSize: "14px", color: "#333" }}>📍 {activeProject.location}</span>
                    <span style={{ backgroundColor: "#f5f5f5", padding: "5px 15px", borderRadius: "20px", fontSize: "14px", color: "#333" }}>📐 {activeProject.sqFt}</span>
                  </div>
                </div>
                <div style={{ maxWidth: "500px", textAlign: "left" }}> 
                   <p style={{ color: "#555", lineHeight: "1.6", fontSize: "16px" }}>{activeProject.description}</p>
                </div>
              </div>

              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
                gap: "20px" 
              }}>
                {activeProject.gallery.map((media: any, index: number) => (
                  <div 
                    key={index} 
                    style={{ 
                      position: "relative", height: "250px", borderRadius: "8px", overflow: "hidden", cursor: "pointer",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                    }}
                    onClick={() => setLightboxMedia(media)}
                  >
                    {media.type === "video" ? (
                      <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "#000" }}>
                        <video style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}>
                          <source src={getPath(activeProject.folder, media.src)} type="video/mp4" />
                        </video>
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: "50px", height: "50px", backgroundColor: "rgba(255,255,255,0.8)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            ▶
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Image 
                        src={getPath(activeProject.folder, media.src)} 
                        alt={activeProject.title} 
                        fill 
                        style={{ objectFit: "cover", transition: "transform 0.5s" }}
                        className="gallery-img"
                      />
                    )}
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>
      </section>

      {/* --- LIGHTBOX --- */}
      {lightboxMedia && (
        <div 
          style={{ 
            position: "fixed", inset: 0, zIndex: 1000, 
            backgroundColor: "rgba(0,0,0,0.95)", 
            display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" 
          }} 
          onClick={() => setLightboxMedia(null)}
        >
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh", width: "100%", height: "100%" }} onClick={(e) => e.stopPropagation()}>
            
            {lightboxMedia.type === "video" ? (
              <video controls autoPlay style={{ width: "100%", height: "100%", maxHeight: "90vh" }}>
                <source src={getPath(activeProject.folder, lightboxMedia.src)} type="video/mp4" />
              </video>
            ) : (
              <Image src={getPath(activeProject.folder, lightboxMedia.src)} alt="Full view" fill style={{ objectFit: "contain" }} />
            )}

            <button 
              onClick={() => setLightboxMedia(null)}
              style={{ 
                position: "absolute", top: "-40px", right: "0", 
                backgroundColor: "transparent", border: "none", color: "white", fontSize: "30px", cursor: "pointer" 
              }}
            >✕</button>
          </div>
        </div>
      )}

      {/* --- CSS STYLES --- */}
      <style jsx>{`
        .project-folder:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15) !important;
        }
        .project-folder:hover .folder-overlay {
          opacity: 1 !important;
        }
        .gallery-img:hover {
          transform: scale(1.1);
        }
        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Footer />
    </main>
  );
}