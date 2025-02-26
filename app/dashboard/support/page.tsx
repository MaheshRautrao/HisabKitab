import { FAQItem, FAQSection } from "@/components/common/faq-section";
import { DashboardSectionHeader } from "@/components/dashboard-section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleHelp, Mail } from "lucide-react";

const faqs: FAQItem[] = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    id: "item-3",
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    id: "item-4",
    question: "Question no 4 which is long ",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    id: "item-5",
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function SupportPage({}) {
  return (
    <>
      <DashboardSectionHeader dashboardSectionHeaderTitle="Contact support" />
      <div className="mt-5 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2  items-center">
              <Mail /> <div className="text-2xl font-bold">Email</div>
            </div>
            <div className="text-2xl text-green-500">support@splitwise.com</div>
          </div>
          <div>
            We aim to reply to most support requests within 1 business day.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2  items-center">
                <CircleHelp color="#ff0000" />
                <div className="text-2xl font-bold">
                  Frequently asked questions
                </div>
              </div>
            </div>
            <div>Find answers to common questions about Splitwise.</div>
          </div>
          <FAQSection faqs={faqs} />
        </div>
      </div>
    </>
  );
}
