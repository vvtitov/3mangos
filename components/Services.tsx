import { TabsDemo } from "./AnimatedTab";

export default function Services() {
  return (
    <div id="services" className="w-full pt-[6rem] pb-40">
      <div className="flex flex-col p-5">
        <h1 className="text-5xl font-bold text-primary mx-auto">What we do</h1>
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <TabsDemo />
      </div>
    </div>
  );
}
