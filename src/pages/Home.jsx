import "./home.css";
import Book from "../../public/images/books1.png";
import BookCard from "../components/BookCard.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const books = useSelector((state) => state.books.books);
  const searchTerm = useSelector((state) => state.books.searchTerm);

  const filteredBooks = books
    .filter((book) => book.rating >= 4.8)
    .filter((book) =>
      searchTerm
        ? book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    );

  return (
    <>
      <div className="homeContainer">
        <div className="headContentHome">
          <p className="tagline1Home">A World of Books Awaits!</p>
          <p className="tagline2Home">Discover Your Next Great Read</p>
          <p className="tagline3Home">
            Discover a world of stories that captivate and inspire. From
            timeless classics to modern gems, find the perfect book for every
            mood.
          </p>
        </div>
        <div className="pngImgHome">
          <img src={Book} alt="A stack of books" />
        </div>
      </div>
      <div className="popularBooksHome popular">
        <h1 className="booksPopular">Popular Books</h1>
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
    </>
  );
};

export default Home;
