import styles from './Prato.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import { lazy } from 'react';

function Prato () {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find(item => item.id === Number(id));

  const NotFound = lazy(() => import('Pages/NotFound/NotFound'));
  const TagsPrato = lazy(() => import('components/TagsPrato/TagsPrato'));
  const PaginaPadrao = lazy(() => import('components/PaginaPadrao/PaginaPadrao'));

  if (!prato)
    return <NotFound />;

  return(
    <PaginaPadrao>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
        </div>
        <TagsPrato {...prato} />
      </section>
    </PaginaPadrao>
  );
}

export default Prato;
