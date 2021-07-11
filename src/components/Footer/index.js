import React from 'react';

import { Container } from './styles';

import emailIcon from '../../assets/images/emailIcon.svg';
import phoneIcon from '../../assets/images/phoneIcon.svg';
import smallLogo from '../../assets/images/smallLogo.svg';
import vtex from '../../assets/images/vtex.svg';

export default function Footer() {
  return (
    <Container>
      <div>
        <h1>Localização</h1>
        <div className="border"></div>
        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p>Alphavile SP</p>
        <p>brasil@corebiz.ag</p>
        <p>+55 11 3090 1039</p>
      </div>
      <div>
        <button>
          <img src={emailIcon} alt="email" />
          <p>ENTRE EM CONTATO</p>
        </button>
        <button>
          <img src={phoneIcon} alt="email" />
          <p>
            FALE COM O NOSSO
            <br />
            CONSULTOR ONLINE
          </p>
        </button>
      </div>
      <div className="small-logos">
        <div className="small-logo">
          <p>Created by</p>
          <img src={smallLogo} alt="corebiz logo" />
        </div>
        <div className="small-logo">
          <p>Powered by</p>
          <img src={vtex} alt="vtex logo" />
        </div>
      </div>
    </Container>
  );
}
