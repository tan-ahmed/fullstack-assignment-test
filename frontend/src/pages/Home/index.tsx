import Navbar from "../../components/Navbar/Navbar";
import { useGlobalContext } from "../../contexts/GlobalContext";
import useDebounce from "../../hooks/useDebounce";
import { useGetAllBooks } from "../../hooks/useGetAllBooks";
import BookCard from "../../components/BookCard/BookCard";
import { useGetBookSearch } from "../../hooks/useGetBookSearch";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  const { search } = useGlobalContext();
  const debouncedValue = useDebounce<string>(search, 1250);
  const { searchData } = useGetBookSearch(debouncedValue);
  const { booksData, isLoading } = useGetAllBooks();

  return (
    <Layout>
      {isLoading && <div className="text-center">Loading...</div>}
      <div className="container home-grid">
        {booksData &&
          booksData.books.map((book) => {
            return <BookCard book={book} />;
          })}
      </div>
    </Layout>
  );
};

export default Home;
