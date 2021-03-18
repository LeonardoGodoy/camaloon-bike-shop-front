export default function PropertiesFields({ properties, setProperties }) {
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

      <button class="btn" onClick={addProperty}>
        Add property
      </button>
    </div>
  );
}

function PropertyField(props) {
  return (
    <div class="property-card">
      <div>
        <input
          class="input property-card__property-title"
          type="text"
          value={props.property.title}
          onChange={props.handlePropertyChange}
          placeholder="Product title"
        />
        <button class="btn btn--main" onClick={props.removeProperty}>
          Remove
        </button>
      </div>

      <div class="field">
        <label>Values</label>
        <div class="property-card__values">
          {props.property.values.map((value, valueIndex) => (
            <div class="property-card__value">
              <input
                class="input property-card__value__input"
                type="text"
                value={value}
                onChange={(e) => props.handlePropertyValueChange(e, valueIndex)}
                placeholder={`option ${valueIndex + 1}`}
              />

              <button
                class="btn btn--main"
                onClick={(e) => props.removePropertyValue(e, valueIndex)}
              >
                x
              </button>
            </div>
          ))}
        </div>

        <div>
          <button class="btn" onClick={props.addPropertyValue}>
            Add value
          </button>
        </div>
      </div>
    </div>
  );
}
