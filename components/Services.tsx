import { TabsServices } from "./AnimatedTab";
import AcordionServices from "./ui/AcordionServices";
import { FlipWords } from "./ui/flip-words";
export default function Services() {
  const words = ["do", "create", "love"];

  return (
    <section
      id="services"
      className="flex flex-col w-full pb-20 gap-10 mx-auto"
    >
      <div className="flex flex-row pt-[130px] justify-center items-center mx-auto">
        <h1 className="text-4xl text-secondary-foreground mx-auto -rotate-3">
          what we
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

      <div className="flex flex-col items-center p-5 max-w-3xl w-full h-[400px] mx-auto pt-20 px-10">
        <h1></h1>
        <AcordionServices />
      </div>
    </section>
  );
}
