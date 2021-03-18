import { useState, useEffect } from "react";

function useFetch({ init, url, options }) {
  const [error, setError] = useState(init || null);
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

  useEffect(() => execute(options), [url]);

  return { error, isLoaded, response, execute };
}

export default useFetch;
