import { TabsServices } from "./AnimatedTab";
import Image from "next/image";
export default function Services() {
  return (
    <div id="services" className="w-full pt-[6rem] pb-40">
      <div className="flex flex-col p-5">
        <h1 className="text-5xl text-primary mx-auto">OUR SERVICES</h1>
      </div>
      <Image
        src="/arrow.svg"
        alt="Arrow"
        width={600}
        height={600}
        className="mx-auto"
      />

      <div className="flex flex-col items-center justify-center p-5">
        <TabsServices />
      </div>
    </div>
  );
}
