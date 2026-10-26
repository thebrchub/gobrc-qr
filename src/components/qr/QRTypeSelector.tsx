
import React from 'react';
import {
  Link as LinkIcon,
  Type,
  Wifi,
  UserRound,
  Mail,
  Phone,
  MessageSquare,
} from 'lucide-react';

export type QRType =
  | 'url'
  | 'text'
  | 'wifi'
  | 'contact'
  | 'email'
  | 'phone'
  | 'sms';

interface QRTypeSelectorProps {
  selected: QRType;
  onSelect: (type: QRType) => void;
}

const types: {
  id: QRType;
  label: string;
  icon: React.ElementType;
}[] = [
  { id: 'url', label: 'URL', icon: LinkIcon },
  { id: 'text', label: 'Plain Text', icon: Type },
  { id: 'wifi', label: 'Wi-Fi', icon: Wifi },
  { id: 'contact', label: 'Contact', icon: UserRound },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'phone', label: 'Phone', icon: Phone },
  { id: 'sms', label: 'SMS', icon: MessageSquare },
];

export default function QRTypeSelector({
  selected,
  onSelect,
}: QRTypeSelectorProps) {
  return (
    <div
      role="group"
      aria-label="Choose QR code type"
      className="w-full"
    >
      <div
        className="
          grid grid-cols-2 gap-2.5
          sm:flex sm:flex-wrap sm:gap-2.5
        "
      >
        {types.map(({ id, label, icon: Icon }) => {
          const isSelected = selected === id;
          const isLastItem = id === 'sms';

          return (
            <button
              key={id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(id)}
              className={`
                group relative inline-flex min-h-[48px]
                w-full items-center justify-center gap-2
                rounded-[15px] border px-2.5 py-3
                text-[13px] font-bold leading-tight
                transition-all duration-200 ease-out
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#176B45]
                focus-visible:ring-offset-2
                active:translate-y-[1px]

                sm:w-auto sm:shrink-0 sm:gap-2.5
                sm:px-4 sm:py-3 sm:text-sm

                ${isLastItem ? 'col-span-2 sm:col-span-1 sm:w-auto' : ''}

                ${
                  isSelected
                    ? `
                      border-[#176B45]
                      bg-[#176B45]
                      text-white
                      shadow-[0_3px_0_#105336,0_6px_12px_rgba(23,107,69,0.12)]
                    `
                    : `
                      border-white
                      bg-[#FAFBF7]
                      text-[#536154]
                      shadow-[3px_4px_8px_rgba(38,56,36,0.06),-2px_-2px_6px_rgba(255,255,255,0.9)]
                      hover:border-[#D7E5CF]
                      hover:bg-white
                      hover:text-[#176B45]
                      hover:shadow-[4px_6px_12px_rgba(38,56,36,0.08)]
                    `
                }
              `}
            >
              <Icon
                size={17}
                strokeWidth={2}
                className={`
                  shrink-0 transition-transform duration-200
                  ${
                    isSelected
                      ? 'text-white'
                      : 'text-[#64806A] group-hover:scale-105 group-hover:text-[#176B45]'
                  }
                `}
              />

              <span>{label}</span>

              {isSelected && (
                <span className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-[#B8E6C7]" />
              )}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-xs leading-5 text-[#8A9489]">
        Choose what you want your QR code to share.
      </p>
    </div>
  );
}
