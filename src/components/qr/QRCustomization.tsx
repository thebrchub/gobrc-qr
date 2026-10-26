import React from 'react';
import type { QRSettings } from '../../lib/qr/generateQR';
import {
  Settings2,
  RotateCcw,
  Palette,
  ShieldCheck,
  ChevronDown,
  Check,
} from 'lucide-react';

interface QRCustomizationProps {
  settings: QRSettings;
  onChange: (settings: QRSettings) => void;
  onReset: () => void;
}

export default function QRCustomization({
  settings,
  onChange,
  onReset,
}: QRCustomizationProps) {
  const updateColor = (key: 'dark' | 'light', value: string) => {
    onChange({
      ...settings,
      color: {
        ...settings.color,
        [key]: value,
      },
    });
  };

  const [correctionOpen, setCorrectionOpen] = React.useState(false);

  return (
    <section className="mt-6 w-full rounded-[24px] border border-[#E2E7DE] bg-white p-5 shadow-[0_8px_24px_rgba(38,56,36,0.04)] sm:p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-white bg-[#EAF3E3] text-[#176B45] shadow-[2px_3px_7px_rgba(38,72,40,0.07),inset_1px_1px_3px_rgba(255,255,255,0.9)]">
            <Settings2 size={19} strokeWidth={2} />
          </div>

          <div>
            <h3 className="text-base font-extrabold tracking-[-0.025em] text-[#202820] sm:text-lg">
              Customize your QR
            </h3>
            <p className="mt-0.5 text-xs leading-5 text-[#8A9489]">
              Make it match your style
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onReset}
          title="Reset all customization settings"
          className="inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-[#E2E7DE] bg-[#FAFBF7] px-3 text-xs font-bold text-[#687268] transition-all duration-200 hover:border-[#D1E2C9] hover:bg-[#EAF3E3] hover:text-[#176B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45] focus-visible:ring-offset-2 active:scale-[0.98] sm:text-sm"
        >
          <RotateCcw size={14} />
          Reset
        </button>
      </div>

      <div className="space-y-6">
        {/* Color customization */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Palette size={15} className="text-[#64806A]" />
            <h4 className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#687268]">
              Colors
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* QR color */}
            <ColorControl
              label="QR color"
              description="The pattern itself"
              value={settings.color.dark}
              onChange={(value) => updateColor('dark', value)}
            />

            {/* Background color */}
            <ColorControl
              label="Background"
              description="The space around the pattern"
              value={settings.color.light}
              onChange={(value) => updateColor('light', value)}
            />
          </div>

          <p className="mt-3 rounded-xl bg-[#F7F8F4] px-3.5 py-3 text-xs leading-5 text-[#687268]">
            <span className="font-bold text-[#176B45]">Scanning tip:</span>{' '}
            Dark QR patterns on a light background generally scan best.
            Keep strong contrast between your two colors.
          </p>
        </div>

   
{/* Error correction */}
<div>
  <div className="mb-3 flex items-center gap-2">
    <ShieldCheck size={15} className="text-[#64806A]" />
    <h4 className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#687268]">
      Scan reliability
    </h4>
  </div>

  <label className="mb-2 block text-sm font-bold text-[#202820]">
    Error correction level
  </label>

  <div className="relative">
    {(() => {
      const levels = [
        {
          value: 'L',
          label: 'Low',
          recovery: '7%',
          description: 'Smaller, simpler QR patterns',
        },
        {
          value: 'M',
          label: 'Medium',
          recovery: '15%',
          description: 'Recommended for most uses',
        },
        {
          value: 'Q',
          label: 'Quartile',
          recovery: '25%',
          description: 'Extra damage recovery',
        },
        {
          value: 'H',
          label: 'High',
          recovery: '30%',
          description: 'Best when damage recovery matters',
        },
      ] as const;

      const currentLevel = levels.find(
        (level) => level.value === settings.errorCorrectionLevel
      ) ?? levels[1];

      return (
        <>
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={correctionOpen}
            onClick={() => setCorrectionOpen((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setCorrectionOpen(false);
              }
            }}
            className={`
              flex min-h-[58px] w-full items-center justify-between
              gap-3 rounded-2xl border bg-[#FAFBF7] px-4 py-3
              text-left transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#176B45] focus-visible:ring-offset-2
              ${
                correctionOpen
                  ? 'border-[#B8D5AA] shadow-[0_0_0_3px_rgba(184,213,170,0.18)]'
                  : 'border-[#E2E7DE] hover:border-[#C8DCC0]'
              }
            `}
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white bg-[#EAF3E3] text-xs font-extrabold text-[#176B45] shadow-sm">
                {currentLevel.value}
              </span>

              <span className="min-w-0">
                <span className="block text-sm font-bold text-[#354237]">
                  {currentLevel.label}
                  <span className="ml-2 text-xs font-medium text-[#819080]">
                    {currentLevel.recovery}
                  </span>
                </span>
                <span className="mt-0.5 block truncate text-xs text-[#8A9489]">
                  {currentLevel.description}
                </span>
              </span>
            </span>

            <ChevronDown
              size={18}
              className={`shrink-0 text-[#64806A] transition-transform duration-200 ${
                correctionOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {correctionOpen && (
            <>
              <button
                type="button"
                aria-label="Close error correction options"
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setCorrectionOpen(false)}
              />

              <div
                role="listbox"
                aria-label="Error correction level"
                className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-[#E2E7DE] bg-white p-1.5 shadow-[0_12px_32px_rgba(38,56,36,0.13)]"
              >
                {levels.map((level) => {
                  const selected =
                    settings.errorCorrectionLevel === level.value;

                  return (
                    <button
                      key={level.value}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => {
                        onChange({
                          ...settings,
                          errorCorrectionLevel: level.value,
                        });
                        setCorrectionOpen(false);
                      }}
                      className={`
                        flex w-full items-center gap-3 rounded-xl
                        px-3 py-3 text-left transition-colors duration-150
                        ${
                          selected
                            ? 'bg-[#EAF3E3] text-[#176B45]'
                            : 'text-[#354237] hover:bg-[#F7F8F4]'
                        }
                      `}
                    >
                      <span
                        className={`
                          flex h-9 w-9 shrink-0 items-center justify-center
                          rounded-xl border text-xs font-extrabold
                          ${
                            selected
                              ? 'border-[#C8DCC0] bg-white text-[#176B45]'
                              : 'border-[#E8ECE3] bg-[#FAFBF7] text-[#687268]'
                          }
                        `}
                      >
                        {level.value}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                          <span className="text-sm font-bold">
                            {level.label}
                          </span>
                          <span className="text-xs font-medium text-[#819080]">
                            {level.recovery} recovery
                          </span>
                        </span>

                        <span className="mt-1 block text-xs leading-4 text-[#8A9489]">
                          {level.description}
                        </span>
                      </span>

                      {selected && (
                        <Check
                          size={17}
                          className="shrink-0 text-[#176B45]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </>
      );
    })()}
  </div>

  <p className="mt-2 text-xs leading-5 text-[#8A9489]">
    Higher correction can help recover damaged codes, but may make
    the QR pattern denser. Medium is a good starting point.
  </p>
</div>

      </div>
    </section>
  );
}

interface ColorControlProps {
  label: string;
  description: string;
  value: string;
  onChange: (value: string) => void;
}

function ColorControl({
  label,
  description,
  value,
  onChange,
}: ColorControlProps) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-[#E8ECE3] bg-[#FAFBF7] p-3.5 transition-colors duration-200 hover:border-[#D7E5CF]">
      <label
        className="relative flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[14px] border border-[#E2E7DE] bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#176B45] focus-within:ring-offset-2"
        style={{ backgroundColor: value }}
        title={`Choose ${label.toLowerCase()}`}
      >
        <input
          type="color"
          aria-label={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none h-5 w-5 rounded-full border-2 border-white/90 shadow-[0_1px_4px_rgba(0,0,0,0.18)]"
          style={{
            backgroundColor: value,
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.12)',
          }}
        />
      </label>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-[#354237]">
          {label}
        </p>
        <p className="mt-0.5 truncate text-[11px] text-[#8A9489]">
          {description}
        </p>
        <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wide text-[#687268]">
          {value}
        </p>
      </div>
    </div>
  );
}
