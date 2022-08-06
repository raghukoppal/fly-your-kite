import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, [url]);
  return [data, isLoading];
};

export default useFetch;
