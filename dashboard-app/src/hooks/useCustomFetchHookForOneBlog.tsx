import { useEffect, useState } from "react";
import { BlogObject } from "../types/blog";

const useFetch = (url: string) => {
  const [data, setData] = useState<BlogObject>();
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        // Simulate the delay with setTimeout using a Promise
        await new Promise((resolve) => setTimeout(resolve, 350));

        // Perform the fetch operation
        const response = await fetch(url, { signal: abortController.signal });

        // Check if the response is okay (status code in the range 200-299)
        if (!response.ok) {
          throw new Error("API fetch call failed");
        }

        // Parse the response data as JSON
        const json = await response.json();

        // Update state with the fetched data
        setData(json);
        setIsPending(false);
        setError(null);
      } catch (error: any) {
        // Handle any errors that occur during the fetch
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setIsPending(false);
          setError(error.message);
        }
      }

      return () => {
        abortController.abort();
      };
    })();
  }, []);

  return { data, isPending, error };
};

export default useFetch;
