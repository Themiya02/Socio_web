import { useCallback, useEffect, useState } from "react";

export function useFetchData(fetchFn) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const result = await fetchFn();
      setData(Array.isArray(result) ? result : []);
    } catch (err) {
      setError(err?.message || "Something went wrong while loading data.");
    } finally {
      setIsLoading(false);
    }
  }, [fetchFn]);

  useEffect(() => {
    let isMounted = true;

    const runFetch = async () => {
      setIsLoading(true);
      setError("");

      try {
        const result = await fetchFn();
        if (isMounted) {
          setData(Array.isArray(result) ? result : []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err?.message || "Something went wrong while loading data.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    runFetch();

    return () => {
      isMounted = false;
    };
  }, [fetchFn]);

  return { data, isLoading, error, refetch: loadData };
}