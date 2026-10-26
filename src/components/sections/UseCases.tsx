

import {
  Link as LinkIcon,
  Wifi,
  Mail,
  ArrowUpRight,
  Contact,
  Utensils,
  MessageCircle,
} from 'lucide-react';

const cases = [
  {
    icon: LinkIcon,
    title: 'Website & Social',
    desc: 'Send customers to your website, online store, social profiles, or latest content with a quick scan.',
    label: 'For creators & businesses',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Sharing',
    desc: 'Let guests connect to your home or business network without manually typing network details.',
    label: 'For homes & offices',
  },
  {
    icon: Contact,
    title: 'Digital Business Cards',
    desc: 'Share your contact details so clients can quickly save your information on their phones.',
    label: 'For professionals',
  },
  {
    icon: Mail,
    title: 'Email & Messages',
    desc: 'Prepare an email or text message with the recipient and details ready to go.',
    label: 'For quick communication',
  },
  {
    icon: Utensils,
    title: 'Menus & Events',
    desc: 'Give visitors easy access to digital menus, event information, invitations, and schedules.',
    label: 'For restaurants & events',
  },
  {
    icon: MessageCircle,
    title: 'Customer Enquiries',
    desc: 'Make it easier for people to reach your business through supported contact actions.',
    label: 'For small businesses',
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DFE9D9] bg-[#EAF1E4] px-3.5 py-2 text-xs font-bold tracking-wide text-[#176B45]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#218653]" />
          ONE TOOL, MANY POSSIBILITIES
        </div>

        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#202820] sm:text-4xl lg:text-[2.75rem]">
          Everything you need to{' '}
          <span className="text-[#176B45]">share.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#758075] sm:text-base">
          From sharing your website to helping guests connect to Wi-Fi,
          create QR codes for everyday moments in seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {cases.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white bg-[#FAFBF7] p-5 shadow-[5px_6px_16px_rgba(38,56,36,0.055),-3px_-3px_10px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D7E6CE] hover:bg-white hover:shadow-[8px_12px_24px_rgba(38,56,36,0.09),-3px_-3px_10px_rgba(255,255,255,0.95)]"
            >
              {/* Soft decorative highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#E5F0DC]/70 blur-2xl transition-colors duration-300 group-hover:bg-[#D5EAC9]"
              />

              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-[17px] border border-white bg-[#E7F0DF] text-[#176B45] shadow-[3px_4px_9px_rgba(38,72,40,0.08),inset_2px_2px_5px_rgba(255,255,255,0.95)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                <Icon size={22} strokeWidth={1.9} />
              </div>

              <h3 className="relative text-base font-extrabold tracking-[-0.025em] text-[#26332A]">
                {item.title}
              </h3>

              <p className="relative mt-2 flex-1 text-sm leading-6 text-[#778176]">
                {item.desc}
              </p>

              <div className="relative mt-5 flex items-center justify-between gap-2 border-t border-[#E8ECE3] pt-4">
                <span className="text-[11px] font-semibold leading-4 text-[#718071]">
                  {item.label}
                </span>

                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-[#176B45] opacity-60 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs leading-5 text-[#8A9489]">
        QR behavior depends on the type of content encoded and the scanning
        device.
      </p>
    </section>
  );
}
