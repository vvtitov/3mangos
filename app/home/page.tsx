import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <>
      <section
        id="mainContainer"
        className="bg-white dark:bg-[#333333] min-w-[400px] w-full h-full"
      >
        <Header />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
        <FloatingNav
          navItems={[
            { name: "HOME", link: "/home" },
            { name: "ABOUT", link: "#about" },
            { name: "SERVICES", link: "#services" },
            { name: "CONTACT", link: "#contact" },
          ]}
        />
      </section>
    </>
  );
}
