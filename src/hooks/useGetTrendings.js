import { useEffect, useState } from "react";
import getTrendings from "../services/getTrendings";

export function useGetTrendings() {
  const [loading, setLoading] = useState(false);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    setLoading(true);
    getTrendings().then(setTrends);
    setLoading(false)
  }, []);

  return { trends, loading };
}
