import { createSlice } from '@reduxjs/toolkit';
import booksData from '../json/books';

const booksArray = booksData.map((book, index) => ({
  id: index + 1,
  title: book.title,
  author: book.author,
  genre: book.genre, 
  description: `${book.title} by ${book.author}`,
  rating: book.rating,
  year: book.year,
  url: book.url,
}));


const initialState = {
  books: booksArray,
  searchTerm: '', // Add searchTerm in initial state
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, updates } = action.payload;
      const book = state.books.find(b => b.id === id);
      if (book) {
        Object.assign(book, updates);
      }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    filterBooks: (state, action) => {
      state.searchTerm = action.payload; // Update searchTerm in state
    },
  },
});

export const { addBook, updateBook, deleteBook, filterBooks } = booksSlice.actions;
export default booksSlice.reducer;
