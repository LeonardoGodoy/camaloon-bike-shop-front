import { useParams } from "react-router-dom";

import useFetch from "./../../../hooks/useFetch";
import { fetchOrder } from "./../../../adapters/api";

import Loader from "./../../../components/Loader";

function Show() {
  let { orderId } = useParams();
  const { isLoaded, response: order, error } = useFetch(fetchOrder(orderId));

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <Loader />;
  } else {
    content = (
      <div>
        {(order.order_items || []).map((item) => (
          <div key={item.id}>
            {item.quantity}
            {item.product.title}
          </div>
        ))}
      </div>
    );
  }

  return <div class="page--center">{content}</div>;
}

export default Show;
