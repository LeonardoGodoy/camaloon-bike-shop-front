const BASE_URL = "http://localhost:3030/api/v1"

const fetchProducts = () => {
  const url = `${BASE_URL}/products`
  const options = {}

  return { url, options }
}

export { fetchProducts }
