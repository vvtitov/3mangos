import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <main
      id="main"
      className="bg-background min-w-auto w-full h-full"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Header />
      <Hero />
      <About />
      <Image
        src="/arrow.svg"
        alt="Flecha para abajo"
        width={400}
        height={400}
        className="mx-auto pointer-events-none pt-8 select-none"
        style={{
          filter: "drop-shadow(1px 10px 2px hsl(var(--primary)))",
        }}
      />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
