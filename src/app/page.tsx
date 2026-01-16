import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import Testimonials from "@/components/Testimonials";
import Clientele from "@/components/Clientele";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer"; // Import Footer

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WorkingProcess />
      <Clientele />
      <Stats />
      <Footer /> {/* Added here at the bottom */}
    </main>
  );
}