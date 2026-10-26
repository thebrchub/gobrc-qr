export const buildUrlPayload = (url: string): string => {
  if (!url) return '';
  return url.includes('://') ? url : `https://${url}`;
};

export const buildTextPayload = (text: string): string => text;

export const buildWifiPayload = (
  ssid: string,
  password?: string,
  encryption: 'WPA' | 'WEP' | 'nopass' = 'WPA',
  hidden: boolean = false
): string => {
  if (!ssid) return '';
  const escapedSsid = ssid.replace(/([\\;:])/g, '\\$1');
  const escapedPassword = password ? password.replace(/([\\;:])/g, '\\$1') : '';
  const hiddenFlag = hidden ? 'true' : 'false';
  return `WIFI:T:${encryption};S:${escapedSsid};P:${escapedPassword};H:${hiddenFlag};;`;
};

export const buildContactPayload = (
  name: string,
  phone: string,
  email: string,
  org?: string
): string => {
  if (!name) return '';
  return `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nFN:${name}${org ? `\nORG:${org}` : ''}\nTEL;TYPE=CELL:${phone}\nEMAIL;TYPE=WORK:${email}\nEND:VCARD`;
};

export const buildEmailPayload = (email: string, subject?: string, body?: string): string => {
  if (!email) return '';
  let payload = `mailto:${email}`;
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  const queryString = params.toString();
  return queryString ? `${payload}?${queryString}` : payload;
};

export const buildPhonePayload = (phone: string): string => {
  return phone ? `tel:${phone}` : '';
};

export const buildSmsPayload = (phone: string, message?: string): string => {
  if (!phone) return '';
  return message ? `SMSTO:${phone}:${message}` : `SMSTO:${phone}`;
};