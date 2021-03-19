const baseUrl = `${process.env.REACT_APP_API_URL}/api/v1`;
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

const fetchOrders = () => {
  const url = `${baseUrl}/orders`;

  return { url, options: defaultOptions };
};

const fetchOrder = (orderId) => {
  const url = `${baseUrl}/orders/${orderId}`;

  return { url, options: defaultOptions };
};

const createOrder = (props) => {
  const url = `${baseUrl}/orders`;

  const options = {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify({
      order_items: [
        {
          product_id: props.productId,
          properties_values: props.propertiesValues.map(
            ({ propertyId, value }) => ({ value, property_id: propertyId })
          ),
          quantity: props.quantity,
        },
      ],
    }),
  };

  return { url, options };
};

export { fetchProducts, fetchProduct, fetchOrders, fetchOrder, createOrder };
