import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "./../../../hooks/useFetch";
import {
  fetchProduct,
  fetchProductVersions,
  enableProductVersion,
  disableProductVersion,
} from "./../../../adapters/adminApi";

import Loader from "./../../../components/Loader";

function Version({ product, version }) {
  const enable = () => {};

  const disable = () => {
    const requestConfig = disableProductVersion(product.id, version.id);

    fetch(requestConfig.url, requestConfig.options)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          // update version state
          // reload versions
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      {version.property_combination.map((propertyValue) => (
        <div>
          <label>{propertyValue.property_title}</label>
          {propertyValue.value}
        </div>
      ))}

      {version.enabled ? (
        <button onClick={disable}>Disable</button>
      ) : (
        <button onClick={enable}>Enable</button>
      )}
    </div>
  );
}

function Edit() {
  const { productId } = useParams();
  const { isLoaded, response: product, error } = useFetch(
    fetchProduct(productId)
  );
  const {
    isLoaded: isVersionLoaded,
    response: versions,
    error: versionError,
    execute,
  } = useFetch(fetchProductVersions(productId));

  let x;
  if (versions) {
    x = versions.map((version) => (
      <Version product={product} version={version} />
    ));
  }

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <Loader />;
  } else {
    content = (
      <div>
        <h1>Edit Product {productId}</h1>

        <p>{product.title}</p>
        <p>{product.description}</p>

        {x}
        {isVersionLoaded}

        {/* <button onClick={(e) => (execute())}>Test</button> */}
        {/* <NewProductForm categories={response} /> */}
      </div>
    );
  }

  return <div class="page--center">{content}</div>;
}

export default Edit;
