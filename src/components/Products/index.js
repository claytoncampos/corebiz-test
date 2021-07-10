import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';

import { Container, Content, Block } from './styles';

import { api } from '../../services/api';
import { useWindowSize } from '../hooks/useWindowSize';

import formatCurrency from '../../utils/formatCurrency';

import promoCard from '../../assets/images/promoCard.svg';
import star from '../../assets/images/star.svg';
import starOutLine from '../../assets/images/starOutline.svg';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState();
  const [products, setProducts] = useState([]);
  // const [count, setCount] = useContext(CounterCart);

  const [width] = useWindowSize();

  const [isMobile, setIsMobile] = useState(width < 500);

  useEffect(() => {
    setIsMobile(width < 500);
  }, [width]);

  function handleSelectedProduct(id) {
    setSelectedProduct(id);
  }

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
      console.log(response.data);
    }
    getProducts();
  }, []);

  //   function handleBuy() {
  //     setCount(count + 1);
  //   }

  function renderStars(stars) {
    const response = [];
    for (let i = 0; i < 5; i++) {
      response.push(
        <img
          height="10"
          width="10"
          src={i < stars ? star : starOutLine}
          alt="Estrelas"
        />
      );
    }
    return response;
  }

  return (
    <Container>
      <Content>
        <h1>Mais vendidos</h1>
        <Block className="block"></Block>
        <Carousel itemsToShow={isMobile ? 2 : 4}>
          {products.map((product) => (
            <div
              key={product.productId}
              className={
                product.productId === selectedProduct
                  ? 'active-carousel-item'
                  : 'carousel-item'
              }
            >
              {product.listPrice && (
                <img className="promo-card" src={promoCard} alt="promoção" />
              )}
              <img
                onClick={() => handleSelectedProduct(product.productId)}
                src={product.imageUrl}
                alt="produto"
              />
              <p> {product.productName}</p>
              <div className="stars-container">
                {renderStars(product.stars)}
              </div>
              {product.listPrice && (
                <p className="list-price">
                  de {formatCurrency(product.listPrice)}
                </p>
              )}
              <h2>{formatCurrency(product.price)}</h2>
              {product.installments.map((installment) => (
                <p key={installment.quantity}>
                  ou em {installment.quantity}x de{' '}
                  {formatCurrency(installment.value)}
                </p>
              ))}
              {product.productId === selectedProduct && (
                <button onClick={''}>COMPRAR</button>
              )}
            </div>
          ))}
        </Carousel>
      </Content>
    </Container>
  );
}
