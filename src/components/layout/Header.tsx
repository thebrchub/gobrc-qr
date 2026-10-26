

import { ArrowUpRight, QrCode } from 'lucide-react';


const scrollToSection = (id: string) => {
  if (window.location.pathname !== '/') {
    window.location.href = `/?section=${encodeURIComponent(id)}`;
    return;
  }

  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2E7DE]/80 bg-[#FAFAF6]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1560px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <a
          href="/"
          aria-label="GoBRC QR home"
          className="group flex shrink-0 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45] focus-visible:ring-offset-4"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/90 bg-[#DDF3B5] text-[#176B45] shadow-[3px_4px_8px_rgba(38,72,40,0.10),inset_2px_2px_4px_rgba(255,255,255,0.9)] transition-transform duration-200 group-hover:-rotate-3">
            <QrCode size={22} strokeWidth={2.1} />
          </span>

          <span className="text-lg font-extrabold tracking-[-0.04em] text-[#202820] sm:text-xl">
            GoBRC <span className="text-[#176B45]">QR</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-2 md:flex"
        >
          <NavLink
            label="Generator"
            target="generator"
          />
          <NavLink
            label="Use Cases"
            target="use-cases"
          />
          <NavLink
            label="FAQ"
            target="faq"
          />
        </nav>

        {/* Primary action */}
        <button
          type="button"
          onClick={() => scrollToSection('generator')}
          className="group inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-[#176B45] px-4 py-2.5 text-sm font-bold text-white shadow-[0_4px_0_#105336,0_7px_14px_rgba(23,107,69,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#125B3A] hover:shadow-[0_5px_0_#105336,0_10px_18px_rgba(23,107,69,0.16)] active:translate-y-0.5 active:shadow-[0_2px_0_#105336] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45] focus-visible:ring-offset-4 sm:px-5"
        >
          <span className="hidden sm:inline">Create QR Code</span>
          <span className="sm:hidden">Create QR</span>
          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </header>
  );
}

function NavLink({
  label,
  target,
}: {
  label: string;
  target: string;
}) {
  return (
    <button
      type="button"
      onClick={() => scrollToSection(target)}
      className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#59645B] transition-colors duration-200 hover:bg-[#EAF0E4] hover:text-[#176B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45]"
    >
      {label}
    </button>
  );
}
