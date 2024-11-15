export const selectFilteredBooks = (state) => {
    const { books, filter } = state.books;
    if (!filter) return books;

    return books.filter(
        (book) =>
        book.title.toLowerCase().includes(filter.toLowerCase()) ||
        book.author.toLowerCase().includes(filter.toLowerCase()) ||
        book.category.toLowerCase().includes(filter.toLowerCase())
    );
};
