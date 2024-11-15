import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import { addBook } from '../redux/bookSlice.js';
import './addbook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook to redirect after submission

  // Initial state for the form
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    rating: '',
    year: '',
    url: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value
    });
  };

  // Form validation (basic)
  const validateForm = () => {
    if (!bookData.title || !bookData.author || !bookData.genre || !bookData.rating || !bookData.year || !bookData.url) {
      alert('All fields are required');
      return false;
    }
    if (bookData.rating < 0 || bookData.rating > 5) {
      alert('Rating must be between 0 and 5');
      return false;
    }
    return true;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before dispatching
    if (validateForm()) {
      const newBook = {
        ...bookData,
        id: Date.now(),  // Unique id generated using Date.now() (you may use UUID in production)
        rating: parseFloat(bookData.rating),  // Convert rating to float
        year: parseInt(bookData.year) // Convert year to integer
      };

      // Dispatch the addBook action to Redux store
      dispatch(addBook(newBook));

      // Clear form fields
      setBookData({
        title: '',
        author: '',
        genre: '',
        rating: '',
        year: '',
        url: ''
      });

      // Redirect to Browse page after adding the book
      navigate('/browseBooks');
    }
  };

  return (
    <div className="add-book-container">
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={bookData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" value={bookData.author} onChange={handleChange} required />
        </div>
        <div>
          <label>Genre:</label>
          <input type="text" name="genre" value={bookData.genre} onChange={handleChange} required />
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" name="rating" step="0.1" min="0" max="5" value={bookData.rating} onChange={handleChange} required />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" name="year" value={bookData.year} onChange={handleChange} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="url" name="url" value={bookData.url} onChange={handleChange} required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
