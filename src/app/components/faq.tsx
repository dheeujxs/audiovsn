"use client";


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";




export function FAQ() {
  const faqs = [
    {
      q: "What is Audiovis?",
      a: "Audiovis is a deep learning framework for real-time sound classification using CNNs.",
    },
    {
      q: "Do I need GPUs to use it?",
      a: "Not necessarily. Training benefits from GPUs, but inference can run serverlessly with Modal.",
    },
    {
      q: "Can I integrate Audiovis with my web app?",
      a: "Yes, we provide a FastAPI endpoint and React components for seamless integration.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">❓ FAQ</h2>
        <Accordion type="single" collapsible className="mt-10 space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-xl px-4">
              <AccordionTrigger className="text-lg font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}


