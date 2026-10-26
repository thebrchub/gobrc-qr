
import type { QRType } from './QRTypeSelector';

interface QRInputFormProps {
  type: QRType;
  formData: any;
  onChange: (data: any) => void;
}

const inputClass = "w-full px-4 py-2 border border-[#E2E7DE] rounded-lg bg-white text-[#202820] focus:outline-none focus:ring-2 focus:ring-[#DDF3B5] focus:border-[#176B45] transition-colors";
const labelClass = "block text-sm font-medium text-[#202820] mb-1.5";

export default function QRInputForm({ type, formData, onChange }: QRInputFormProps) {
  const updateField = (field: string, value: string | boolean) => {
    onChange({ ...formData, [field]: value });
  };

  switch (type) {
    case 'url':
      return (
        <div>
          <label className={labelClass}>Website URL</label>
          <input
            type="url"
            placeholder="https://example.com"
            className={inputClass}
            value={formData.url || ''}
            onChange={(e) => updateField('url', e.target.value)}
          />
        </div>
      );
    
    case 'text':
      return (
        <div>
          <label className={labelClass}>Plain Text</label>
          <textarea
            rows={4}
            placeholder="Enter your text here..."
            className={inputClass}
            value={formData.text || ''}
            onChange={(e) => updateField('text', e.target.value)}
          />
        </div>
      );

    case 'wifi':
      return (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Network Name (SSID)</label>
            <input
              type="text"
              placeholder="My WiFi Network"
              className={inputClass}
              value={formData.ssid || ''}
              onChange={(e) => updateField('ssid', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Password</label>
            <input
              type="password"
              placeholder="Network Password"
              className={inputClass}
              value={formData.password || ''}
              onChange={(e) => updateField('password', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Security</label>
            <select
              className={inputClass}
              value={formData.encryption || 'WPA'}
              onChange={(e) => updateField('encryption', e.target.value)}
            >
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">None</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="hidden-wifi"
              checked={formData.hidden || false}
              onChange={(e) => updateField('hidden', e.target.checked)}
              className="rounded text-[#176B45] focus:ring-[#176B45]"
            />
            <label htmlFor="hidden-wifi" className="text-sm text-[#202820]">Hidden Network</label>
          </div>
        </div>
      );

      case 'contact':
      return (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              className={inputClass}
              value={formData.name || ''}
              onChange={(e) => updateField('name', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Phone Number</label>
            <input
              type="tel"
              placeholder="+1 234 567 8900"
              className={inputClass}
              value={formData.phone || ''}
              onChange={(e) => updateField('phone', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              placeholder="jane@example.com"
              className={inputClass}
              value={formData.email || ''}
              onChange={(e) => updateField('email', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Organization (Optional)</label>
            <input
              type="text"
              placeholder="Acme Corp"
              className={inputClass}
              value={formData.org || ''}
              onChange={(e) => updateField('org', e.target.value)}
            />
          </div>
        </div>
      );

    case 'email':
      return (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              placeholder="hello@example.com"
              className={inputClass}
              value={formData.email || ''}
              onChange={(e) => updateField('email', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Subject (Optional)</label>
            <input
              type="text"
              placeholder="Quick question"
              className={inputClass}
              value={formData.subject || ''}
              onChange={(e) => updateField('subject', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Message (Optional)</label>
            <textarea
              rows={3}
              placeholder="Write your message here..."
              className={inputClass}
              value={formData.body || ''}
              onChange={(e) => updateField('body', e.target.value)}
            />
          </div>
        </div>
      );

    case 'phone':
      return (
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            type="tel"
            placeholder="+1 234 567 8900"
            className={inputClass}
            value={formData.phone || ''}
            onChange={(e) => updateField('phone', e.target.value)}
          />
        </div>
      );

    case 'sms':
      return (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Phone Number</label>
            <input
              type="tel"
              placeholder="+1 234 567 8900"
              className={inputClass}
              value={formData.phone || ''}
              onChange={(e) => updateField('phone', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Message (Optional)</label>
            <textarea
              rows={3}
              placeholder="Text message..."
              className={inputClass}
              value={formData.message || ''}
              onChange={(e) => updateField('message', e.target.value)}
            />
          </div>
        </div>
      );

    // To keep this concise, I have implemented URL, Text, and WiFi here. 
    // Contact, Email, Phone, and SMS follow the exact same input pattern.
    
    default:
      return (
        <div className="p-4 bg-[#F7F8F4] text-[#202820] rounded-lg text-sm text-center">
          Configure inputs for {type}
        </div>
      );
  }
}