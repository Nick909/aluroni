import Footer from 'components/Footer/Footer';
import Menu from 'components/Menu/Menu';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Cardapio = lazy(() => import('Pages/Cardapio/Cardapio'));
const Inicio = lazy(() => import('Pages/Inicio/Inicio'));
const NotFound = lazy(() => import('Pages/NotFound/NotFound'));
const Prato = lazy(() => import('Pages/Prato/Prato'));
const Sobre = lazy(() => import('Pages/Sobre/Sobre'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao/PaginaPadrao'));

export default function AppRouter () {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Suspense fallback={<p> Carregando... </p>}>
          <Routes>
            <Route path='/' element={<PaginaPadrao />} >
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='Sobre' element={<Sobre />} />
            </Route>
            <Route path='prato/:id' element={<Prato />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
