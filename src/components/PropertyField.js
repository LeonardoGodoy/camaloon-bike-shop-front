function PropertyField(props) {
  return (
    <div className="field">
      <label>Property {props.propertyIndex + 1}</label>

      <div className="property-card">
        <div>
          <input
            className="input property-card__property-title"
            type="text"
            value={props.property.title}
            onChange={props.handlePropertyChange}
            placeholder="Product title"
          />
          <button className="btn btn--main" onClick={props.removeProperty}>
            Remove
          </button>
        </div>

        <div className="field values-feild">
          <label>Values</label>
          <div className="property-card__values">
            {props.property.values.map((value, valueIndex) => (
              <div key={valueIndex} className="property-card__value">
                <input
                  className="input property-card__value__input"
                  type="text"
                  value={value}
                  onChange={(e) =>
                    props.handlePropertyValueChange(e, valueIndex)
                  }
                  placeholder={`option ${valueIndex + 1}`}
                />

                <button
                  className="btn btn--main"
                  onClick={(e) => props.removePropertyValue(e, valueIndex)}
                >
                  x
                </button>
              </div>
            ))}
          </div>

          <div>
            <button className="btn" onClick={props.addPropertyValue}>
              Add value
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyField
