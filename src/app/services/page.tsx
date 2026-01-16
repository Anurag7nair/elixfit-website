"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceContactForm from "@/components/ServiceContactForm";
import Image from "next/image";
import Link from "next/link";

// --- 1. MAIN SERVICES DATA ---
const servicesList = [
  {
    title: "Design and Build",
    description: "At Elixi, we offer a seamless and comprehensive approach to creating stunning and functional spaces. Our team of experienced professionals will work closely with you to understand your vision and requirements, ensuring that every aspect of the design and construction process is carefully coordinated and executed.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", 
    link: "/services/design-and-build",
    isComingSoon: false
  },
  {
    title: "Project Management",
    description: "We offer comprehensive project management services to ensure the successful execution of interior design projects. Our experts excel in handling every aspect, from meticulous budgeting to efficient timeline management and on-site coordination. We deliver exceptional results exceeding expectations at every step.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop", 
    link: "/services/project-management",
    isComingSoon: false
  },
  {
    title: "MEP Services",
    description: "Our Mechanical, Electrical, and Plumbing (MEP) assistance ensures that all technical aspects of your workspace are accurately integrated. We guarantee that your office's infrastructure is built to the highest standards, providing functionality, safety, and efficiency for your team.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop", 
    link: "/services/mep-services",
    isComingSoon: false
  },
  {
    title: "AV Solution and Consultancy",
    description: "State-of-the-art Audio Visual solutions for modern conference rooms, auditoriums, and collaborative workspaces. We handle acoustics, system integration, and automation to ensure crystal-clear communication.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop", 
    link: "/services/av-solution",
    isComingSoon: false
  },
  {
    title: "Brand-aligned Office Interior",
    description: "We prioritize your brand's identity in every design. Our designs are crafted to reflect your vision, ensuring that your workspace resonates with your company culture. By integrating your brand's identity into the office interior, we create a space that embodies your brand.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop", 
    link: "#",
    isComingSoon: true 
  },
  {
    title: "HVAC Systems",
    description: "Our HVAC system service is tailored to meet the demands of office interiors. We recognize the pivotal role of a comfortable and conducive work environment, and our dedicated team ensures the seamless integration of top-tier HVAC solutions into your office space.",
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop", 
    link: "#",
    isComingSoon: true 
  },
  // --- NEW ITEM ADDED HERE ---
  {
    title: "Civil and Interior Consultancy",
    description: "We provide total A-to-Z consultancy for construction projects and interior design. From the initial concept and structural planning to the final interior touches, our expert guidance ensures your project is executed flawlessly, on time, and within budget.",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop", // Meeting/Consultancy Image 
    link: "#",
    isComingSoon: true // Set to true since there is no dedicated page yet
  }
];

// --- 2. ADDITIONAL CAPABILITIES DATA (Reverted to 3 items) ---
const additionalCapabilities = [
  {
    title: "Civil and Carpentry Work",
    desc: "Expert craftsmanship for structural changes, flooring, partitions, and detailed woodwork.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2"/></svg>
    )
  },
  {
    title: "Modular Furniture Manufacturing",
    desc: "Custom-manufactured workstations, cabinets, and ergonomic furniture tailored to your space.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    )
  },
  {
    title: "Turnkey Projects",
    desc: "End-to-end execution where we handle everything from concept to handover.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
    )
  }
];

export default function ServicesPage() {
  return (
    <main>
      <Header />
      
      {/* --- 1. HERO SECTION --- */}
      <section style={{ 
        position: "relative", width: "100%", height: "100vh", 
        display: "flex", alignItems: "center", justifyContent: "center", 
        textAlign: "center", overflow: "hidden" 
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop")', backgroundSize: "cover", backgroundPosition: "center" }}></div>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }}></div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1000px", padding: "0 20px", color: "white" }}>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: "bold", fontFamily: "sans-serif", textTransform: "capitalize", marginBottom: "20px", lineHeight: "1.1" }}>Elixi Interior Design Services</h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", fontFamily: "sans-serif", fontWeight: "400", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto", color: "#e0e0e0" }}>Your destination for the best-in-class office interior and commercial space designing. Experience end-to-end excellence and elevate your workspace with our meticulously crafted designs.</p>
        </div>
      </section>

      {/* --- 2. ZIG-ZAG SERVICE SECTIONS --- */}
      <div style={{ backgroundColor: "white" }}>
        {servicesList.map((service, index) => {
          const isReverse = index % 2 !== 0;
          return (
            <section key={index} style={{
              display: "flex", flexDirection: isReverse ? "row-reverse" : "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", padding: "80px 5%", maxWidth: "1400px", margin: "0 auto"
            }}>
              <div style={{ flex: "1 1 500px", padding: "20px" }}>
                <div style={{ position: "relative", height: "400px", width: "100%", overflow: "hidden", borderRadius: "2px" }}>
                  <Image src={service.image} alt={service.title} fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div style={{ flex: "1 1 500px", padding: "40px", textAlign: "left" }}>
                <h2 style={{ fontSize: "36px", color: "black", marginBottom: "20px", fontFamily: "sans-serif", fontWeight: "bold" }}>{service.title}</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#666", marginBottom: "40px", fontFamily: "sans-serif" }}>{service.description}</p>
                {service.isComingSoon ? (
                  <div style={{ display: "inline-block", padding: "15px 40px", border: "1px dashed #ccc", color: "#999", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", cursor: "not-allowed" }}>Coming Soon</div>
                ) : (
                  <Link href={service.link} style={{ display: "inline-block", padding: "15px 40px", border: "1px solid #ddd", color: "black", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", textDecoration: "none", transition: "all 0.3s" }}>+ &nbsp; Know More</Link>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* --- 3. ADDITIONAL CAPABILITIES GRID --- */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "100px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "bold", fontFamily: "sans-serif", color: "black", marginBottom: "15px" }}>Additional Capabilities</h2>
            <p style={{ color: "#666", fontFamily: "sans-serif" }}>Specialized solutions to complete your office infrastructure.</p>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "50px" 
          }}>
            {additionalCapabilities.map((item, index) => (
              <div key={index} style={{ 
                backgroundColor: "white", 
                padding: "40px", 
                borderRadius: "8px", 
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }}>
                <div style={{ marginBottom: "20px", color: "#333" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "black", marginBottom: "15px", fontFamily: "sans-serif" }}>{item.title}</h3>
                <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6", fontFamily: "sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- 4. CONTACT FORM --- */}
      <ServiceContactForm />

      <Footer />
    </main>
  );
}