import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useFetch from "./../../../hooks/useFetch";

import {
  fetchProduct,
  fetchProductVersions,
} from "./../../../adapters/adminApi";

import Loader from "./../../../components/Loader";
import VersionContent from "./../../../components/product_versions/VersionContent";

function Edit() {
  const { productId } = useParams();
  const { isLoaded, response: product, error } = useFetch(
    fetchProduct(productId)
  );

  const [versionError, setVersionError] = useState(null);
  const [isVersionLoaded, setVersionLoaded] = useState(false);
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    executeRequest();
  }, []);

  const executeRequest = async () => {
    const config = fetchProductVersions(productId);

    try {
      await fetch(config.url, config.options)
        .then((response) => response.json())
        .then((response) => setVersions(response));
    } catch (err) {
      setVersionError(err);
    } finally {
      setVersionLoaded(true);
    }
  };

  const replaceVersion = (version, versionIndex) => {
    console.log(version);
    console.log(versionIndex);
    const newVersions = versions.slice();
    newVersions[versionIndex] = version;
    setVersions(newVersions);
  };

  let versionsList;
  if (!isVersionLoaded) {
    versionsList = <Loader />;
  } else if (versions) {
    versionsList = (
      <div className="admin-list">
        {versions.map((version, i) => (
          <VersionContent
            key={version.id}
            product={product}
            version={version}
            replaceVersion={(e) => replaceVersion(e, i)}
          />
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

  return <div className="page--center">{content}</div>;
}

export default Edit;
