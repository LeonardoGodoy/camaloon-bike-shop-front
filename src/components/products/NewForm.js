// fetch categories
// select categories
// render fields
// add / remove fields
// add / remove values
// render edit product

import { useState } from "react";
import { useHistory } from "react-router-dom";

import { createProduct } from "./../../adapters/adminApi";

import PropertiesFields from "./../PropertiesFields";

function SelectCategory(props) {
  console.log("rendering category");

  return (
    <div class="field">
      <label>Category</label>
      <select value={props.value} onChange={props.handleChange}>
        <option value="select">Select</option>

        {props.categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function NewForm({ categories }) {
  const history = useHistory();

  const handleSubmit = (e) => {
    // setIsSubmiting(true);

    const requestConfig = createProduct({
      title,
      description,
      properties,
      category_id: categoryId,
    });

    fetch(requestConfig.url, requestConfig.options)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          history.push(`/products/${result.id}/edit`);
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

  const [categoryId, setCategoryId] = useState("select");
  const [properties, setProperties] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setCategoryId(categoryId);

    const category = categories.find((category) => category.id === categoryId);
    if (category) {
      const properties = category.properties;
      setProperties(properties);
    }
  };

  const handlePropertyChange = (e, propertyIndex) => {
    const propertyTitle = e.target.value;

    const newProperies = properties.slice();
    newProperies[propertyIndex].title = propertyTitle;
    setProperties(newProperies);
  };

  const handlePropertyValueChange = (e, propertyIndex, valueIndex) => {
    const value = e.target.value;

    const newProperies = properties.slice();
    const values = newProperies[propertyIndex].values;
    values[valueIndex] = value;
    setProperties(newProperies);
  };

  const addProperty = (e) => {
    const newProperty = { title: "", values: [""] };

    const newProperies = properties.slice();
    newProperies.push(newProperty);
    setProperties(newProperies);
    e.preventDefault();
  };

  const addPropertyValue = (e, propertyIndex) => {
    const newProperies = properties.slice();

    const values = newProperies[propertyIndex].values;
    values.push("");
    setProperties(newProperies);
    e.preventDefault();
  };

  const removeProperty = (e, propertyIndex) => {
    const newProperies = properties.slice();

    newProperies.splice(propertyIndex, 1);
    setProperties(newProperies);
    e.preventDefault();
  };

  const removePropertyValue = (e, propertyIndex, valueIndex) => {
    const newProperies = properties.slice();

    const values = newProperies[propertyIndex].values;
    values.splice(valueIndex, 1);
    setProperties(newProperies);
    e.preventDefault();
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  console.log("rendering form");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SelectCategory
          categories={categories}
          value={categoryId}
          handleChange={handleCategoryChange}
        />

        <div class="field">
          <label>Title</label>
          <input
            class="input"
            onChange={handleTitleChange}
            type="text"
            value={title}
          />
        </div>

        <div class="field">
          <label>Description</label>
          <textarea
            class="input"
            onChange={handleDescriptionChange}
            type="text"
            value={description}
            placeholder="A great product..."
          />
        </div>

        <div class="field">
          <label>Properties</label>
          <PropertiesFields
            properties={properties}
            handlePropertyChange={handlePropertyChange}
            handlePropertyValueChange={handlePropertyValueChange}
            removeProperty={removeProperty}
            addPropertyValue={addPropertyValue}
            removePropertyValue={removePropertyValue}
          />
        </div>

        <button class="btn" onClick={addProperty}>
          Add property
        </button>

        <input
          type="submit"
          class="btn btn--main submit-order"
          value="Create product"
        />
      </form>
    </div>
  );
}
