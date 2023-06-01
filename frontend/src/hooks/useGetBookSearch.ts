import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "../api/get";

export function useGetBookSearch(keyword: string | null) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["searchData", keyword],
    enabled: !!keyword,
    queryFn: () => {
      return getSearchResults(keyword);
    },
  });

  return {
    searchData: data,
    isLoading,
    isError: error,
  };
}
