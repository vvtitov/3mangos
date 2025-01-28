import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div
        id="container"
        className="bg-[#9cd3aa] dark:bg-[#333333] min-w-[400px]"
      >
        <Header />
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
