import { Get } from "../utils/axios";
import { APIResponse, Book } from "../types/books";

export const getSearchResults = (
  keyword: string | null
): Promise<APIResponse> => {
  return Get(`/books/search/?keyword=${keyword}`);
};

export const getAllBooks = (): Promise<APIResponse> => {
  return Get(`/books/suggestions`);
};

export const getBookDetails = (bookId: string): Promise<Book> => {
  return Get(`/books/${bookId}}`);
};
