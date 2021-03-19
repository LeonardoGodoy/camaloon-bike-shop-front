function PropertyInput({
  properties,
  property,
  selectedProperties,
  disabledVersions,
  handleChange,
}) {
  const value = selectedProperties[property.id];

  const findBlankProperty = (combinationTarget) => {
    return properties.find((property) => !combinationTarget[property.id]);
  };

  const isCombinationAvailable = (combinationTarget) => {
    return !disabledVersions.some(
      ({ property_combination: propertyCombination }) =>
        propertyCombination.every(
          (propertyValue) =>
            combinationTarget[propertyValue.property_id] === propertyValue.value
        )
    );
  };

  const hasPossibleOptions = (combinationTarget) => {
    const nextProperty = findBlankProperty(combinationTarget);

    if (nextProperty) {
      return nextProperty.values.some((value) =>
        isValuePossible(nextProperty, value, combinationTarget)
      );
    } else {
      return isCombinationAvailable(combinationTarget);
    }
  };

  const isValuePossible = (property, value, prevCombination) => {
    if (selectedProperties[property.id] === value) {
      return true;
    }

    const combinationTarget = {
      ...prevCombination,
      [property.id]: value,
    };

    return hasPossibleOptions(combinationTarget);
  };

  const possibleValues = property.values.filter((value) =>
    isValuePossible(property, value, selectedProperties)
  );

  return (
    <div className="field">
      <label>{property.title}</label>

      <select value={value} onChange={handleChange}>
        <option value="">Select</option>
        {possibleValues.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PropertyInput
