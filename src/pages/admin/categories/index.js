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
      <div>
        <h1>Categories</h1>

        <Link className="btn btn--main" to="/admin/categories/new">
          New category
        </Link>

        <div className="admin-list">
          {response.map((category) => (
            <div className="admin-list__item">
              <div className="admin-list__content">
                {category.name}
              </div>
            </div>
          ))}
          </div>
      </div>
    );
  }

  return <div className="page--center">{content}</div>;
}

export default CategoriesIndex;
