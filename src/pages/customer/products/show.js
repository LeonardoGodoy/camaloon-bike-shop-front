import { useParams } from "react-router-dom";

import useFetch from "./../../../hooks/useFetch";
import { fetchProduct } from "./../../../adapters/api";

import Loader from "./../../../components/Loader";
import OrderForm from "./../../../components/orders/Form";

function Show() {
  let { productId } = useParams();
  const { isLoaded, response, error } = useFetch(fetchProduct(productId));

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <Loader />;
  } else {
    content = (
      <div className="product-form">
        <div className="product-form__card">
          <img
            className="product-form__img"
            src={process.env.PUBLIC_URL + "/bike.jpeg"}
            alt="bike"
          />

          <div className="product-form__content">
            <h1 className="product-form__title">{response.title}</h1>
            <p className="product-form__description">{response.description}</p>

            <OrderForm product={response} />
          </div>
        </div>
      </div>
    );
  }

  return <div className="page--center">{content}</div>;
}

export default Show;
