import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center h-full w-full select-none">
      <BackgroundLines className="flex items-center justify-center h-full w-full min-h-auto bg-[#9cd3aa] min-h-screen">
        <div className="absolute top-10 left-50 text-center">
          <a
            href="mailto:contacto@3mangos.site"
            className="text-gray-800 hover:text-gray-500 text-lg"
          >
            contacto@3mangos.site
          </a>
        </div>
        <Image
          width={400}
          height={400}
          src="/3m-nobg.png"
          alt="3mango logo"
          className="absolute top-20"
          style={{
            userSelect: "none",
            WebkitTouchCallout: "none",
            pointerEvents: "none",
          }}
        />
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl font-sans z-20 font-bold mt-[35vh] rotate-[-3deg]">
          SITE <br />
          UNDER <br />
          CONSTRUCTION
        </h1>
      </BackgroundLines>
    </div>
  );
}
