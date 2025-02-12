import { TabsServices } from "./AnimatedTab";
import { FlipWords } from "./ui/flip-words";
export default function Services() {
  const words = ["do", "create", "love"];

  return (
    <section id="services" className="flex flex-col w-full pb-40 gap-10">
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
    </section>
  );
}
