import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Product from "@/components/Project";
import Sponsor from "@/components/Sponsor";
import Work from "@/components/Work";
import WorkTogether from "@/components/WorkTogether";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Product />
      <WorkTogether />
      <Work />
      <Sponsor />
      <Footer />
    </main>
  );
}
