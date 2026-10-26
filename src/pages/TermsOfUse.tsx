
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const updated = 'October 26, 2026';

const sections = [
  {
    title: '1. About these terms',
    content: (
      <>
        These Terms of Use govern your access to and use of GoBRC QR,
        a QR code generation tool operated by Blazing Render Creation
        Hub LLP (“BRC HUB LLP”, “we”, “us” or “our”).
        <p className="mt-3">
          By using the website, you agree to these terms. If you do not
          agree, please stop using the service.
        </p>
      </>
    ),
  },
  {
    title: '2. What GoBRC QR does',
    content: (
      <>
        GoBRC QR allows you to create QR codes for supported content,
        including website URLs, plain text, Wi-Fi details, contact
        information, email, phone numbers and SMS.
        <p className="mt-3">
          The service may provide customization options and downloads
          in formats such as PNG and SVG. Available features may change
          as the product develops.
        </p>
        <p className="mt-3">
          Unless a feature is expressly described otherwise, generated
          QR codes are static: the information is encoded in the code
          itself. We do not promise that a QR code can be remotely
          edited or that its destination can be changed after creation.
        </p>
      </>
    ),
  },
  {
    title: '3. Your responsibility for content',
    content: (
      <>
        You are responsible for the information you enter, the QR
        codes you create and the way you use or distribute them.
        You agree not to use GoBRC QR to:
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Violate applicable laws or another person's rights.</li>
          <li>Share personal information without appropriate authority.</li>
          <li>Facilitate fraud, phishing, impersonation or deception.</li>
          <li>Distribute malware or links intended to harm others.</li>
          <li>Infringe copyright, trademarks or other intellectual property.</li>
          <li>Interfere with the service or attempt unauthorized access.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. QR codes and external destinations',
    content: (
      <>
        A QR code may open a website or trigger an action in another
        application. Before distributing a QR code, verify that its
        content and destination are correct and safe.
        <p className="mt-3">
          We do not control third-party websites, services, network
          connections or applications opened by a QR code. We are not
          responsible for their content, availability, security or
          privacy practices.
        </p>
        <p className="mt-3">
          A generated QR code does not guarantee that its destination
          will remain online, that a phone number will remain active,
          or that a Wi-Fi network will be available.
        </p>
      </>
    ),
  },
  {
    title: '5. Downloads and scanning',
    content: (
      <>
        We aim to generate QR codes that work as expected, but scanning
        performance can depend on contrast, size, print quality, damage,
        device capability, encoded content and other conditions.
        <p className="mt-3">
          You should test a QR code on multiple devices before using it
          on packaging, signage, marketing materials, payments or other
          important applications.
        </p>
        <p className="mt-3">
          You are responsible for keeping copies of downloaded files
          that you need. We do not promise to retain or recover your
          generated QR codes.
        </p>
      </>
    ),
  },
  {
    title: '6. Intellectual property',
    content: (
      <>
        GoBRC QR's website, branding, interface, design and original
        materials are owned by or licensed to BRC HUB LLP, except where
        otherwise indicated.
        <p className="mt-3">
          Subject to these terms and applicable law, you may use the
          QR codes you generate for lawful personal or commercial
          purposes. You remain responsible for having the rights and
          permissions necessary for the content you encode.
        </p>
        <p className="mt-3">
          These terms do not transfer ownership of our brand, website
          or underlying software to you.
        </p>
      </>
    ),
  },
  {
    title: '7. Availability and changes',
    content: (
      <>
        We may improve, modify, suspend or discontinue features, or
        restrict access where reasonably necessary for maintenance,
        security, abuse prevention or legal compliance.
        <p className="mt-3">
          We aim to keep the service available, but do not guarantee
          uninterrupted access, error-free operation or compatibility
          with every device and browser.
        </p>
      </>
    ),
  },
  {
    title: '8. Disclaimers',
    content: (
      <>
        GoBRC QR is provided on an “as available” basis, to the extent
        permitted by applicable law. We do not guarantee that every
        generated code will scan successfully in every environment or
        that third-party destinations will function as intended.
        <p className="mt-3">
          Nothing in these terms excludes or limits any consumer rights,
          statutory guarantees or other protections that cannot lawfully
          be excluded or limited.
        </p>
      </>
    ),
  },
  {
    title: '9. Limitation of liability',
    content: (
      <>
        To the extent permitted by applicable law, BRC HUB LLP will
        not be liable for indirect or consequential losses arising
        from your use of the service, including losses caused by
        incorrect QR content, unavailable external destinations or
        your failure to test a QR code before distributing it.
        <p className="mt-3">
          These terms do not exclude liability that cannot legally
          be excluded under applicable law. Your statutory rights
          remain unaffected.
        </p>
      </>
    ),
  },
  {
    title: '10. Privacy',
    content: (
      <>
        Your use of GoBRC QR is also subject to our{' '}
        <a
          href="/privacy"
          className="font-bold text-[#176B45] underline underline-offset-4"
        >
          Privacy Policy
        </a>
        , which explains how information may be processed in connection
        with the service.
      </>
    ),
  },
  {
    title: '11. Suspension or misuse',
    content: (
      <>
        We may restrict or suspend access where we reasonably believe
        the service is being misused, security is at risk, these terms
        have been materially violated or we are required to act by law.
      </>
    ),
  },
  {
    title: '12. Governing law',
    content: (
      <>
        These terms are governed by the laws of India, subject to
        applicable legal requirements and consumer protections.
        Any dispute will be handled by a court or forum with appropriate
        jurisdiction under applicable law.
        <p className="mt-3">
          This section does not remove any right you may have to bring
          a claim before a forum that is legally available to you.
        </p>
      </>
    ),
  },
  {
    title: '13. Changes to these terms',
    content: (
      <>
        We may revise these terms as the service evolves or legal
        requirements change. The updated date at the top will be
        revised when changes are made. Continued use after updated
        terms are published is subject to applicable law and any
        notice or consent requirements that apply.
      </>
    ),
  },
  {
    title: '14. Contact',
    content: (
      <>
        Questions about these terms can be directed to:
        <p className="mt-3 font-semibold text-[#202820]">
          Blazing Render Creation Hub LLP
        </p>
        <p className="mt-1">
          Website:{' '}
          <a
            href="https://www.brchub.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#176B45] underline underline-offset-4"
          >
            www.brchub.tech
          </a>
        </p>
      </>
    ),
  },
];

export default function TermsOfUse() {
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
            Terms of Use
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#687268] sm:text-base">
            Simple guidelines for using GoBRC QR responsibly, creating
            QR codes and understanding the limits of the service.
          </p>

          <p className="mt-5 text-xs text-[#8A9489]">
            Last updated: {updated}
          </p>
        </header>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { icon: CheckCircle2, label: 'Use responsibly' },
            { icon: AlertTriangle, label: 'Verify before sharing' },
            { icon: Scale, label: 'Subject to applicable law' },
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
            href="/privacy"
            className="inline-flex items-center gap-2 font-bold text-[#176B45] hover:underline"
          >
            <ShieldCheck size={13} />
            Privacy Policy
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
