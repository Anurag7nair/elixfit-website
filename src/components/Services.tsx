"use client";

const services = [
  {
    id: "01",
    title: "Architectural Designing",
    description: "The purpose of Architecture is to improve human life. Create timeless, free, joyous spaces for all activities in life. Architecture is more than just a solution to shelter the activities of human beings."
  },
  {
    id: "02",
    title: "Sustainability",
    description: "Sustainable architectural design respects natural resources and embraces human, cultural, and historical distinctions. The aim is to create spaces that have a positive impact on our climate."
  },
  {
    id: "03",
    title: "Planning & Management",
    description: "It is the creation of a framework in which the whole project proceeds. It involves defining actions, creating timelines, staffing the project, and determining necessary materials."
  },
  {
    id: "04",
    title: "Interior Design",
    description: "Creating indoor spaces that are functional, safe, and beautiful. We determine space requirements and select essential and decorative items, such as colors, lighting, and materials."
  },
  {
    id: "05",
    title: "Structural Design",
    description: "The purpose of structural design is the engineering discipline of creating safe, stable, and functional structures by designing their framework to withstand all expected loads and forces, ensuring strength and economy using materials like steel or concrete, and adhering to codes to protect occupants and the public."
  },
  {
    id: "06",
    title: "Landscape Architecture",
    description: "The analysis, planning, management, and stewardship of the land. We focus on the design of outdoor public areas, landmarks, and structures."
  }
];

export default function Services() {
  return (
    <section style={{ 
      backgroundColor: "white",  // Forces White Background
      color: "black",            // Forces Black Text
      padding: "80px 20px",
      width: "100%",
      position: "relative",
      zIndex: 10
    }}>
      
      {/* Container for the Grid */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        display: "grid",
        // This creates the 3-column layout. 
        // If screen is small (mobile), it falls back to 1 column automatically.
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "60px 40px", // 60px vertical gap, 40px horizontal gap
        textAlign: "center"
      }}>
        
        {services.map((service) => (
          <div key={service.id} style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            
            {/* THE BACKGROUND NUMBER (01, 02...) */}
            <div style={{
              position: "absolute",
              top: "-40px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "140px",
              fontWeight: "bold",
              fontFamily: "serif", // Using serif to match your design
              color: "transparent",
              WebkitTextStroke: "1px #e0e0e0", // The faint outline effect
              zIndex: 0,
              pointerEvents: "none",
              userSelect: "none"
            }}>
              {service.id}
            </div>

            {/* THE TEXT CONTENT */}
            <div style={{ position: "relative", zIndex: 10, marginTop: "60px" }}>
              <h3 style={{ 
                fontSize: "28px", 
                marginBottom: "20px", 
                fontFamily: "serif", 
                color: "black" 
              }}>
                {service.title}
              </h3>
              
              <p style={{ 
                fontSize: "15px", 
                lineHeight: "1.6", 
                color: "#555", // Dark gray for readability
                fontFamily: "sans-serif",
                maxWidth: "350px",
                margin: "0 auto"
              }}>
                {service.description}
              </p>
            </div>

          </div>
        ))}
        
      </div>
    </section>
  );
}