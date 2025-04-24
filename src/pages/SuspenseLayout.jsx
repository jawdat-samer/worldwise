import { Suspense } from 'react';
import SpinnerFullPage from '../components/SpinnerFullPage';
import { useLocation } from 'react-router-dom';

export default function SuspenseLayout({ children }) {
  const location = useLocation();

  return (
    <Suspense fallback={<SpinnerFullPage />} key={location.key}>
      {children}
    </Suspense>
  );
}
