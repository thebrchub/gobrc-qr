
import { QrCode, Sparkles, AlertCircle } from 'lucide-react';

interface QRPreviewProps {
  dataUrl: string | null;
  error?: string | null;
}

export default function QRPreview({ dataUrl, error }: QRPreviewProps) {
  return (
    <section
      aria-label="QR code preview"
      className="relative flex min-h-[340px] w-full flex-col items-center justify-center overflow-hidden rounded-[26px] border border-[#E2E7DE] bg-white p-5 shadow-[0_10px_30px_rgba(38,56,36,0.05)] sm:min-h-[380px] sm:p-7"
    >
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#EAF3E3]/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#F0F4E9] blur-3xl"
      />

      {/* Preview heading */}
      <div className="relative z-10 mb-5 flex w-full items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-extrabold tracking-[-0.025em] text-[#202820]">
            Live Preview
          </h3>
          <p className="mt-1 text-xs text-[#8A9489]">
            Your QR code appears here
          </p>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white bg-[#EAF3E3] text-[#176B45] shadow-sm">
          <Sparkles size={17} />
        </div>
      </div>

      {/* QR preview stage */}
      <div className="relative z-10 flex w-full flex-1 items-center justify-center">
        {error ? (
          <div
            role="alert"
            className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-[#F0D8D2] bg-[#FFF8F6] px-5 py-8 text-center"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBE9E4] text-[#B64D3B]">
              <AlertCircle size={23} />
            </div>

            <p className="text-sm font-bold text-[#8F3428]">
              Couldn't generate your QR code
            </p>

            <p className="mt-1.5 max-w-xs text-xs leading-5 text-[#A65F54]">
              {error}
            </p>
          </div>
        ) : dataUrl ? (
          <div className="group relative flex w-full items-center justify-center">
            {/* Raised QR frame */}
            <div className="relative rounded-[25px] border border-[#E7EBE2] bg-white p-3 shadow-[0_8px_24px_rgba(38,56,36,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] transition-transform duration-300 sm:p-4">
              <div className="rounded-[17px] bg-white p-1.5 sm:p-2">
                <img
                  src={dataUrl}
                  alt="Generated QR code"
                  className="block h-auto w-full max-w-[256px] [image-rendering:pixelated]"
                  style={{ aspectRatio: '1 / 1' }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-col items-center justify-center py-7 text-center">
            {/* Empty-state illustration */}
            <div className="relative mb-5 flex h-28 w-28 items-center justify-center rounded-[30px] border border-white bg-[#F4F7F0] shadow-[5px_7px_18px_rgba(38,56,36,0.06),-4px_-4px_12px_rgba(255,255,255,0.9)]">
              <div className="absolute inset-3 rounded-[23px] border border-dashed border-[#D6E3CF]" />

              <QrCode
                size={49}
                strokeWidth={1.5}
                className="relative text-[#64806A]"
              />

              <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-xl border border-white bg-[#DDF3B5] text-[#176B45] shadow-sm">
                <Sparkles size={15} />
              </span>
            </div>

            <h4 className="text-sm font-bold text-[#354237]">
              Your QR code starts here
            </h4>

            <p className="mt-2 max-w-[230px] text-xs leading-5 text-[#8A9489]">
              Enter your details on the left to create your own scannable QR code.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E2E7DE] bg-[#FAFBF7] px-3 py-1.5 text-[11px] font-semibold text-[#687268]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9BBE85]" />
              Ready when you are
            </div>
          </div>
        )}
      </div>

      {/* Footer hint */}
      {!error && dataUrl && (
        <div className="relative z-10 mt-5 flex items-center justify-center gap-2 text-center text-xs text-[#8A9489]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#78A968]" />
          <span>Preview updates as you customize</span>
        </div>
      )}
    </section>
  );
}
