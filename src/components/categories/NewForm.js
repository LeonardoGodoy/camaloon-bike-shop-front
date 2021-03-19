import { useState } from "react";
import { useHistory } from "react-router-dom";

import { createCategory } from "./../../adapters/adminApi";

import PropertiesFields from "./../PropertiesFields";

export default function NewForm() {
  const [properties, setProperties] = useState([{ title: "", values: [""] }]);
  const [name, setName] = useState("");

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
          history.push(`/admin/categories`);
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

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            className="input"
            onChange={handleNameChange}
            type="text"
            value={name}
          />
        </div>

        <PropertiesFields
          properties={properties}
          setProperties={setProperties}
        />

        <input
          type="submit"
          className="btn btn--main submit-order"
          value="Create category"
        />
      </form>
    </div>
  );
}
