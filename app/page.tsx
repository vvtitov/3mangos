import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center h-full w-full select-none">
      <BackgroundLines className="flex items-center justify-center h-full w-full min-h-auto bg-[#9cd3aa] min-h-screen">
        <header className="absolute top-20 left-50 hover:text-primary cursor-pointer text-center">
          <p className="font-thin hover:shadow-lg rounded-lg text-gray-500 text-4xl rotate-3 hover:animate-bounce animate-bounce">
            ✉️
          </p>
        </header>
        <Image
          width={450}
          height={450}
          src="/3m-nobg.png"
          alt="3mango logo"
          className="absolute top-32"
        />
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl font-sans z-20 font-bold mt-[45vh]">
          SITE <br />
          UNDER <br />
          CONSTRUCTION
        </h1>
      </BackgroundLines>
    </div>
  );
}
