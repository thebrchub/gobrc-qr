
import  { useState } from 'react';
import { ChevronDown, CircleHelp } from 'lucide-react';

const faqs = [
  {
    q: 'Is GoBRC QR free?',
    a: 'Yes! GoBRC QR is free to use. You can create, customize, and download QR codes without paying or creating an account.',
  },
  {
    q: 'Do I need an account?',
    a: 'No account is required. Open the generator, choose a QR code type, enter your details, customize the design, and download your code.',
  },
  {
    q: 'Does my QR code expire?',
    a: 'A static QR code does not have an expiry date built into it. It stores the encoded information directly in the image, so it can continue to work as long as the encoded destination or service remains available. For example, a QR code linking to a website will not work as intended if that website or page is removed.',
  },
  {
    q: 'Are QR codes generated on my device?',
    a: 'The QR generation process is designed to run in your browser, without sending the QR payload to our servers. Avoid entering sensitive information into a QR code unless you are comfortable with anyone who scans it being able to read that information.',
  },
  {
    q: 'Can I customize the appearance of my QR code?',
    a: 'Yes. You can customize the foreground and background colors and choose from the available output settings. Keep strong contrast between the QR pattern and its background to help phones scan it reliably.',
  },
  {
    q: 'Can I download my QR code?',
    a: 'Yes. The generator supports PNG and SVG downloads. PNG is convenient for everyday digital use, while SVG is useful when you need scalable artwork for supported print and design workflows.',
  },
  {
    q: 'Can I change a QR code destination after downloading it?',
    a: 'A static QR code cannot be edited after it has been created. You would need to generate and distribute a new QR code. A future dynamic QR service could support destination changes through a managed redirect.',
  },
  {
    q: 'Why is my QR code not scanning?',
    a: 'Try using a dark QR pattern on a light background, preserving the white margin around the code, and printing or displaying it at a sufficient size. Avoid stretching the image, covering parts of the pattern, or using colors with poor contrast.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-[#E2E7DE] py-16 sm:py-20 lg:py-24"
    >
      {/* Section heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFE9D9] bg-[#EAF1E4] px-3.5 py-2 text-xs font-bold tracking-wide text-[#176B45]">
          <CircleHelp size={15} />
          GOT QUESTIONS?
        </div>

        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#202820] sm:text-4xl lg:text-[2.75rem]">
          Frequently asked{' '}
          <span className="text-[#176B45]">questions.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#758075] sm:text-base">
          Everything you need to know about creating and using QR codes
          with GoBRC QR.
        </p>
      </div>

      {/* FAQ accordion */}
      <div className="mx-auto max-w-3xl space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <article
              key={faq.q}
              className={`overflow-hidden rounded-[22px] border bg-[#FAFBF7] transition-all duration-300 ${
                isOpen
                  ? 'border-[#D7E5CF] shadow-[5px_7px_18px_rgba(38,56,36,0.065),-3px_-3px_10px_rgba(255,255,255,0.9)]'
                  : 'border-white shadow-[3px_4px_12px_rgba(38,56,36,0.045),-2px_-2px_8px_rgba(255,255,255,0.9)] hover:border-[#E0E9D9]'
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#176B45]"
              >
                <span
                  className={`text-sm font-bold leading-6 transition-colors sm:text-base ${
                    isOpen ? 'text-[#176B45]' : 'text-[#26332A]'
                  }`}
                >
                  {faq.q}
                </span>

                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                    isOpen
                      ? 'rotate-180 bg-[#176B45] text-white shadow-[0_3px_7px_rgba(23,107,69,0.18)]'
                      : 'bg-[#EAF1E4] text-[#176B45]'
                  }`}
                >
                  <ChevronDown size={17} />
                </span>
              </button>

              <div
                id={answerId}
                hidden={!isOpen}
                className="px-5 pb-5 sm:px-7 sm:pb-6"
              >
                <div className="border-t border-[#E5EAE0] pt-4">
                  <p className="text-sm leading-7 text-[#718071]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Closing note */}
      <p className="mt-8 text-center text-xs leading-6 text-[#8A9489]">
        Still curious? Create a QR code and try it with your phone.
      </p>
    </section>
  );
}
