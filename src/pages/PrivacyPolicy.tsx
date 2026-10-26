import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import {
  FileText,
  ShieldCheck,
  Laptop,
  ExternalLink,
} from 'lucide-react';

const updated = 'October 26, 2026';

const sections = [
  {
    title: '1. About this policy',
    content: (
      <>
        This Privacy Policy describes how Blazing Render Creation Hub LLP
        (“BRC HUB LLP”, “we”, “us” or “our”) handles information when you use
        GoBRC QR.
      </>
    ),
  },
  {
    title: '2. Information you enter',
    content: (
      <>
        GoBRC QR lets you enter content such as URLs, text, Wi-Fi credentials,
        contact details, email addresses, phone numbers and messages to create
        a QR code. The QR code is generated in your browser. The app does not
        send this entered content to our servers or save it for later use.
        <p className="mt-3">
          The content is included in the QR code you create. Anyone who can
          scan or otherwise access that code may be able to read the encoded
          information. Avoid encoding sensitive information unless you are
          comfortable sharing it with people who can access the code.
        </p>
      </>
    ),
  },
  {
    title: '3. Information handled by your browser',
    content: (
      <>
        Your browser temporarily processes the information you enter to
        generate and preview a QR code. If you choose to copy the content, it
        is written to your device’s clipboard. If you download a QR code, the
        file is saved using your browser’s normal download behavior.
        <p className="mt-3">
          We do not use the app to create an account, maintain a profile, or
          store your generated QR codes.
        </p>
      </>
    ),
  },
  {
    title: '4. Technical information',
    content: (
      <>
        When you visit a website, your hosting provider and other
        infrastructure providers may process technical information such as
        your IP address, browser type, request time and pages requested in
        server or security logs. This processing is controlled by those
        providers and may be necessary to deliver, secure and troubleshoot the
        website.
        <p className="mt-3">
          We do not currently add analytics or advertising trackers to GoBRC QR.
          If this changes, we will update this policy and provide any notices or
          choices required by law.
        </p>
      </>
    ),
  },
  {
    title: '5. Cookies and similar storage',
    content: (
      <>
        GoBRC QR does not itself use cookies or browser storage to retain the
        content you enter or the QR codes you generate. Website infrastructure
        providers may use technologies necessary to operate or protect the
        site; consult their notices for details about their practices.
      </>
    ),
  },
  {
    title: '6. Links to other websites',
    content: (
      <>
        QR codes and links on our website may take you to third-party websites
        or services. Those services have their own privacy practices, which we
        do not control. Review their privacy notices before sharing
        information with them.
      </>
    ),
  },
  {
    title: '7. Security and retention',
    content: (
      <>
        Since the app does not send or retain the content you enter, that
        content is not available to us to retrieve. You are responsible for
        keeping downloaded QR files secure and for considering who can access
        the information encoded in them. Technical logs maintained by
        infrastructure providers are subject to their retention and security
        practices.
      </>
    ),
  },
  {
    title: '8. Your choices and rights',
    content: (
      <>
        You can choose what information to enter and whether to copy or
        download a generated QR code. You can clear your clipboard or delete
        downloaded files using your device’s settings. Depending on where you
        live, you may have additional privacy rights under applicable law.
      </>
    ),
  },
  {
    title: '9. Children’s privacy',
    content: (
      <>
        GoBRC QR is a general-purpose tool and is not directed to children.
        Please do not submit a child’s personal information unless you have the
        authority to do so.
      </>
    ),
  },
  {
    title: '10. Changes to this policy',
    content: (
      <>
        We may update this policy as the service or applicable requirements
        change. The date at the top of this page indicates when it was last
        updated. Where required, we will provide additional notice of material
        changes.
      </>
    ),
  },
  {
    title: '11. Contact',
    content: (
      <>
        For questions or privacy requests, contact Blazing Render Creation Hub
        LLP through its website:
        <p className="mt-3">
          <a
            href="https://www.brchub.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#176B45] underline underline-offset-4"
          >
            www.brchub.tech
            <ExternalLink size={13} className="ml-1 inline-block" />
          </a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (

    <div className="min-h-screen bg-[#F7F8F4] font-sans flex flex-col">
    <Header />
    <main className="min-h-screen bg-[#F7F8F4] px-4 py-10 text-[#354237] sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-4xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-xl text-sm font-bold text-[#176B45] transition hover:text-[#125B3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45] focus-visible:ring-offset-4"
        >
          <span aria-hidden="true">←</span>
          Back to GoBRC QR
        </a>

        <header className="mt-8 overflow-hidden rounded-[28px] border border-[#E2E7DE] bg-white p-6 shadow-[0_10px_30px_rgba(38,56,36,0.05)] sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-[#EAF3E3] text-[#176B45] shadow-sm">
            <FileText size={24} />
          </div>

          <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-[#64806A]">
            GoBRC QR · Legal
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.045em] text-[#202820] sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#687268] sm:text-base">
            Learn what information is handled when you create, copy and download
            QR codes with GoBRC QR.
          </p>

          <p className="mt-5 text-xs text-[#8A9489]">
            Last updated: {updated}
          </p>
        </header>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { icon: Laptop, label: 'QR codes generated in your browser' },
            { icon: ShieldCheck, label: 'Your entered content is not saved by the app' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-[#E2E7DE] bg-white p-4"
            >
              <Icon size={18} className="shrink-0 text-[#64806A]" />
              <span className="text-xs font-bold text-[#536154]">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-4">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[22px] border border-[#E2E7DE] bg-white p-5 shadow-[0_4px_16px_rgba(38,56,36,0.025)] sm:p-7"
            >
              <h2 className="text-base font-extrabold tracking-[-0.02em] text-[#202820] sm:text-lg">
                {section.title}
              </h2>
              <div className="mt-3 text-sm leading-7 text-[#687268]">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 px-1 text-xs text-[#8A9489]">
          <span>© {new Date().getFullYear()} GoBRC QR</span>
          <a
            href="/terms"
            className="inline-flex items-center gap-2 font-bold text-[#176B45] hover:underline"
          >
            <FileText size={13} />
            Terms of Use
          </a>
          <a
            href="https://www.brchub.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#176B45] hover:underline"
          >
            BRC HUB LLP
          </a>
        </footer>
      </div>
    </main>
    <Footer />
  </div>
  );
}
