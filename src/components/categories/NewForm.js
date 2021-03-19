import { useState } from "react";
import { useHistory } from "react-router-dom";

import Loader from "../Loader";
import { createCategory } from "./../../adapters/adminApi";
import PropertiesFields from "./../PropertiesFields";

function NewForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [properties, setProperties] = useState([{ title: "", values: [""] }]);
  const [name, setName] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
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
        (error) => {setIsSubmitting(false)}
      );
    e.preventDefault();
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const submitAction = () => {
    if (isSubmitting) {
      return <Loader />;
    }

    return (
      <input
        type="submit"
        className="btn btn--main submit-order"
        value="Create category"
      />
    );
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

        {submitAction()}
      </form>
    </div>
  );
}

export default NewForm;
