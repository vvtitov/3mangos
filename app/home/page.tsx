import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/floating-navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <section
        id="mainContainer"
        className="bg-white dark:bg-[#333333] min-w-[400px]"
      >
        <Header />
        <Hero />
        <About />
        <Contact />
        <Footer />
        <FloatingNav
          navItems={[
            { name: "HOME", link: "/home" },
            { name: "ABOUT", link: "#about" },
            { name: "CONTACT", link: "#contact" },
          ]}
        />
      </section>
    </>
  );
}
