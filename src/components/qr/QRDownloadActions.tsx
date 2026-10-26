import { useState } from 'react';
import {
  Image as ImageIcon,
  Copy,
  Check,
  FileCode2,
  ShieldCheck,
  ArrowDownToLine,
} from 'lucide-react';

interface QRDownloadActionsProps {
  onDownloadPng: () => void;
  onDownloadSvg: () => void;
  payload: string;
  disabled: boolean;
}

export default function QRDownloadActions({
  onDownloadPng,
  onDownloadSvg,
  payload,
  disabled,
}: QRDownloadActionsProps) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = async () => {
    if (!payload || disabled) return;

    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
      setCopyError(false);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
      setCopyError(true);

      window.setTimeout(() => {
        setCopyError(false);
      }, 3000);
    }
  };

  const buttonBase =
    'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45] focus-visible:ring-offset-2 active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-45 sm:px-4';

  return (
    <section className="mt-5 w-full">
      {/* Primary download action */}
      <button
        type="button"
        onClick={onDownloadPng}
        disabled={disabled}
        className={`${buttonBase} group w-full rounded-2xl bg-[#176B45] text-white shadow-[0_4px_0_#105336,0_8px_16px_rgba(23,107,69,0.12)] hover:-translate-y-0.5 hover:bg-[#125B3A] hover:shadow-[0_5px_0_#105336,0_11px_20px_rgba(23,107,69,0.16)] active:shadow-[0_2px_0_#105336]`}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/12 transition-colors group-hover:bg-white/20">
          <ImageIcon size={18} strokeWidth={2.2} />
        </span>

        <span>Download PNG</span>

        <ArrowDownToLine
          size={17}
          className="ml-auto transition-transform duration-200 group-hover:translate-y-0.5"
        />
      </button>

      {/* Secondary actions */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onDownloadSvg}
          disabled={disabled}
          className={`${buttonBase} border border-[#E2E7DE] bg-white text-[#354237] shadow-[0_3px_8px_rgba(38,56,36,0.035)] hover:border-[#C8DCC0] hover:bg-[#F7F8F4] hover:text-[#176B45]`}
        >
          <FileCode2 size={17} className="shrink-0 text-[#64806A]" />
          <span>Download SVG</span>
        </button>

        <button
          type="button"
          onClick={handleCopy}
          disabled={disabled || !payload}
          className={`${buttonBase} border ${
            copied
              ? 'border-[#C8DCC0] bg-[#EAF3E3] text-[#176B45]'
              : copyError
                ? 'border-[#F0D8D2] bg-[#FFF8F6] text-[#A34232]'
                : 'border-[#E2E7DE] bg-white text-[#354237] hover:border-[#C8DCC0] hover:bg-[#F7F8F4] hover:text-[#176B45]'
          }`}
          aria-live="polite"
        >
          {copied ? (
            <Check size={17} className="shrink-0" />
          ) : (
            <Copy size={17} className="shrink-0 text-[#64806A]" />
          )}

          <span>
            {copied
              ? 'Copied!'
              : copyError
                ? 'Copy failed'
                : 'Copy Data'}
          </span>
        </button>
      </div>

      {/* Feedback and helper text */}
      {copyError ? (
        <p role="status" className="mt-3 text-center text-xs leading-5 text-[#A34232]">
          Clipboard access failed. Try copying from a secure browser context.
        </p>
      ) : copied ? (
        <p role="status" className="mt-3 text-center text-xs leading-5 text-[#176B45]">
          <Check size={13} className="mr-1 inline-block" />
          QR content copied to your clipboard.
        </p>
      ) : (
        <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-[11px] leading-5 text-[#8A9489]">
          <ShieldCheck size={13} className="shrink-0 text-[#64806A]" />
          <span>PNG for everyday use · SVG for scalable designs</span>
        </p>
      )}
    </section>
  );
}
