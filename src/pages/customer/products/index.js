import React from 'react';
import { useHistory } from "react-router-dom";

import useFetch from './../../../hooks/useFetch';
import { fetchProducts } from './../../../adapters/api';
import Loader from './../../../components/Loader';

function Product({ product }) {
  const history = useHistory();

  const handleProductClick =({ id }) => {
    let path = `/products/${id}`;
    history.push(path);
  }

  return (
    <div key={product.id} class='product-card' onClick={() => handleProductClick(product)}>
      <img class="product-card__img" src="https://source.unsplash.com/190x190/?bycicle,bikeshop" alt="bike"/>
      <p class="product-card__title">{product.title}</p>
    </div>
  );
}

function ProductsIndex() {
  const { isLoaded, response, error } = useFetch(fetchProducts())

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <Loader />;
  } else {
    content = (
      <div class='product-list'>
        {response.map(product => (
          <Product product={product}/>
        ))}
      </div>
    )
  }

  return (
    <div class="page--center">
      {content}
    </div>
  );
}

export default ProductsIndex;
