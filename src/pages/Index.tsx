import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <DisclaimerModal />
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Hours />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
