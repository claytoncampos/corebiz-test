import React, { useEffect, useState } from 'react';
import * as S from './styles';

import { HeaderMobile } from './HeaderMobile';
import { useWindowSize } from '../../components/hooks/useWindowSize';
import logo from '../../assets/images/logo.svg';
import carIcon from '../../assets/images/carIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import personIcon from '../../assets/images/personIcon.svg';

export default function Header() {
  const [width] = useWindowSize();

  const [isMobile, setIsMobile] = useState(width < 480);

  useEffect(() => {
    setIsMobile(width < 480);
  }, [width]);

  return (
    <>
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <S.Container>
          <S.Content>
            <img className="logo" src={logo} alt="corebiz" />
            <nav>
              <div className="input-search">
                <input type="text" placeholder="O que está procurando?" />
                <img src={searchIcon} alt="ícone lupa buscar produtos" />
              </div>
              <div className="my-account">
                <img src={personIcon} alt="ícone pessoa" />
                <p>Minha Conta</p>
              </div>
              <div className="buy-car">
                <img src={carIcon} alt="Ícone carrinho de compras" />
                <div>
                  <p>1</p>
                </div>
              </div>
            </nav>
          </S.Content>
        </S.Container>
      )}
    </>
  );
}
