import { useParams } from "react-router-dom";

function Show() {
  let { productId } = useParams();

  return (
    <div>
      <h3>Product {productId}</h3>
    </div>
  );
}

export default Show
