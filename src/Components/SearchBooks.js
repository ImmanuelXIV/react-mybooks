import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  	searchBks: PropTypes.func.isRequired,
  	changeShelf: PropTypes.func.isRequired,
  	referenceBooks: PropTypes.array.isRequired,
  	resetSearch: PropTypes.func.isRequired
  }
  
  state = {
    query: '',
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query,
    }));
    setTimeout(() => {
      this.props.searchBks(query);
    }, 500);
  }

  render() {
    const {
      books, searchBks, changeShelf, referenceBooks, resetSearch,
    } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={() => resetSearch()}>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.length > 0 && books.map((book) => {
			  if (book.hasOwnProperty('imageLinks')) {
			    return <Book key={book.id} book={book} changeShelf={changeShelf} referenceBooks={referenceBooks} />;
			  }
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
