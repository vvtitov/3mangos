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
          <AccordionTrigger>You make websites, right?</AccordionTrigger>
          <AccordionContent>
            Yes, but not only, we are full stack developers with a passion for
            creating beautiful and functional software. From enterprise
            applications to specialized tools, we can help bring your ideas to
            life with clean, efficient, and scalable code.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What about mobile apps?</AccordionTrigger>
          <AccordionContent>
            Yes, we also develop mobile apps. <br />
            We specialize in building custom software solutions tailored to your
            specific needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>I don&apos;t have a design</AccordionTrigger>
          <AccordionContent>
            We can help you design your website or app. <br /> We have a team of
            designers who can help you create a beautiful and functional design.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How long does it take?</AccordionTrigger>
          <AccordionContent>
            It depends on the complexity and needs of the project. <br /> We
            will provide you with a timeline and a cost estimate before we
            start.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Do you offer maintenance?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer maintenance for all our projects.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
