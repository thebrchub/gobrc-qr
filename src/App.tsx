import { useEffect, useState } from 'react';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

type Page = 'home' | 'privacy' | 'terms';

function getPage(): Page {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/privacy') return 'privacy';
  if (path === '/terms') return 'terms';

  return 'home';
}

function App() {
  const [page, setPage] = useState<Page>(getPage);

  useEffect(() => {
    const handleNavigation = () => {
      setPage(getPage());
    };

    window.addEventListener('popstate', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  useEffect(() => {
    if (page !== 'home') return;

    const params = new URLSearchParams(window.location.search);
    const section = params.get('section');

    if (!section) return;

    const allowedSections = ['generator', 'use-cases', 'faq'];

    if (!allowedSections.includes(section)) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [page]);

  return (
    <>
      {page === 'home' && <Home />}
      {page === 'privacy' && <PrivacyPolicy />}
      {page === 'terms' && <TermsOfUse />}
    </>
  );
}

export default App;
