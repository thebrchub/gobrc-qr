
import React from 'react';
import {
  ArrowRight,
  ArrowDown,
  Link2,
  ShieldCheck,
  Layers3,
  Zap,
  QrCode,
  Wifi,
  Contact,
  Sparkles,
} from 'lucide-react';

export default function Hero() {
  const scrollToGenerator = () => {
    document.getElementById('generator')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToUseCases = () => {
    document.getElementById('use-cases')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-[radial-gradient(ellipse_at_18%_45%,rgba(205,229,197,0.58)_0%,transparent_42%),radial-gradient(ellipse_at_82%_35%,rgba(220,238,199,0.62)_0%,transparent_43%),linear-gradient(115deg,#F5F5EF_0%,#FAFAF6_48%,#F0F4E9_100%)] px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#DDE9D8]/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full bg-[#E8EFD9]/80 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-[1560px] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
        {/* Hero copy */}
        <div className="relative z-10 mx-auto w-full max-w-none text-center lg:mx-0 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E0E7DA] bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-[#365B43] shadow-[0_3px_10px_rgba(32,40,32,0.05)] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#218653]" />
            FREE <span className="text-[#A1AD9E]">·</span> FAST
            <span className="text-[#A1AD9E]">·</span> NO ACCOUNT
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#202820] sm:text-5xl lg:text-[3.25rem] xl:text-[4rem] 2xl:text-[4.5rem]">
  <span className="block whitespace-nowrap">
    Create QR Codes.
  </span>
  <span className="block whitespace-nowrap text-[#176B45]">
    Share Anything.
  </span>
</h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#667168] sm:text-lg sm:leading-8 lg:mx-0">
            Generate free QR codes for links, Wi-Fi, contact details, and
            more. Customize your design and download in seconds — no account
            required.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <button
              type="button"
              onClick={scrollToGenerator}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-[#176B45] px-6 py-3 text-sm font-bold text-white shadow-[0_7px_0_#105336,0_12px_22px_rgba(23,107,69,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#125B3A] hover:shadow-[0_8px_0_#105336,0_16px_26px_rgba(23,107,69,0.19)] active:translate-y-1 active:shadow-[0_2px_0_#105336] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45] focus-visible:ring-offset-4"
            >
              Create a QR Code
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={scrollToUseCases}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-[#176B45] transition-colors hover:bg-[#E6EDDF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45] focus-visible:ring-offset-2"
            >
              See use cases
              <ArrowDown size={16} />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-3 sm:gap-3 lg:gap-5">
            <TrustItem
              icon={<Zap size={21} />}
              title="Instant generation"
              description="Right in your browser"
            />
            <TrustItem
              icon={<ShieldCheck size={22} />}
              title="Privacy first"
              description="Your data stays on-device"
            />
            <TrustItem
              icon={<Layers3 size={22} />}
              title="Free to use"
              description="No signup required"
            />
          </div>
        </div>

        {/* Visual illustration */}
        <div className="relative mx-auto flex min-h-[320px] w-full max-w-xl items-center justify-center sm:min-h-[410px] lg:min-h-[470px]">
          {/* Decorative shapes */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] top-[12%] h-24 w-24 rounded-[2rem] bg-[#DDE9D8] shadow-[inset_5px_5px_12px_rgba(255,255,255,0.9),inset_-5px_-5px_12px_rgba(143,171,141,0.18)] rotate-[-18deg] sm:h-32 sm:w-32"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[10%] right-[5%] h-36 w-36 rounded-full bg-[#DCEBC9]/80 blur-xl sm:h-48 sm:w-48"
          />

          <div
            aria-hidden="true"
            className="absolute right-[12%] top-[7%] h-20 w-20 rounded-full border-[14px] border-[#C8E2C8]/70 sm:h-28 sm:w-28 sm:border-[18px]"
          />

          {/* Small floating link card */}
          <div className="absolute left-[1%] top-[31%] z-20 flex h-[62px] w-[62px] -rotate-6 items-center justify-center rounded-[20px] border border-white/90 bg-[#FAFBF6] text-[#218653] shadow-[7px_8px_18px_rgba(39,64,42,0.10),inset_2px_2px_5px_white] sm:left-[3%] sm:h-[76px] sm:w-[76px] sm:rounded-[24px]">
            <Link2 size={28} strokeWidth={2.1} />
          </div>

          {/* Small floating Wi-Fi card */}
          <div className="absolute bottom-[13%] left-[9%] z-20 flex h-[68px] w-[68px] rotate-6 items-center justify-center rounded-[22px] border border-white/90 bg-[#FAFBF6] text-[#218653] shadow-[7px_8px_18px_rgba(39,64,42,0.10),inset_2px_2px_5px_white] sm:bottom-[12%] sm:left-[10%] sm:h-[84px] sm:w-[84px] sm:rounded-[26px]">
            <Wifi size={30} strokeWidth={2} />
          </div>

          {/* Main QR card */}
          <div className="relative z-10 w-[min(74%,330px)] rotate-[-4deg] rounded-[30px] border border-white bg-[#FAFAF5] p-4 shadow-[12px_16px_35px_rgba(38,56,36,0.13),inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(209,218,201,0.25)] transition-transform duration-500 hover:rotate-0 sm:w-[min(76%,365px)] sm:rounded-[38px] sm:p-6">
            <div className="rounded-[22px] border border-[#E8EAE1] bg-white p-4 shadow-[inset_0_2px_8px_rgba(32,40,32,0.035)] sm:rounded-[28px] sm:p-5">
              <div className="relative mx-auto aspect-square w-full max-w-[270px]">
                <QrIllustration />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 px-1">
              <div>
                <p className="text-sm font-extrabold text-[#202820]">
                  Your QR code
                </p>
                <p className="mt-1 text-xs text-[#818B80]">
                  Ready to share
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#E4F1DE] text-[#176B45] shadow-[inset_2px_2px_5px_white,2px_3px_6px_rgba(40,70,40,0.07)]">
                <QrCode size={21} />
              </div>
            </div>
          </div>

          {/* Floating contact card */}
          <div className="absolute right-[2%] top-[21%] z-20 flex h-[68px] w-[68px] rotate-[9deg] items-center justify-center rounded-[22px] border border-white/90 bg-[#E7F0DC] text-[#176B45] shadow-[7px_8px_18px_rgba(39,64,42,0.10),inset_2px_2px_5px_white] sm:right-[4%] sm:h-[84px] sm:w-[84px] sm:rounded-[26px]">
            <Contact size={30} strokeWidth={1.8} />
          </div>

          {/* Scan badge */}
          <div className="absolute bottom-[18%] right-[1%] z-30 inline-flex rotate-[-4deg] items-center gap-2 rounded-full border border-white/60 bg-[#176B45] px-4 py-3 text-xs font-bold text-white shadow-[0_6px_0_#105336,0_12px_22px_rgba(23,107,69,0.2)] sm:right-[3%] sm:px-5 sm:text-sm">
            <Sparkles size={15} />
            Ready to scan
          </div>

          {/* Decorative dotted pattern */}
          <div
            aria-hidden="true"
            className="absolute bottom-[8%] right-[3%] h-20 w-20 opacity-40 [background-image:radial-gradient(#176B45_1.5px,transparent_1.5px)] [background-size:12px_12px] sm:h-28 sm:w-28"
          />
        </div>
      </div>
    </section>
  );
}

function TrustItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex shrink-0 items-center justify-center text-[#176B45]">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-[#26332A]">{title}</p>
        <p className="mt-1 text-xs leading-5 text-[#7A857A]">
          {description}
        </p>
      </div>
    </div>
  );
}

/**
 * Decorative QR illustration only.
 * The actual functional QR preview belongs in the generator component.
 * This SVG is not intended to encode a real destination.
 */
function QrIllustration() {
  const cells = [
    [8, 8], [8, 18], [8, 28], [8, 38], [8, 48], [8, 58],
    [18, 8], [28, 8], [38, 8], [48, 8], [58, 8],
    [18, 18], [28, 28], [38, 18], [48, 38], [58, 28],
    [18, 38], [28, 48], [38, 38], [48, 58], [58, 48],
    [18, 58], [28, 18], [38, 58], [58, 18],
    [68, 28], [68, 38], [68, 48], [68, 58],
    [28, 68], [38, 68], [48, 68], [58, 68],
    [78, 18], [78, 28], [78, 48], [78, 58],
    [88, 28], [88, 38], [88, 58],
    [38, 78], [48, 78], [68, 78], [78, 78],
    [28, 88], [48, 88], [58, 88], [78, 88],
  ];

  const finder = (x: number, y: number) => (
    <g key={`finder-${x}-${y}`}>
      <rect x={x} y={y} width="30" height="30" rx="1" fill="#111A16" />
      <rect x={x + 5} y={y + 5} width="20" height="20" fill="#FFFFFF" />
      <rect x={x + 10} y={y + 10} width="10" height="10" fill="#111A16" />
    </g>
  );

  return (
    <svg
  viewBox="0 0 100 100"
  role="img"
  aria-label="Decorative QR code illustration"
  className="block h-full w-full"
  shapeRendering="crispEdges"
  preserveAspectRatio="xMidYMid meet"
>
      <rect width="100" height="100" fill="#FFFFFF" />

      {finder(3, 3)}
      {finder(67, 3)}
      {finder(3, 67)}

      {cells.map(([x, y], index) => (
        <rect
          key={`${x}-${y}-${index}`}
          x={x}
          y={y}
          width="5"
          height="5"
          fill="#111A16"
        />
      ))}
    </svg>
  );
}
