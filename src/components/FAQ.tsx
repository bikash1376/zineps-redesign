"use client";

import { useId, useState } from "react";

const faqs = [
  {
    question: "What exactly is Zineps?",
    answer:
      "Zineps is an AI-driven platform that connects e-commerce with logistics partners. Webshops automate their shipping process, and carriers manage their customers through the Partner Panel. Everything happens within one smart platform.",
  },
  {
    question: "Who is Zineps for?",
    answer:
      "For both e-commerce businesses and logistics partners. Webshops use Zineps to lower shipping costs and automate processes. Partners such as carriers and brokers offer their services through our platform and manage everything centrally.",
  },
  {
    question: "Do I already need a shipping contract?",
    answer:
      "No, that isn't necessary. You can connect your own contracts, but you can also use the competitive rates of our affiliated partners.",
  },
  {
    question: "Which systems does Zineps integrate with?",
    answer:
      "Zineps integrates seamlessly with Shopify, WooCommerce, Bol.com, Amazon, Exact, Lightspeed and many more. APIs are also available for custom integrations.",
  },
  {
    question: "What does it cost to use Zineps?",
    answer:
      "Zineps works with a transparent SaaS model and optional per-shipment costs. Depending on your type of user (webshop or partner), we offer flexible plans tailored to you.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Within minutes. Connect your shop or register as a partner, and start shipping or offering your logistics services right away.",
  },
];

/** Plus that folds into a minus: the vertical bar collapses when open. */
function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden className="relative block size-6 shrink-0 text-forest">
      <span className="absolute top-1/2 left-1/2 block h-[1.5px] w-3.5 -translate-1/2 rounded-full bg-current" />
      <span
        className={`absolute top-1/2 left-1/2 block h-3.5 w-[1.5px] -translate-1/2 rounded-full bg-current transition-transform duration-300 ease-out ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

/** Accordion FAQ in the style of orchid.ai/faq, tinted with the Zineps mint. */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="mx-auto mt-section w-full max-w-[1600px] px-4 md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
        <h2 className="text-3xl font-medium text-balance text-ink">Frequently asked questions</h2>
        <p className="mt-4 text-base text-pretty text-muted">
          Common questions about Zineps and our platform.
        </p>
      </div>

      <div className="mx-auto mt-heading flex max-w-[960px] flex-col gap-1">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          const buttonId = `${baseId}-q-${i}`;
          const panelId = `${baseId}-a-${i}`;

          return (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-3xl transition-[background-color,box-shadow] duration-300 ease-out ${
                isOpen ? "bg-mint-mist shadow-border" : "bg-transparent hover:bg-surface-soft"
              }`}
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 rounded-3xl px-6 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-green/40"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="w-6 text-sm text-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-medium text-ink">{faq.question}</span>
                  </span>
                  <ToggleIcon open={isOpen} />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pr-16 pb-6 pl-16 text-base text-pretty text-muted">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
