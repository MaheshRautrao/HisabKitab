import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionDemoProps = {
  faqs: FAQItem[];
};

export function FAQSection({ faqs }: AccordionDemoProps) {
  return (
    <>
      <Accordion type="single" collapsible>
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
