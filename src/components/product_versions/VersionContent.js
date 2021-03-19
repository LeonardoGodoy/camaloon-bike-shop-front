import {
  enableProductVersion,
  disableProductVersion,
} from "./../../adapters/adminApi";

function VersionContent({ product, version }) {
  const enable = () => {
    const requestConfig = enableProductVersion(product.id, version.id);

    fetch(requestConfig.url, requestConfig.options)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          // update version state
          // reload versions
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const disable = () => {
    const requestConfig = disableProductVersion(product.id, version.id);

    fetch(requestConfig.url, requestConfig.options)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          // update version state
          // reload versions
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="admin-list__item">
      {version.property_combination.map((propertyValue, i) => (
        <div key={`${i}-${propertyValue}`} className="admin-list__content">
          <strong>{propertyValue.property_title}</strong>
          <p>{propertyValue.value}</p>
        </div>
      ))}

      <div className="admin-list__actions admin-list__content">
        {version.enabled ? (
          <button className="btn btn--main" onClick={disable}>
            Disable
          </button>
        ) : (
          <button className="btn" onClick={enable}>
            Enable
          </button>
        )}
      </div>
    </div>
  );
}

export default VersionContent;
