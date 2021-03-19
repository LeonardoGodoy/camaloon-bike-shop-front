const baseUrl = `${process.env.REACT_APP_API_URL}/api/v1/admin`;
const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const defaultOptions = {};

const fetchProducts = () => {
  const url = `${baseUrl}/products`;

  return { url, options: defaultOptions };
};

const fetchProduct = (productid) => {
  const url = `${baseUrl}/products/${productid}`;

  return { url, options: defaultOptions };
};

const fetchProductVersions = (productid) => {
  const url = `${baseUrl}/products/${productid}/product_versions`;

  return { url, options: defaultOptions };
};

const fetchCategories = () => {
  const url = `${baseUrl}/categories`;

  return { url, options: defaultOptions };
};

const createProduct = (props) => {
  const url = `${baseUrl}/products`;

  const options = {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify({
      category_id: props.categoryId,
      title: props.title,
      description: props.description,
      properties: props.properties,
    }),
  };

  return { url, options };
};

const createCategory = (props) => {
  const url = `${baseUrl}/categories`;

  const options = {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify({
      name: props.name,
      properties: props.properties,
    }),
  };

  return { url, options };
};

const enableProductVersion = (productid, versionId) => {
  const url = `${baseUrl}/products/${productid}/product_versions/${versionId}/enable`;
  const options = {
    method: "POST",
    headers: defaultHeaders,
  };

  return { url, options };
};

const disableProductVersion = (productid, versionId) => {
  const url = `${baseUrl}/products/${productid}/product_versions/${versionId}/disable`;
  const options = {
    method: "POST",
    headers: defaultHeaders,
  };

  return { url, options };
};

export {
  fetchProducts,
  fetchProduct,
  fetchProductVersions,
  fetchCategories,
  createProduct,
  createCategory,
  enableProductVersion,
  disableProductVersion,
};
