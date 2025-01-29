import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative grid grid-cols-3 mx-auto w-full h-[30vh] justify-center dark:bg-[#333333]/20 items-center bg-red-400">
      <div>
        <Image
          width={200}
          height={200}
          src="/mango.png"
          alt="3mango logo"
          className="flex scale-75 opacity-35 md:flex pointer-events-none rotate-[75deg]"
          style={{
            userSelect: "none",
            WebkitTouchCallout: "none",
          }}
        />
      </div>
    </div>
  );
}
