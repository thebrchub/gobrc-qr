
import { ArrowUpRight, QrCode } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 w-full border-t border-[#E2E7DE] bg-white">
      <div className="mx-auto w-full max-w-[1560px] px-5 pb-8 pt-12 sm:px-8 lg:px-12">
        {/* Main footer row */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-6">
          {/* Brand */}
          <a
            href="/"
            aria-label="GoBRC QR home"
            className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45] focus-visible:ring-offset-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white bg-[#DDF3B5] text-[#176B45] shadow-[3px_4px_8px_rgba(38,72,40,0.08),inset_2px_2px_4px_rgba(255,255,255,0.9)] transition-transform duration-200 group-hover:-rotate-3">
              <QrCode size={22} strokeWidth={2.1} />
            </span>

            <span className="text-xl font-extrabold tracking-[-0.04em] text-[#202820]">
              GoBRC <span className="text-[#176B45]">QR</span>
            </span>
          </a>

          {/* Footer links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-[#687268]"
          >
            <a
              href="/privacy"
              className="transition-colors hover:text-[#176B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-[#176B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45]"
            >
              Terms of Service
            </a>

            <a
              href="https://brchub.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-[#176B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45]"
            >
              BRC Hub LLP
              <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-[#E9EDE5]" />

        {/* Copyright and company credit */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs leading-5 text-[#8A9489] md:flex-row md:text-left">
          <p>
            © {currentYear} GoBRC QR. All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-1.5">
            Made with care by
            <a
              href="https://brchub.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#176B45] transition-colors hover:text-[#104D32] hover:underline"
            >
              BRC HUB LLP
            </a>
            <span className="text-[#C2C9BF]">·</span>
            
          </p>
        </div>
      </div>
    </footer>
  );
}
