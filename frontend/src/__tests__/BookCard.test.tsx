import { render, screen } from "@testing-library/react";
import mockData from "./mockData.json";
import BookCard from "../components/BookCard/BookCard";
import { BrowserRouter } from "react-router-dom";

describe("Validate HTML elements on book card", () => {
  test("render book card", async () => {
    render(<BookCard book={mockData.books[0]} />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Learning Beagle/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(/Alexander/i)).toBeInTheDocument();
  });
});
