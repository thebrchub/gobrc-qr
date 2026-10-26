import QRCode from 'qrcode';
import {type QRSettings, defaultQRSettings } from './generateQR';

export const downloadPng = (dataUrl: string, filename: string = 'gobrc-qr.png') => {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadSvg = async (
  payload: string,
  settings: Partial<QRSettings> = {},
  filename: string = 'gobrc-qr.svg'
) => {
  if (!payload) return;
  const mergedSettings = { ...defaultQRSettings, ...settings };
  
  try {
    const svgString = await QRCode.toString(payload, {
      type: 'svg',
      color: mergedSettings.color,
      errorCorrectionLevel: mergedSettings.errorCorrectionLevel,
      margin: mergedSettings.margin,
      width: mergedSettings.width
    });
    
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.download = filename;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Failed to generate SVG', err);
  }
};