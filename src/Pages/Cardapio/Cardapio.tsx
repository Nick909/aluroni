import styles from './Cardapio.module.scss';
import Buscador from './Buscador/Buscador';
import { useState } from 'react';
import Filtros from './Filtros/Filtros';
import Ordenador from './Ordenador/Ordenador';
import Itens from './Itens/Itens';
import stylesTema from 'styles/Tema.module.scss';

export default function Cardapio () {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro}/>
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
    </section>
  );
}
