export default function PropertiesFields(props) {
  console.log("rendering props fields");

  if (!props.properties) {
    return <div></div>;
  }
  return props.properties.map((property, propertyIndex) => (
    <PropertyField
      property={property}
      handlePropertyChange={(e) => props.handlePropertyChange(e, propertyIndex)}
      handlePropertyValueChange={(e, valueIndex) =>
        props.handlePropertyValueChange(e, propertyIndex, valueIndex)
      }
      addPropertyValue={(e) => props.addPropertyValue(e, propertyIndex)}
      removePropertyValue={(e, valueIndex) =>
        props.removePropertyValue(e, propertyIndex, valueIndex)
      }
      removeProperty={(e) => props.removeProperty(e, propertyIndex)}
    />
  ));
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
      </div>
        <button class="btn" onClick={props.addPropertyValue}>
          Add value
        </button>
      </div>
    </div>
  );
}
