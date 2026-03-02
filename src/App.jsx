import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './routes/ProtectedRoute';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DesignRequestPage from './pages/DesignRequestPage';
import AdminPage from './pages/AdminPage';
import AdminIdeaDetailPage from './pages/AdminIdeaDetailPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ImpressumPage from './pages/ImpressumPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/termek/:id" element={<ProductPage />} />
        <Route path="/kosar" element={<CartPage />} />
        <Route path="/penztar" element={<CheckoutPage />} />
        <Route path="/egyedi-tervezes" element={<DesignRequestPage />} />
        <Route path="/aszf" element={<TermsPage />} />
        <Route path="/adatvedelem" element={<PrivacyPage />} />
        <Route path="/impresszum" element={<ImpressumPage />} />
        <Route path="/bejelentkezes" element={<LoginPage />} />
        <Route path="/regisztracio" element={<RegisterPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requireAdmin>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/otlet/:id"
          element={
            <ProtectedRoute requireAdmin>
              <AdminIdeaDetailPage />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
