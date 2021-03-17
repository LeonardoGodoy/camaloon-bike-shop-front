const BASE_URL = "http://localhost:3030/api/v1";

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

const createOrder = (props) => {
  const url = `${BASE_URL}/orders`;

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      order_items: [
        {
          product_id: props.product_id,
          properties_values: props.properties_values,
          quantity: props.quantity,
        },
      ],
    }),
  };

  return { url, options };
};

export { fetchProducts, fetchProduct, createOrder };
