import Cardapio from 'Pages/Cardapio/Cardapio';
import Inicio from 'Pages/Inicio/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu/Menu';
import PaginaPadrao from 'components/PaginaPadrao/PaginaPadrao';
import Sobre from 'Pages/Sobre/Sobre';
import Footer from 'components/Footer/Footer';
import NotFound from 'Pages/NotFound/NotFound';
import Prato from 'Pages/Prato/Prato';

export default function AppRouter () {
  return (
    <main>
      <Router className="container">
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='Sobre' element={<Sobre />} />
            <Route path='prato/:id' element={<Prato />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
