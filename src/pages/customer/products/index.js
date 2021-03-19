import React from "react";
import useFetch from "./../../../hooks/useFetch";
import { fetchProducts } from "./../../../adapters/api";

import Loader from "./../../../components/Loader";
import ProductCard from "./../../../components/products/ProductCard";

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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return <div className="page--center">{content}</div>;
}

export default ProductsIndex;
