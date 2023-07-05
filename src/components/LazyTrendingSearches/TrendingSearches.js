import CategoryList from "components/CategoryList";
import { useGetTrendings } from "hooks/useGetTrendings";

export default function TrendingSearches() {
  const { trends } = useGetTrendings();
  
  return <CategoryList title="Tendencias" options={trends} />
}
