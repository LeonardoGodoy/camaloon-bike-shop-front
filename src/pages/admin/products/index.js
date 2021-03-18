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

        <div className="admin-list">
          {response.map((product) => (
            <div className="admin-list__item">
              <div className="admin-list__content">{product.title}</div>

              <div className="admin-list__actions admin-list__content">
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

  return <div className="page--center">{content}</div>;
}

export default ProductsIndex;
