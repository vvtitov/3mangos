import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center h-full w-full select-none">
      <BackgroundLines className="flex items-center justify-center h-full w-full min-h-auto bg-[#9cd3aa] min-h-screen">
        <Image
          width={450}
          height={450}
          src="/3m-nobg.png"
          alt="3mango logo"
          className="absolute top-32"
        />
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl font-sans z-20 font-bold mt-[45vh]">
          UNDER CONSTRUCTION <br />
        </h1>
      </BackgroundLines>
    </div>
  );
}
