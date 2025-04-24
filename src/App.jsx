import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './pages/ProtectedRoute';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import SuspenseLayout from './pages/SuspenseLayout';

// import Homepage from './pages/Homepage';
// import Product from './pages/Product';
// import Pricing from './pages/Pricing';
// import Login from './pages/Login';
// import AppLayout from './pages/AppLayout';
// import PageNotFound from './pages/PageNotFound';

// dist/assets/index-By_7M5cQ.css    8.60 kB │ gzip:   2.24 kB
// dist/assets/index-YWhgZwoN.js   394.22 kB │ gzip: 122.65 kB

const Homepage = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Login = lazy(() => import('./pages/Login'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

// dist/assets/Logo-BYigXoGP.css             0.03 kB │ gzip:  0.05 kB
// dist/assets/Login-B5O0XBJ4.css            0.35 kB │ gzip:  0.22 kB
// dist/assets/Product-ftt4lYil.css          0.47 kB │ gzip:  0.27 kB
// dist/assets/Homepage-CwxxRv27.css         0.49 kB │ gzip:  0.30 kB
// dist/assets/PageNav-CcPXYRy9.css          0.51 kB │ gzip:  0.28 kB
// dist/assets/AppLayout-Dm7aGF6B.css        1.91 kB │ gzip:  0.70 kB
// dist/assets/index-CCY_JPrF.css            4.84 kB │ gzip:  1.54 kB
// dist/assets/Product.module-Be8LLB42.js    0.06 kB │ gzip:  0.07 kB
// dist/assets/PageNotFound-Bw9Wm8xI.js      0.15 kB │ gzip:  0.15 kB
// dist/assets/Logo-6aJeMiLB.js              0.21 kB │ gzip:  0.19 kB
// dist/assets/PageNav-C6tcYyPg.js           0.49 kB │ gzip:  0.27 kB
// dist/assets/Pricing-DVVJ7KDu.js           0.65 kB │ gzip:  0.41 kB
// dist/assets/Homepage-B5r9FnqL.js          0.67 kB │ gzip:  0.41 kB
// dist/assets/Product-ENVVzGNK.js           0.86 kB │ gzip:  0.49 kB
// dist/assets/Login-KRt5y4Ju.js             1.03 kB │ gzip:  0.55 kB
// dist/assets/AppLayout-B5NRLTxq.js       156.82 kB │ gzip: 46.17 kB
// dist/assets/index-vfwxuMI7.js           235.23 kB │ gzip: 76.00 kB

export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <SuspenseLayout>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }>
                <Route index element={<Navigate to="cities" replace={true} />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </SuspenseLayout>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}
