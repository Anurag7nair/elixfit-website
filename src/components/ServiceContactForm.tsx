"use client";

import { useState } from "react";

export default function ServiceContactForm() {
  // 1. State to handle the data
  const [formData, setFormData] = useState({
    service: "Design and Build",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "Select City",
    area: "Carpet area",
  });

  // 2. State to handle loading/success messages
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. The Function that sends the email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // ⚠️ YOUR ACCESS KEY ⚠️
          access_key: "c02b6852-46cc-4e36-8a40-c2fe1e57fad6", 
          
          // These are the fields sending to your email
          subject: `New Lead: ${formData.firstName} - ${formData.service}`,
          from_name: "Elixi Website",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you! We have received your details and will call you shortly.");
        // Reset form
        setFormData({
          service: "Design and Build",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          city: "Select City",
          area: "Carpet area",
        });
      } else {
        alert("Something went wrong. Please call us directly.");
        console.error("Error:", result);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- UPDATED LIST OF CITIES ---
  // (Duplicates removed and sorted alphabetically)
  const cityList = [
    "Aamby Valley City", "Achalpur", "Adhal", "Afzalpur", "Ahiri", "Ahmadpur", "Ahilyanagar", "Ahwa", "Ajgaon", "Ajra", 
    "Akalkot", "Akkalkuva", "Akluj", "Akola", "Akot", "Akshi", "Akurdi", "Aland", "Alandi", "Alibag", 
    "Alirajpur", "Alwand", "Amali", "Amalner", "Amaravati", "Ambad", "Ambajogai", "Ambavli", "Ambegaon", "Ambernath", 
    "Amboli", "Ambu Bet", "Amgaon", "Amravati", "Anand Sagar", "Anjaneri", "Anjangaon", "Anjarle", "Armori", "Arnala", 
    "Aronda", "Arvi", "Asangaon", "Ashti", "Athni", "Atpadi", "Atvan", "Aundha Nagnath", "Aurad", "Ausa", 
    "Awas", "Babulgaon", "Badlapur", "Bahirevādi", "Bajargaon", "Balewadi", "Bandra", "Baner", "Baramati", "Barsi", 
    "Barsi Takli", "Barwani", "Basar", "Basavakalyan", "Basmat", "Bekare", "Belagavi", "Belapur", "Beloshi", "Bhadgaon", 
    "Bhadravathi", "Bhagur", "Bhagwanpur", "Bhainsdehi", "Bhalki", "Bhandara", "Bhandardara", "Bhatkuli", "Bherav", "Bhilar", 
    "Bhilpada", "Bhim Nagar", "Bhimashankar", "Bhivpuri Camp", "Bhiwandi", "Bhiwapur", "Bhoirwadi", "Bhokar", "Bhokardan", "Bhor", 
    "Bhose", "Bhugaon", "Bhum", "Bhusawal", "Bid", "Bijapur", "Biloli", "Bir", "Boath", "Bodhan", 
    "Boisar", "Bondarwadi", "Bordi", "Bori", "Borlipanchatan", "Bramhapuri", "Buldana", "Burhanpur", "Central Pune", "Chakan", 
    "Chalisgaon", "Chamursi", "Chandgad", "Chandoli", "Chandrapur", "Chandur", "Chandur Bazar", "Chandvad", "Chaul", "Chendhare", 
    "Chhatrapati Sambhajinagar", "Chikhaldara", "Chikodi", "Chimur", "Chinchani", "Chiplun", "Chondhi", "Chopda", "Chorla", "Cidco", 
    "Corgao", "Dabhosa", "Dahanu", "Dahivadi", "Dapoli", "Dapoli Camp", "Darwha", "Daryapur", "Daund", "Dediapada", 
    "Deharje", "Deoli", "Deori", "Devgad", "Devghar", "Devrukh", "Dhadgaon", "Dhanora", "Dharampur", "Dhargaon", 
    "Dharni", "Dhule", "Digras", "Dindori", "Diveagar", "Divi Parangi", "Donaje", "Dongargarh", "Dudhani", "Dudhebavi", 
    "Durshet", "Ellora", "Erandol", "Gadhinglaj", "Galtare", "Galna", "Gangakher", "Gangapur", "Gangavhare", "Ganpatipule", 
    "Gargoti", "Garhchiroli", "Gaulwadi", "Gavhe", "Gevhande Khadak", "Gevrai", "Ghatanji", "Ghatgarh", "Ghod", "Ghodegaon", 
    "Girinagar", "Girnare", "Gond Pipri", "Gondedumala", "Gondia", "Gorai", "Goregaon", "Gote", "Guhagar", "Gureghar", 
    "Hadapsar", "Hadgaon", "Harihareshwar", "Harnai", "Harsud", "Hatkalangda", "Hatnoli", "Hinganghat", "Hingna", "Hingoli", 
    "Hinjawadi", "Hudco Colony", "Hukeri", "Ibrampur", "Ichalkaranji", "Igatpuri", "Indapur", "Indi", "Islampur", "Itapalli", 
    "Jadhavwadi", "Jalgaon", "Jalna", "Jamkhed", "Jamner", "Jaoli", "Jath", "Javan", "Jawhar", "Jejuri", 
    "Jhambhulpada", "Jhirnia", "Jintur", "Junnar", "Jyotiba Dongar", "Kadachiwadi", "Kagal", "Kaij", "Kakadi", "Kalam", 
    "Kalamnuri", "Kalaj", "Kallam", "Kalmeshwar", "Kalote Mokashi", "Kalwan", "Kalyan", "Kambare", "Kambare N.m.", "Kamptee", 
    "Kamshet", "Kandahar", "Kankavali", "Kannad", "Karad", "Karal", "Karambeli Tarf Taloje", "Karandi Khurd", "Karanja", "Karde", 
    "Karhandla", "Karjat", "Karla", "Karmal", "Karnala", "Karve Nagar", "Kasara", "Kasara Budruk", "Kasarwadi", "Kasheli", 
    "Kashid", "Kashti", "Kaswand", "Katol", "Katrab", "Kavathe Mahankal", "Kelsi", "Khalapur", "Khalumbre", "Khamgaon", 
    "Khanapur", "Khandala", "Khanivade", "Khapri", "Kharabwadi", "Kharakvasla", "Kharepatan", "Khatri Park Housing Society", "Khed", "Khopoli", 
    "Khuldabad", "Kihim", "Kinwat", "Kolad", "Kolegaon", "Kolhapur", "Kolthare", "Kolvan", "Kondhapuri", "Kopargaon", 
    "Kora", "Koregaon", "Korlai", "Kotawde", "Kothrud", "Kudavali", "Kudal", "Kuhi", "Kunkeshwar", "Kurandvad", 
    "Kurkheda", "Kurunji", "Kurvande", "Kusgaon Budruk", "Ladghar", "Lakhandur", "Lakhni", "Lanji", "Lanja", "Latur", 
    "Lavale", "Lavasa", "Lonand", "Lonar", "Lonavala", "Loni Kalbhor", "Machutar", "Madale", "Madha", "Madnur", 
    "Mahabaleshwar", "Mahad", "Mahagaon", "Mahalunge Ingale", "Mahalungi", "Mahim", "Mahiravani", "Mahismal", "Mahurgad", "Majalgaon", 
    "Majivali", "Malavli", "Malawali N.m.", "Malegaon", "Malgund", "Maliwada", "Malkapur", "Malkhed", "Malsiras", "Malunje", 
    "Malvan", "Manchar", "Mandangarh", "Mandve", "Mandwa", "Maneri", "Mangalwedha", "Mangaon", "Mangaon Khurd", "Mangrul Pir", 
    "Manjidana Colony", "Manmad", "Manor", "Mansar", "Maregaon", "Marleshwar", "Matheran", "Mauda", "Medha", "Merawane", 
    "Mhasla", "Mira Bhayandar", "Miraj", "Mirya", "Mohadi", "Moharli", "Mohol", "Mokhada", "Morshi", "Mudhol", 
    "Mukhed", "Mul", "Mulshi", "Multai", "Mumbai", "Mundhegaon", "Murbad", "Murtajapur", "Murud", "Murud-Harnai", 
    "Murum Rural", "Nagaon", "Nagbhir", "Nagothane", "Nagpur", "Naigaon", "Nakinda", "Nala Sopara", "Naldurg", "Namas", 
    "Nandanwan", "Nanded", "Nandgaon", "Nandgaon Khandeshwar", "Nandrabad", "Nandura", "Nandurbar", "Narainpur", "Narayangaon", "Narkher", 
    "Nashik", "Nasrapur", "Naswadi", "Navapur", "Navi Mumbai", "Ner", "Neral", "Nevasa", "Nigdi", "Nijhar", 
    "Nilanga", "Nilje Gaon", "Nipani", "Niphad", "Niravade", "Old Mahabaleshwar", "Osmanabad", "Ozar", "Pachora", "Paithan", 
    "Pakhanjur", "Palghar", "Pali", "Paliyem", "Panchgani", "Pandharkawada", "Pandharpur", "Pangari", "Panhala", "Panhala Fort", 
    "Pansemal", "Panshet", "Panvel", "Parbhani", "Parenda", "Parli Vaijnath", "Parner", "Parola", "Parsivni", "Partur", 
    "Patan", "Pathardi", "Pathri", "Patoda", "Patur", "Paud", "Pawas", "Pawni", "Pegalwadi Tryambak", "Peint", 
    "Pen", "Pernem", "Phaltan", "Pimple Saudagar", "Pimpri - Chinchwad", "Pinguli", "Pirangut", "Poladpur", "Pune", "Pusad", 
    "Radhanagari", "Rahata", "Rahuri", "Raireshwar", "Rajapur", "Rajgurunagar", "Rajura", "Rajur", "Ralegaon", "Ramnagar", 
    "Ramtek", "Ranjangaon", "Rasayani", "Ratnagiri", "Raver", "Revadanda", "Risod", "Roha", "Sagbara", "Sahajpur", 
    "Sailu", "Saiv Kh", "Sajan", "Sakoli", "Sakri", "Salekasa", "Samudrapur", "Sangadewadi", "Sangameshwar", "Sangamner", 
    "Sangavi", "Sangole", "Sangrampur", "Saputara", "Sarola", "Sasunavghar", "Sasvad", "Satara", "Sausar", "Savarpada", 
    "Savner", "Sawantwadi", "Selu", "Sendhwa", "Sevagram", "Shahada", "Shahapur", "Shahuwadi", "Shani Shingnapur", "Shegaon", 
    "Shevgaon", "Shikrapur", "Shilimb", "Shindaone", "Shindewadi", "Shirala", "Shirdi", "Shirgaon", "Shiroda", "Shirol", 
    "Shiroli", "Shirpur", "Shirur", "Shirwal", "Shribag No.2", "Shrigonda", "Shrirampur", "Shrivardhan", "Sidhanathwadi Rural", "Sillod", 
    "Silvassa", "Sindewahi", "Sindkhed Raja", "Sindkheda", "Sinnar", "Sironcha", "Sirpur", "Solapur", "Solashi", "Somatane", 
    "Songadh", "Sortapwadi Phata", "Soygaon", "Surgana", "Takwa Budrukh", "Tala", "Talasri", "Talegaon", "Talegaon Dabhade", "Taloda", 
    "Talvad", "Tapola", "Tarkarli", "Tasgaon", "Tathawade", "Tekadi Mandavzari", "Telhara", "Tembhari", "Thakursai", "Thane", 
    "Thergaon", "Tikona Peth", "Tilari Nagar", "Tiracol", "Tirora", "Titwala", "Tivarekar Wadi", "Tivsa", "Toranmal", "Trimbak", 
    "Tuljapur", "Tumsar", "Uchchhal", "Udgir", "Ukshi", "Ulhasnagar", "Umarga", "Umargam", "Umarkhed", "Umberpada", 
    "Umred", "Undangaon", "Uruli Kanchan", "Vada", "Vadgaon", "Vaduj", "Vagheshwar", "Vaibhavwadi", "Vaijanath", "Vaijapur", 
    "Vaishet", "Vajreshwari", "Valane", "Valha", "Valpoy", "Vangani", "Vansada", "Varasoli", "Varchi Ali", "Vardoli", 
    "Vasai", "Vasai East", "Veer", "Velhe", "Velneshwar", "Vengurla", "Vijayapura", "Vijaydurg", "Vikramgadh", "Vishalgad", 
    "Vite", "Wadki", "Wai", "Wakad", "Walen", "Wani", "Wardha", "Warje", "Warora", "Warud", "Washim", 
    "Wavandhal", "Wadhiware", "Yaval", "Yavatmal", "Yeola", "Yesade", "Other"
  ];

  return (
    <section style={{ 
      backgroundColor: "#ffffff", 
      padding: "100px 5%",
      color: "black",
      fontFamily: "sans-serif",
      borderTop: "1px solid #e3d5c6" 
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
                accounts@elixifitout.com
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
              {cityList.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
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
              disabled={isSubmitting}
              style={{
                backgroundColor: isSubmitting ? "#666" : "black",
                color: "white",
                border: "none",
                padding: "18px",
                fontSize: "16px",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                marginTop: "10px",
                borderRadius: "4px",
                transition: "background 0.3s"
              }}
              onMouseOver={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = "#333")}
              onMouseOut={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = "black")}
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
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
  border: "1px solid #ccc", 
  backgroundColor: "#f9f9f9", 
  fontSize: "14px",
  color: "#333",
  outline: "none",
  fontFamily: "sans-serif"
};