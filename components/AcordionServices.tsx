import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AcordionServices() {
  return (
    <div className="w-full h-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="bg-clip-text dark:bg-gradient-to-l bg-gradient-to-r from-primary to-secondary text-transparent font-bold md:text-2xl lg:text-3xl">
            You make websites, right?
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-lg">
            Yes, but not only, we are full stack developers with a passion for
            creating beautiful and functional software. <br />
            From enterprise applications to specialized tools, we can help bring
            your ideas to life with clean, efficient, and scalable code.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="bg-clip-text dark:bg-gradient-to-l bg-gradient-to-r from-primary to-secondary text-transparent font-bold md:text-2xl lg:text-3xl">
            What about mobile apps?
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-lg">
            Yes, we also develop mobile apps. <br />
            We specialize in building custom software solutions tailored to your
            specific needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="bg-clip-text dark:bg-gradient-to-l bg-gradient-to-r from-primary to-secondary text-transparent font-bold md:text-2xl lg:text-3xl">
            I don&apos;t have a design
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-lg">
            We can help you design your website or app. <br /> We have a team of
            designers who can help you create a beautiful and functional design.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="bg-clip-text dark:bg-gradient-to-l bg-gradient-to-r from-primary to-secondary text-transparent font-bold md:text-2xl lg:text-3xl">
            How long does it take?
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-lg">
            It depends on the complexity and needs of the project. We will
            provide you with a timeline and a cost estimate before we start.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-none">
          <AccordionTrigger className="bg-clip-text dark:bg-gradient-to-l bg-gradient-to-r from-primary to-secondary text-transparent font-bold md:text-2xl lg:text-3xl">
            Do you offer maintenance?
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-lg">
            Yes, we offer maintenance for all our projects.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
