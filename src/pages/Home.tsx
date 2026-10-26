import { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import UseCases from '../components/sections/UseCases';
import FAQ from '../components/sections/FAQ';

import QRTypeSelector,  {type QRType } from '../components/qr/QRTypeSelector';
import QRInputForm from '../components/qr/QRInputForm';
import QRPreview from '../components/qr/QRPreview';
import QRCustomization from '../components/qr/QRCustomization';
import QRDownloadActions from '../components/qr/QRDownloadActions';

import { 
  buildUrlPayload, buildTextPayload, buildWifiPayload, 
  buildContactPayload, buildEmailPayload, buildPhonePayload, buildSmsPayload 
} from '../lib/qr/payloadBuilders';
import { generateQRDataUrl, defaultQRSettings, type QRSettings } from '../lib/qr/generateQR';
import { downloadPng, downloadSvg } from '../lib/qr/downloads';


export default function Home() {
  const [qrType, setQrType] = useState<QRType>('url');
  const [formData, setFormData] = useState<any>({});
  const [settings, setSettings] = useState<QRSettings>(defaultQRSettings);
  const [payload, setPayload] = useState<string>('');
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      let newPayload = '';
      switch (qrType) {
        case 'url': newPayload = buildUrlPayload(formData.url); break;
        case 'text': newPayload = buildTextPayload(formData.text); break;
        case 'wifi': newPayload = buildWifiPayload(formData.ssid, formData.password, formData.encryption, formData.hidden); break;
        case 'contact': newPayload = buildContactPayload(formData.name, formData.phone, formData.email, formData.org); break;
        case 'email': newPayload = buildEmailPayload(formData.email, formData.subject, formData.body); break;
        case 'phone': newPayload = buildPhonePayload(formData.phone); break;
        case 'sms': newPayload = buildSmsPayload(formData.phone, formData.message); break;
      }
      setPayload(newPayload || '');
      setError(null);
    } catch (err) {
      setPayload('');
      setError('Invalid input parameters');
    }
  }, [formData, qrType]);

  useEffect(() => {
    const renderQR = async () => {
      if (!payload) {
        setDataUrl(null);
        return;
      }
      try {
        const url = await generateQRDataUrl(payload, settings);
        setDataUrl(url);
        setError(null);
      } catch (err) {
        setDataUrl(null);
        setError('Failed to render QR code.');
      }
    };
    const timeoutId = setTimeout(renderQR, 150);
    return () => clearTimeout(timeoutId);
  }, [payload, settings]);

  const handleTypeChange = (type: QRType) => {
    setQrType(type);
    setFormData({});
  };


return (
  <div className="min-h-screen bg-[#F7F8F4] font-sans flex flex-col">
    <Header />

    {/* Full-width hero, outside the constrained content wrapper */}
    <Hero />

    {/* Main content stays aligned and centered */}
    <main className="w-full flex-grow px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1560px]">
        {/* Generator Workspace */}
        <section id="generator" className="scroll-mt-24">
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            {/* Left Column: Inputs */}
            <div className="flex w-full flex-col gap-6 lg:w-7/12">
              <div className="rounded-2xl border border-[#E2E7DE] bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-[#202820]">
                  Select Type
                </h2>

                <QRTypeSelector
                  selected={qrType}
                  onSelect={handleTypeChange}
                />

                <div className="mt-6">
                  <QRInputForm
                    type={qrType}
                    formData={formData}
                    onChange={setFormData}
                  />
                </div>
              </div>

              <QRCustomization
                settings={settings}
                onChange={setSettings}
                onReset={() => setSettings(defaultQRSettings)}
              />
            </div>

            {/* Right Column: Preview and Actions */}
            <div className="flex w-full flex-col gap-0 lg:w-5/12 lg:sticky lg:top-24">
              <QRPreview dataUrl={dataUrl} error={error} />

              <QRDownloadActions
                onDownloadPng={() =>
                  downloadPng(dataUrl!, 'gobrc-qr.png')
                }
                onDownloadSvg={() =>
                  downloadSvg(payload, settings, 'gobrc-qr.svg')
                }
                payload={payload}
                disabled={!dataUrl || !!error}
              />
            </div>
          </div>
        </section>

        <UseCases />
        <FAQ />
      </div>
    </main>

    <Footer />
  </div>
);

}