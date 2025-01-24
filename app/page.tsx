import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center h-full w-full select-none">
      <BackgroundLines className="grid items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-[40vh] bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            3MANGOS <br /> AGENCY
          </h1>
          <Image
            width={400}
            height={400}
            src="/mango.png"
            alt="Mango image"
            className="absolute top-32"
          />
        </div>
        <p className="mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-[20vh] md:mt-[5vh]">
          Esta pagina web se encuentra en construccion. <br />
          <strong>contacto@3mangos.site</strong>
        </p>
      </BackgroundLines>
    </div>
  );
}
