import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout/MainLayout';
import { Home } from '@/pages/Home/Home';
import { Sobre } from '@/pages/Sobre/Sobre';
import { Produtos } from '@/pages/Produtos/Produtos';
import { Catalogos } from '@/pages/Catalogos/Catalogos';
import { Contato } from '@/pages/Contato/Contato';
import { NotFound } from '@/pages/NotFound/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/catalogos" element={<Catalogos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
