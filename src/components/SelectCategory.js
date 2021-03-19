function SelectCategory(props) {
  return (
    <div className="field">
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

export default SelectCategory
