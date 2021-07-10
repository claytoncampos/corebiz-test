import { Container, Content } from './styles';
import logo from '../../../assets/images/logo.svg';
import searchIcon from '../../../assets/images/searchIcon.svg';
import carIcon from '../../../assets/images/carIcon.svg';
import menuIcon from '../../../assets/images/menuIcon.svg';

export function HeaderMobile() {
  return (
    <Container>
      <Content>
        <div>
          <img src={menuIcon} alt="menu" />
          <img className="logo" src={logo} alt="corebiz" />
          <nav>
            <div className="buy-car">
              <img src={carIcon} alt="carrinho de compra" />
              <div>
                <p>2</p>
              </div>
            </div>
          </nav>
        </div>
        <nav>
          <div className="input-search">
            <input type="text" placeholder="O que está procurando?" />
            <img src={searchIcon} alt="corebiz" />
          </div>
        </nav>
      </Content>
    </Container>
  );
}
