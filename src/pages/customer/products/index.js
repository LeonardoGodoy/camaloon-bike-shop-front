import React from "react";
import { useHistory } from "react-router-dom";

import useFetch from "./../../../hooks/useFetch";
import { fetchProducts } from "./../../../adapters/api";
import Loader from "./../../../components/Loader";

function Product({ product }) {
  const history = useHistory();

  const handleProductClick = ({ id }) => {
    let path = `/products/${id}`;
    history.push(path);
  };

  return (
    <div
      key={product.id}
      className="product-card"
      onClick={() => handleProductClick(product)}
    >
      <img
        className="product-card__img"
        src={process.env.PUBLIC_URL + "/bike-card.jpg"}
        alt="bike"
      />
      <p className="product-card__title">{product.title}</p>
    </div>
  );
}

function ProductsIndex() {
  const { isLoaded, response, error } = useFetch(fetchProducts());

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <Loader />;
  } else {
    content = (
      <div className="product-list">
        {response.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return <div className="page--center">{content}</div>;
}

export default ProductsIndex;
