import { useState } from "react";
import { useHistory } from "react-router-dom";

import Loader from "../Loader";
import PropertyInput from "./PropertyInput";

import { createOrder } from "../../adapters/api";

function NewForm({ product }) {
  const [selectedProperties, setSelectedProperties] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    setIsSubmiting(true);

    event.preventDefault();
    const requestConfig = createOrder({
      productId: product.id,
      propertiesValues: product.properties.map((property) => ({
        propertyId: property.id,
        value: selectedProperties[property.id],
      })),
      quantity: quantity,
    });

    fetch(requestConfig.url, requestConfig.options)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          history.push(`/orders/${result.id}`);
          // setIsLoaded(true);
          // setResponse(result);
        },
        (error) => {
          console.log(error);
          setIsSubmiting(false);
          // setIsLoaded(true);
          // setError(error);
        }
      );
  };

  const handleChangeProp = (e, id) => {
    const newSelectedProperties = {
      ...selectedProperties,
      [id]: e.target.value,
    };
    setSelectedProperties(newSelectedProperties);
  };

  const increaseQuantity = (e) => {
    setQuantity(quantity + 1);
    e.preventDefault();
  };

  const decreaseQuantity = (e) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    e.preventDefault();
  };

  const submitAction = () => {
    if (isSubmiting) {
      return <Loader />;
    } else {
      return (
        <input
          type="submit"
          className="btn btn--main submit-order"
          value="Order now"
        />
      );
    }
  };

  if (!product.properties) {
    return <div />;
  }

  return (
    <form onSubmit={handleSubmit}>
      {product.properties.map((property, i) => (
        <PropertyInput
          key={property.id}
          properties={product.properties}
          disabledVersions={product.disabled_versions}
          selectedProperties={selectedProperties}
          property={property}
          handleChange={(e) => handleChangeProp(e, property.id)}
        />
      ))}

      <div className="order-actions">
        <div className="order-actions__quantity">
          <button className="btn btn--quantity" onClick={decreaseQuantity}>
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button className="btn btn--quantity" onClick={increaseQuantity}>
            +
          </button>
        </div>

        {submitAction()}
      </div>
    </form>
  );
}

export default NewForm;
