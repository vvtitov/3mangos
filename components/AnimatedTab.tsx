"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsServices() {
  const tabs = [
    {
      title: "Development",
      value: "development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-secondary dark:bg-primary">
          <p>Development tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Design",
      value: "design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-secondary dark:bg-primary">
          <p>Design tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Marketing",
      value: "marketing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-secondary dark:bg-primary">
          <p>Marketing tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[45rem] [perspective:1000px] relative b flex flex-col max-w-5xl w-full items-start justify-start px-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/mango.png"
      alt="dummy image"
      width="600"
      height="600"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
