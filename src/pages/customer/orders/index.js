import React from "react";
import { Link } from "react-router-dom";

import useFetch from "./../../../hooks/useFetch";
import { fetchOrders } from "./../../../adapters/api";

import Loader from "./../../../components/Loader";

function OrdersIndex() {
  const { isLoaded, response: orders, error } = useFetch(fetchOrders());

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <Loader />;
  } else {
    content = (
      <div>
        <h1>Orders</h1>

        <div class="admin-list">
          {orders.map((order) => (
            <div class="admin-list__item">
              <div class="admin-list__content">
                <p><span>#</span>{order.id.substring(0, 8)}</p>
              </div>

              <div class="admin-list__actions admin-list__content">
                <Link className="btn" to={`/orders/${order.id}`}>
                  Show
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div class="page--center">{content}</div>;
}

export default OrdersIndex;
