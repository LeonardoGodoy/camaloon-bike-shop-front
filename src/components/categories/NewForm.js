import { useState } from "react";
import { useHistory } from "react-router-dom";

import { createCategory } from "./../../adapters/adminApi";

import PropertiesFields from "./../PropertiesFields";

export default function NewForm(props) {
  const history = useHistory();

  const handleSubmit = (e) => {
    // setIsSubmiting(true);

    const requestConfig = createCategory({
      name,
      properties,
    });

    fetch(requestConfig.url, requestConfig.options)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          history.push(`/categories`);
          // setIsLoaded(true);
          // setResponse(result);
        },
        (error) => {
          console.log(error);
          // setIsSubmiting(false);
          // setIsLoaded(true);
          // setError(error);
        }
      );
    e.preventDefault();
  };

  const [properties, setProperties] = useState([]);
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="field">
          <label>Name</label>
          <input
            class="input"
            onChange={handleNameChange}
            type="text"
            value={name}
          />
        </div>

        <div class="field">
          <label>Properties</label>
          <PropertiesFields
            properties={properties}
            setProperties={setProperties}
          />
        </div>

        <input
          type="submit"
          class="btn btn--main submit-order"
          value="Create category"
        />
      </form>
    </div>
  );
}
