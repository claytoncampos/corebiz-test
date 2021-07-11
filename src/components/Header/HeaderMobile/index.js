import { Container, Content, InputSearch } from './styles';
import { useContext } from 'react';
import { CounterCartContext } from '../../hooks/useItems';

import logo from '../../../assets/images/logo.svg';
import searchIcon from '../../../assets/images/searchIcon.svg';
import carIcon from '../../../assets/images/carIcon.svg';
import menuIcon from '../../../assets/images/menuIcon.svg';

export function HeaderMobile() {
  const [count] = useContext(CounterCartContext);

  return (
    <Container>
      <Content>
        <div>
          <img src={menuIcon} width={22.5} alt="menu" />
          <img className="logo" src={logo} alt="corebiz" />
          <nav>
            <div className="buy-car">
              <img src={carIcon} alt="carrinho de compra" />
              <div>
                <p>{count}</p>
              </div>
            </div>
          </nav>
        </div>
        <nav>
          <InputSearch>
            <input type="text" placeholder="O que está procurando?" />
            <img src={searchIcon} alt="corebiz" />
          </InputSearch>
        </nav>
      </Content>
    </Container>
  );
}
