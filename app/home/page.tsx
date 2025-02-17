import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        id="mainContainer"
        className="bg-background dark:bg-background min-w-[400px] w-full h-full select-none"
      >
        <Header />
        <Hero />
        <About />
        <Image
          src="/arrow.svg"
          alt="Arrow"
          width={400}
          height={400}
          className="mx-auto pointer-events-none"
          style={{
            filter: "drop-shadow(1px 10px 2px hsl(var(--primary)))",
          }}
        />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
