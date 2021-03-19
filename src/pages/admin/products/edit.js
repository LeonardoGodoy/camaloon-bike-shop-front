import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useFetch from "./../../../hooks/useFetch";

import {
  fetchProduct,
  fetchProductVersions,
} from "./../../../adapters/adminApi";

import Loader from "./../../../components/Loader";
import VersionContent from "./../../../components/product_versions/VersionContent";

// const requestHandler = (method) => {
//   fetch(url, options)
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setResponse(result);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
// }

function Edit() {
  const { productId } = useParams();
  const { isLoaded, response: product, error } = useFetch(
    fetchProduct(productId)
  );

  // const [versions, setVersions] = useState([]);
  // const { isLoaded: isVersionLoaded, executeRequest } = useRequestHandler();

  // const [errorx, setErrorx] = useState(null);
  // const [isVersionLoaded, setIsVersionLoaded] = useState(false);

  // const executeRequest = async ({ url, options }) => {
  //   console.log("useRequestHandler -> executing...", url);

  //   setIsVersionLoaded(false);
  //   try {
  //     const response = await fetch(url, options);

  //     return response.json();
  //   } catch (err) {
  //     setErrorx(err);
  //   } finally {
  //     setIsLoaded(true);
  //   }
  // };

  // const load = useCallback(async () => {
  //   const response = await executeRequest(fetchProductVersions(productId));

  //   setVersions(response);
  // }, [])

  // useEffect(() => {
  //   load().then();
  // }, [load]);

  const { isLoaded: isVersionLoaded, response: versions } = useFetch(
    fetchProductVersions(productId)
  );

  let versionsList;
  if (!isVersionLoaded) {
    versionsList = <Loader />;
  } else if (versions) {
    versionsList = (
      <div className="admin-list">
        {versions.map((version) => (
          <VersionContent
            key={version.id}
            product={product}
            version={version}
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
