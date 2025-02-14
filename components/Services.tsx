import { TabsServices } from "./AnimatedTab";
import AcordionServices from "./AcordionServices";
import { FlipWords } from "./ui/flip-words";
import LampDemo, { LampContainer } from "./ui/lamp";
export default function Services() {
  const words = ["DO", "CREATE", "LOVE"];

  return (
    <section
      id="services"
      className="flex flex-col w-full pb-20 gap-10 mx-auto"
    >
      <div className="flex flex-row pt-[130px] justify-center items-center mx-auto">
        <h1 className="text-4xl text-secondary-foreground mx-auto -rotate-3">
          WHAT WE
          <FlipWords
            words={words}
            className="text-primary dark:text-primary text-4xl mx-auto font-bold"
          />
          <br />
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center p-5">
        <TabsServices />
      </div>

      <div className="flex flex-col items-center p-5 max-w-5xl w-full mx-auto pt-40 px-10">
        <AcordionServices />
      </div>
    </section>
  );
}
