import "./bookCard.css"
const BookCard = ({ title, url, author, year }) => {
  return (
    <div className="bookCardContainer">
      <img className="bookCardImg" src={url} alt={title} />
      <h3 className="bookCardTitle">{title}</h3>
      <p className="bookCardAuthor">{author}</p>
      <p className="bookCardYear">{year}</p>
    </div>
  );
};


export default BookCard
