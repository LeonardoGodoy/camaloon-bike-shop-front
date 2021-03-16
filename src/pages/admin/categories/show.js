import { useParams } from "react-router-dom";

function Show() {
  let { categoryId } = useParams();

  return (
    <div>
      <h3>Category {categoryId}</h3>
    </div>
  );
}

export default Show
