import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookShelf extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }
  
  render() {
    const { books, shelf, changeShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              if (book.shelf === shelf) {
                return <Book key={book.id} book={book} changeShelf={changeShelf} />;
              }
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
