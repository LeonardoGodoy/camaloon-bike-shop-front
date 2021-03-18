import React from "react";
import { Link } from "react-router-dom";

import useFetch from "./../../../hooks/useFetch";
import { fetchCategories } from "./../../../adapters/adminApi";
import Loader from "./../../../components/Loader";

function CategoriesIndex() {
  const { isLoaded, response, error } = useFetch(fetchCategories());

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <Loader />;
  } else {
    content = (
      <div class="">
        <Link className="btn btn--main" to="/admin/categories/new">New category</Link>

        <table>
          <thead>
            <th>
              <td>Category name</td>
            </th>
          </thead>
          <tbody>
            {response.map((category) => (
              <tr>
                <td>{category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <div class="page--center">{content}</div>;
}

export default CategoriesIndex;
