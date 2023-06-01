import { Link } from "react-router-dom";
import { Book } from "../../types/books";

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  return (
    <div>
      <Link to={`/book/${book.id}`}>
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          className="mb-3"
        />
        <p className="text-gray-900 text-sm">{book.title}</p>
        <p className="text-gray-500 text-xs md:text-sm">{book.author}</p>
      </Link>
    </div>
  );
};

export default BookCard;
