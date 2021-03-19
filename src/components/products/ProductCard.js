import { useHistory } from "react-router-dom";

function Product({ product }) {
  const history = useHistory();

  const handleProductClick = ({ id }) => {
    let path = `/products/${id}`;
    history.push(path);
  };

  return (
    <div
      key={product.id}
      className="product-card"
      onClick={() => handleProductClick(product)}
    >
      <img
        className="product-card__img"
        src={process.env.PUBLIC_URL + "/bike-card.jpg"}
        alt="bike"
      />
      <p className="product-card__title">{product.title}</p>
    </div>
  );
}

export default Product;
