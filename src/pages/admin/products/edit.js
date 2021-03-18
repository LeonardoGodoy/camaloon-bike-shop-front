import { useParams } from "react-router-dom";

function Edit() {
  let { productId } = useParams();

  return (
    <div>
      <h3>Edit product {productId}</h3>
    </div>
  );
}

export default Edit
