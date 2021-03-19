import PropertyField from "./PropertyField";

function PropertiesFields({ properties, setProperties }) {
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

  if (!properties) {
    return <div></div>;
  }

  return (
    <div>
      {properties.map((property, propertyIndex) => (
        <PropertyField
          key={property.id || propertyIndex}
          propertyIndex={propertyIndex}
          property={property}
          handlePropertyChange={(e) => handlePropertyChange(e, propertyIndex)}
          handlePropertyValueChange={(e, valueIndex) =>
            handlePropertyValueChange(e, propertyIndex, valueIndex)
          }
          addPropertyValue={(e) => addPropertyValue(e, propertyIndex)}
          removePropertyValue={(e, valueIndex) =>
            removePropertyValue(e, propertyIndex, valueIndex)
          }
          removeProperty={(e) => removeProperty(e, propertyIndex)}
        />
      ))}

      <button className="btn" onClick={addProperty}>
        Add property
      </button>
    </div>
  );
}

export default PropertiesFields;
