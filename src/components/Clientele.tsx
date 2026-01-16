"use client";

import Image from "next/image";

// Row 1: Updated to new lowercase paths
const row1 = [
  "/clients/client-1.png",
  "/clients/client-2.png",
  "/clients/client-3.png",
  "/clients/client-4.png",
  "/clients/client-5.png",
  "/clients/client-6.png",
  "/clients/client-18.png",
];

// Row 2: Updated to new lowercase paths
const row2 = [
  "/clients/client-13.png",
  "/clients/client-8.png",
  "/clients/client-9.png",
  "/clients/client-10.png",
  "/clients/client-11.png",
  "/clients/client-12.png",
  "/clients/client-17.png",
];

export default function Clientele() {
  return (
    <section style={{ backgroundColor: "white", padding: "80px 0", overflow: "hidden" }}>
      
      {/* CSS STYLES FOR ANIMATION */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-container {
          display: flex;
          width: fit-content;
        }
        /* Row 1 animates to the Right */
        .animate-right {
          animation: scrollRight 40s linear infinite;
        }
        /* Row 2 animates to the Left */
        .animate-left {
          animation: scrollLeft 40s linear infinite;
        }
      `}</style>

      {/* HEADER TITLE */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ 
            fontFamily: "var(--font-allura), cursive", 
            fontSize: "60px", 
            color: "#a67c52",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px"
        }}>
          <span style={{ height: "2px", width: "100px", backgroundColor: "#a67c52" }}></span>
          Clientele
          <span style={{ height: "2px", width: "100px", backgroundColor: "#a67c52" }}></span>
        </h2>
      </div>

      {/* ROW 1 */}
      <div style={{ marginBottom: "40px", width: "100%", overflow: "hidden", position: "relative" }}>
        <div className="marquee-container animate-right">
          {/* We repeat the array 4 times to ensure a smooth infinite loop */}
          {[...row1, ...row1, ...row1, ...row1].map((src, index) => (
            <div key={index} style={{ 
                width: "200px", 
                height: "120px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                margin: "0 30px" 
            }}>
              <Image 
                src={src} 
                alt="Client Logo" 
                width={160} 
                height={90} 
                style={{ 
                    objectFit: "contain", 
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ROW 2 */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
        <div className="marquee-container animate-left">
          {[...row2, ...row2, ...row2, ...row2].map((src, index) => (
            <div key={index} style={{ 
                width: "200px", 
                height: "120px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                margin: "0 30px"
            }}>
              <Image 
                src={src} 
                alt="Client Logo" 
                width={160} 
                height={90} 
                style={{ 
                    objectFit: "contain",
                }} 
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}