import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout/MainLayout';
import { Home } from '@/pages/Home/Home';
import { ProductLine } from '@/pages/ProductLine/ProductLine';
import { About } from '@/pages/About/About';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/produtos/:slug" element={<ProductLine />} />
        <Route path="/sobre" element={<About />} />
      </Route>
    </Routes>
  );
}
