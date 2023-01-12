import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';
import { memo, useMemo } from 'react';

type Props = {
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador ({busca, setBusca}: Props) {
  const elemento = useMemo(() =>
    <CgSearch
      size={20}
      color="#4C4D5E"
    />, []);
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={e => setBusca(e.target.value)}
        placeholder='Buscar'
      />
      {elemento}
    </div>
  );
}

export default memo(Buscador);
