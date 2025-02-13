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
          <AccordionTrigger>You do websites, right?</AccordionTrigger>
          <AccordionContent>
            Yes, but not only. We are full stack developers with a passion for
            creating beautiful and functional websites.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What about mobile apps?</AccordionTrigger>
          <AccordionContent>
            Yes, we also develop mobile apps. We use React Native to develop
            native apps for iOS and Android.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What about desktop apps?</AccordionTrigger>
          <AccordionContent>
            Yes, we also develop desktop apps. We use Electron to develop
            desktop apps for Windows, macOS and Linux.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
