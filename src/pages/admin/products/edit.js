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
  const enable = () => {
    const requestConfig = enableProductVersion(product.id, version.id);

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
    <div class="admin-list__item">
      {version.property_combination.map((propertyValue) => (
        <div class="admin-list__content">
          <strong>{propertyValue.property_title}</strong>
          <p>{propertyValue.value}</p>
        </div>
      ))}

      <div class="admin-list__actions admin-list__content">
        {version.enabled ? (
          <button class="btn btn--main" onClick={disable}>
            Disable
          </button>
        ) : (
          <button class="btn" onClick={enable}>
            Enable
          </button>
        )}
      </div>
    </div>
  );
}

function Edit() {
  const { productId } = useParams();
  const { isLoaded, response: product, error } = useFetch(
    fetchProduct(productId)
  );
  const { isLoaded: isVersionLoaded, response: versions } = useFetch(
    fetchProductVersions(productId)
  );

  let versionsList;
  if (!isVersionLoaded) {
    versionsList = <Loader />;
  } else if (versions) {
    versionsList = (
      <div class="admin-list">
        {versions.map((version) => (
          <Version product={product} version={version} />
        ))}
      </div>
    );
  }

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <Loader />;
  } else {
    content = (
      <div>
        <h1>Edit product availability</h1>

        <p>{product.title}</p>
        <p>{product.description}</p>

        {versionsList}
      </div>
    );
  }

  return <div class="page--center">{content}</div>;
}

export default Edit;
