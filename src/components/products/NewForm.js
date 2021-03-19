import { useState } from "react";
import { useHistory } from "react-router-dom";

import { createProduct } from "./../../adapters/adminApi";

import Loader from "../Loader";
import PropertiesFields from "./../PropertiesFields";
import SelectCategory from "./../SelectCategory";

function NewForm({ categories }) {
  const [categoryId, setCategoryId] = useState("select");
  const [properties, setProperties] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    setIsSubmitting(true);

    const requestConfig = createProduct({
      title,
      description,
      properties,
      categoryId,
    });

    fetch(requestConfig.url, requestConfig.options)
      .then((res) => res.json())
      .then(
        (result) => {
          history.push(`/admin/products/${result.id}/edit`);
        },
        (error) => {
          setIsSubmitting(false);
        }
      );
    e.preventDefault();
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setCategoryId(categoryId);

    const category = categories.find((category) => category.id === categoryId);
    if (category) {
      const properties = category.properties;
      setProperties(properties);
    }
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  const submitAction = () => {
    if (isSubmitting) {
      return <Loader />;
    }

    return (
      <input
        type="submit"
        className="btn btn--main submit-order"
        value="Create product"
      />
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SelectCategory
          categories={categories}
          value={categoryId}
          handleChange={handleCategoryChange}
        />

        <div className="field">
          <label>Title</label>
          <input
            className="input"
            onChange={handleTitleChange}
            type="text"
            value={title}
          />
        </div>

        <div className="field">
          <label>Description</label>
          <input
            className="input"
            onChange={handleDescriptionChange}
            type="text"
            value={description}
            placeholder="A great product..."
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
