"use client";

import Image from "next/image";

// Row 1: Logos 1 to 6
const row1 = [
  "/Carousel/Website Company Logo - 1.png",
  "/Carousel/Website Company Logo - 2.png",
  "/Carousel/Website Company Logo - 3.png",
  "/Carousel/Website Company Logo - 4.png",
  "/Carousel/Website Company Logo - 5.png",
  "/Carousel/Website Company Logo - 6.png",
  "/Carousel/Website Company Logo - 18.png",
];

// Row 2: Logos 7 to 12
const row2 = [
  "/Carousel/Website Company Logo - 13.png",
  "/Carousel/Website Company Logo - 8.png",
  "/Carousel/Website Company Logo - 9.png",
  "/Carousel/Website Company Logo - 10.png",
  "/Carousel/Website Company Logo - 11.png",
  "/Carousel/Website Company Logo - 12.png",
  "/Carousel/Website Company Logo - 17.png",
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
                    // FILTER REMOVED HERE for original color
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
                    // FILTER REMOVED HERE for original color
                }} 
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}