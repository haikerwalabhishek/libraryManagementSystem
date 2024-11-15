import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./bookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === parseInt(id))
  );

  if (!book) {
    return <div className="book-not-found">Book not found</div>;
  }

  return (
    <div className="book-details-container">
                <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <div className="containerdetails">
        <div className="book-details-header">
          <h2 className="book-details-title">Book Details</h2>
        </div>
        <div className="book-details-content">
          <div className="book-image-container">
            <img src={book.url} alt={book.title} className="book-image" />
          </div>

          <div className="book-info">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author"><strong>Author:</strong> {book.author}</p>
            <p className="book-genre"><strong>Genre:</strong> {book.genre}</p>
            <p className="book-rating"><strong>Rating:</strong> {book.rating}</p>
            <p className="book-year"><strong>Year:</strong> {book.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
