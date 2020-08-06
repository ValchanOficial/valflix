import React from 'react';

import { ReactComponent as Logo } from '../../assets/image/valflix.svg';

import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/ValchanOficial/valflix">
        <Logo className="Logo" title="Valflix"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
