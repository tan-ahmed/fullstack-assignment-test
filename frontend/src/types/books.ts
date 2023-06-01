export interface APIResponse {
  count: number;
  books: Book[];
}

export interface Book {
  id: number;
  title: string;
  cover: string;
  author: string;
}
