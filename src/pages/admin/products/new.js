import React from "react";

import useFetch from "./../../../hooks/useFetch";
import { fetchCategories } from "./../../../adapters/adminApi";

import Loader from "./../../../components/Loader";
import NewProductForm from "./../../../components/products/NewForm";

function New() {
  const { isLoaded, response, error } = useFetch(fetchCategories());

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <Loader />;
  } else {
    content = (
      <div>
        <h1>New Product</h1>

        <NewProductForm categories={response} />
      </div>
    );
  }

  return <div class="page--center">{content}</div>;
}

export default New;
