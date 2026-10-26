import QRCode from 'qrcode';

export interface QRSettings {
  color: {
    dark: string;
    light: string;
  };
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  margin: number;
  width: number;
}

export const defaultQRSettings: QRSettings = {
  color: {
    dark: '#202820', // Text color from design system
    light: '#FFFFFF', // Card color from design system
  },
  errorCorrectionLevel: 'M',
  margin: 4,
  width: 512,
};

export const generateQRDataUrl = async (
  payload: string,
  settings: Partial<QRSettings> = {}
): Promise<string> => {
  if (!payload) return '';
  
  const mergedSettings = { ...defaultQRSettings, ...settings };
  
  try {
    return await QRCode.toDataURL(payload, mergedSettings);
  } catch (err) {
    console.error('Failed to generate QR code', err);
    throw new Error('QR generation failed');
  }
};