import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import React, { memo, useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

function Ordenador ({
  ordenador,
  setOrdenador}: Props
) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== ''
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordenar por'}</span>
      {/* <MdKeyboardArrowUp
        size={20}
        style={{
          transform: `rotate(${aberto ? 0 : 180}deg)`
        }}
      /> */}
      {aberto? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto
      })}>
        {opcoes.map(opcao => (
          <div
            className={styles.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

export default memo(Ordenador);
