import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../api/get";

export function useGetAllBooks() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["booksData"],
    queryFn: () => {
      return getAllBooks();
    },
  });

  return {
    booksData: data,
    isLoading,
    isError: error,
  };
}
