const BASE_URL = "http://localhost:3030/api/v1/admin";

const fetchProducts = () => {
  const url = `${BASE_URL}/products`;
  const options = {};

  return { url, options };
};

const fetchProduct = (productid) => {
  const url = `${BASE_URL}/products/${productid}`;
  const options = {};

  return { url, options };
};

const fetchCategories = () => {
  const url = `${BASE_URL}/categories`;
  const options = {};

  return { url, options };
};

const createProduct = (props) => {
  const url = `${BASE_URL}/products`;

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      category_id: props.categoryId,
      title: props.title,
      description: props.description,
      properties: props.properties, // title, values
    }),
  };

  return { url, options };
};

const createCategory = (props) => {
  const url = `${BASE_URL}/categories`;

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: props.name,
      properties: props.properties, // title, values
    }),
  };

  return { url, options };
};

export {
  fetchProducts,
  fetchProduct,
  fetchCategories,
  createProduct,
  createCategory,
};
