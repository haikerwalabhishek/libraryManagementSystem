import "./home.css";
import BookCard from "../components/BookCard.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Books = () => {
  // Select all books and the search term
  const books = useSelector((state) => state.books.books);
  const searchTerm = useSelector((state) => state.books.searchTerm);

  const getFilteredBooks = (genre) => {
    return books
      .filter((book) =>
        genre ? book.genre === genre : true
      )
      .filter((book) =>
        searchTerm
          ? book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
          : true
      );
  };

  return (
    <>
      {["fiction", "non_fiction", "romance", "suspense", "detactive"].map((genre) => {
        const filteredBooks = getFilteredBooks(genre);
        return filteredBooks.length > 0 && (
          <div className={`popularBooksHome ${genre}`} key={genre}>
            <h1 className="booksPopular">{genre.charAt(0).toUpperCase() + genre.slice(1).replace('_', ' ')}</h1>
            {filteredBooks.map((book, index) => (
              <Link to={`/bookdetails/${book.id}`} key={index}>
                <BookCard
                  title={book.title}
                  author={book.author}
                  year={book.year}
                  url={book.url}
                />
              </Link>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Books;
