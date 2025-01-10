import { faqLists } from "@/services";
import SectionHeader from "../shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function Faq() {
  return (
    <section className="sec_p80" id="homeFaq">
      <div className="container3x">
        <SectionHeader
          tagTitle="FAQ"
          title="Quick Answers"
          description={`Helpful Answers,\nFriendly Service`}
        />
        <div className="w-full max-w-[1016px] mx-auto mt-6 sm:mt-8 md:mt-10">
          <Accordion
            type="single"
            className="flex flex-col gap-2 sm:gap-3.5 md:gap-5"
            collapsible
          >
            {faqLists?.map((faq, index) => (
              <AccordionItem
                className="faqItem"
                value={`item-${index}`}
                key={faq?._id}
              >
                <AccordionTrigger>{faq?.question}</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="h-[1px] bg-greenGradientBdr mb-4 sm:mb-6 -scale-x-[1]"></div>
                    <p className="text-xs sm:text-sm md:text-base">
                      {faq?.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
