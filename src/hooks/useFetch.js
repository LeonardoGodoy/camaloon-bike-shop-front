import { useState, useEffect } from 'react';

function useFetch({ url }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResponse(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [url])

  return { error, isLoaded, response }
}

export default useFetch
