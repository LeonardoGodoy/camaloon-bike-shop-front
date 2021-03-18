import React from "react";
import { Link } from "react-router-dom";

import useFetch from "./../../../hooks/useFetch";
import { fetchProducts } from "./../../../adapters/api";
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
      <div class="">
        <Link className="btn btn--main" to="/admin/products/new">New product</Link>

        <table>
          <thead>
            <th>
              <td>Product title</td>
              <td>actions</td>
            </th>
          </thead>
          <tbody>
            {response.map((product) => (
              <tr>
                <td>{product.title}</td>
                <td>
                  <Link className="btn" to={`/admin/products/${product.id}/edit`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <div class="page--center">{content}</div>;
}

export default ProductsIndex;
