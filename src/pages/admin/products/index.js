import React from "react";
import { Link } from "react-router-dom";

import useFetch from "./../../../hooks/useFetch";
import { fetchProducts } from "./../../../adapters/adminApi";

import Loader from "./../../../components/Loader";

function ProductsIndex() {
  const { isLoaded, response, error } = useFetch(fetchProducts());

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <Loader />;
  } else {
    content = (
      <div>
        <h1>Products</h1>

        <Link className="btn btn--main" to="/admin/products/new">
          New product
        </Link>

        <div class="admin-list">
          {response.map((product) => (
            <div class="admin-list__item">
              <div class="admin-list__content">{product.title}</div>

              <div class="admin-list__actions admin-list__content">
                <Link className="btn" to={`/admin/products/${product.id}/edit`}>
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div class="page--center">{content}</div>;
}

export default ProductsIndex;
