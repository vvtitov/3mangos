import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="items-center justify-items-center h-full w-full select-none">
        <BackgroundLines className="flex items-center justify-center h-full w-full min-h-auto bg-[#9cd3aa] min-h-screen">
          <div className=" absolute top-[75vh] text-center">
            {/* <h2 className="text-sm md:text-md font-sans z-20 font-bold text-gray-800">
            get in touch
          </h2> */}
            <Link href="mailto:contacto@3mangos.site">
              <div className="hover:text-gray-500 hover:cursor-pointer hover:scale-110 hover:ease-in-out duration-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <Image
            width={250}
            height={250}
            src="/3m-logo-black.png"
            alt="3mango logo"
            className="md:translate-y-3 md:transform absolute top-22 hover:transform hover:scale-110 transition-transform duration-700 hover:rotate-3"
            style={{
              userSelect: "none",
              WebkitTouchCallout: "none",
            }}
          />
          <h1 className="md:translate-y-10 duration-500 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-neutral-600 dark:to-white text-xl md:text-3xl font-sans z-20 font-bold mt-[-60vh] rotate-[-3deg]">
            NOS ESTAMOS RENOVANDO
          </h1>
        </BackgroundLines>
      </div>
    </>
  );
}
