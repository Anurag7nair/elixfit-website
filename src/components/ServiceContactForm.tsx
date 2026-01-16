"use client";

import { useState } from "react";

export default function ServiceContactForm() {
  const [formData, setFormData] = useState({
    service: "Design and Build",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "Select City",
    area: "Carpet area",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <section style={{ 
      backgroundColor: "#ffffff", // CHANGED: Pure White Background
      padding: "100px 5%",
      color: "black",
      fontFamily: "sans-serif",
      borderTop: "1px solid #e3d5c6" // Added subtle Gold border to match brand
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "space-between", 
        gap: "60px" 
      }}>

        {/* --- LEFT SIDE: TEXT & CONTACT INFO --- */}
        <div style={{ flex: "1 1 400px" }}>
          <h2 style={{ 
            fontSize: "42px", 
            fontWeight: "bold", 
            marginBottom: "30px", 
            lineHeight: "1.2",
            color: "#1a1a1a"
          }}>
            Start your office interior <br /> design today
          </h2>
          
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
            Contact Information
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* PHONE */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ width: "20px", height: "20px" }}>
                <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.62-6.63l1.97-1.57c.23-.24.31-.56.25-.87-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3.46 3 3.92 3 4.98 3 14.37 10.63 22 20.02 22c1.06 0 1.52-.65 1.52-1.19V16.37c0-.54-.45-.99-.99-.99h-1.54z"/>
                </svg>
              </div>
              <span style={{ fontSize: "16px", fontWeight: "500", color: "#333" }}>
                +91-9673135333
              </span>
            </div>

            {/* EMAIL */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ width: "20px", height: "20px" }}>
                 <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                 </svg>
              </div>
              <span style={{ fontSize: "16px", fontWeight: "500", color: "#333" }}>
                elixifiout@gmail.com
              </span>
            </div>

          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div style={{ flex: "1 1 500px" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            <select name="service" value={formData.service} onChange={handleChange} style={inputStyle}>
              <option value="Design and Build">Design and Build</option>
              <option value="Project Management">Project Management</option>
              <option value="MEP Services">MEP Services</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>

            <div style={{ display: "flex", gap: "20px" }}>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} style={inputStyle} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} style={inputStyle} required />
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
              <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange} style={inputStyle} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} style={inputStyle} required />
            </div>

            <select name="city" value={formData.city} onChange={handleChange} style={inputStyle}>
              <option value="Select City" disabled>Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Other">Other</option>
            </select>

            <select name="area" value={formData.area} onChange={handleChange} style={inputStyle}>
              <option value="Carpet area" disabled>Carpet area</option>
              <option value="Under 1,000 sqft">Under 1,000 sqft</option>
              <option value="1,000 - 5,000 sqft">1,000 - 5,000 sqft</option>
              <option value="5,000 - 10,000 sqft">5,000 - 10,000 sqft</option>
              <option value="10,000+ sqft">10,000+ sqft</option>
            </select>

            <button 
              type="submit" 
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                padding: "18px",
                fontSize: "16px",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                cursor: "pointer",
                marginTop: "10px",
                borderRadius: "4px",
                transition: "background 0.3s"
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "black"}
            >
              Submit Request
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

// --- SHARED INPUT STYLE ---
const inputStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "4px",
  border: "1px solid #ccc", // Slightly darker border for better visibility on white
  backgroundColor: "#f9f9f9", // Slight grey tint inside inputs for contrast
  fontSize: "14px",
  color: "#333",
  outline: "none",
  fontFamily: "sans-serif"
};