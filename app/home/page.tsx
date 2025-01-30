import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/floating-navbar";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <section
        id="mainContainer"
        className="bg-white dark:bg-[#333333] min-w-[400px]"
      >
        <Header />
        <Hero />
        <AboutUs />
        <Contact />
        <Footer />
        <FloatingNav
          navItems={[
            { name: "HOME", link: "/home" },
            { name: "ABOUT", link: "#aboutUs" },
            { name: "CONTACT", link: "#contact" },
          ]}
        />
      </section>
    </>
  );
}
