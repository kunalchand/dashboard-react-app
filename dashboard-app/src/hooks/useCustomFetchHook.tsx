import { useEffect, useState } from "react";
import { BlogObject } from "../types/blog";

const useFetch = (url: string) => {
  const [data, setData] = useState<BlogObject[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("API fecth call failed");
          }
          return response.json();
        })
        .then((json) => {
          setData(json);
          setIsPending(false);
          setError(null);
        })
        .catch((error) => {
          setIsPending(false);
          setError(error.message);
        });
    }, 1000);
  }, []);

  return { data, isPending, error };
};

export default useFetch;
