import { useQuery } from "@tanstack/react-query";
import { getBookDetails } from "../api/get";

export function useGetBook(bookId: string) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["singleBookData", bookId],
    enabled: !!bookId,
    queryFn: () => getBookDetails(bookId),
  });

  return {
    singleBookData: data,
    isLoading,
    isError: error,
  };
}
