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
      <div class="product-form">
        <div class="product-form__card">
          <img
            class="product-form__img"
            src={process.env.PUBLIC_URL + "/bike.jpeg"}
            alt="bike"
          />

          <div class="product-form__content">
            <h1 class="product-form__title">{response.title}</h1>
            <p class="product-form__description">{response.description}</p>

            <OrderForm product={response} />
          </div>
        </div>
      </div>
    );
  }

  return <div class="page--center">{content}</div>;
}

export default Show;
