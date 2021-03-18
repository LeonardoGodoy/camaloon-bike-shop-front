import { useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../Loader";

import { createOrder } from "../../adapters/api";

function PropertyInput({
  properties,
  property,
  selectedProperties,
  disabledVersions,
  handleChange,
}) {
  const value = selectedProperties[property.id];

  const findBlankProperty = (combination_target) => {
    return properties.find((property) => !combination_target[property.id]);
  };

  const isCombinationAvailable = (combination_target) => {
    return !disabledVersions.some(({ property_combination }) =>
      property_combination.every(
        (propertyValue) =>
          combination_target[propertyValue.property_id] === propertyValue.value
      )
    );
  };

  const hasPossibleOptions = (combination_target) => {
    const nextProperty = findBlankProperty(combination_target);

    if (nextProperty) {
      return nextProperty.values.some((value) =>
        isValuePossible(nextProperty, value, combination_target)
      );
    } else {
      return isCombinationAvailable(combination_target);
    }
  };

  const isValuePossible = (property, value, prev_combination) => {
    if (selectedProperties[property.id] === value) {
      return true;
    }

    const combination_target = {
      ...prev_combination,
      [property.id]: value,
    };

    return hasPossibleOptions(combination_target);
  };

  const possible_values = property.values.filter((value) =>
    isValuePossible(property, value, selectedProperties)
  );

  return (
    <div class="field">
      <label>{property.title}</label>

      <select value={value} onChange={handleChange}>
        <option value="select">Select</option>
        {possible_values.map((value, i) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
}

function Form({ product }) {
  const [selectedProperties, setSelectedProperties] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    setIsSubmiting(true);

    event.preventDefault();
    const requestConfig = createOrder({
      product_id: product.id,
      properties_values: product.properties.map((property) => ({
        property_id: property.id,
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

  if (!product.properties) {
    return <div />;
  }

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
          class="btn btn--main submit-order"
          value="Order now"
        />
      );
    }
  };
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

      <div class="order-actions">
        <div class="order-actions__quantity">
          <button class="btn btn--quantity" onClick={decreaseQuantity}>
            -
          </button>
          <span class="quantity-display">{quantity}</span>
          <button class="btn btn--quantity" onClick={increaseQuantity}>
            +
          </button>
        </div>

        {submitAction()}
      </div>
    </form>
  );
}

export default Form;
