import { useState, useEffect } from "react";

function useFetch({ url, options }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [response, setResponse] = useState([]);

  const execute = (options) => {
    console.log("executing...", url);

    fetch(url, options)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResponse(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => execute(options), []);

  return { error, isLoaded, response, execute };
}

export default useFetch;
