import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './Components/SearchBooks';
import ListBooks from './Components/ListBooks';
import { Routes, Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    booksQueried: [],
    shelves: [
      { id: 1, name: 'wantToRead' },
      { id: 2, name: 'currentlyReading' },
      { id: 3, name: 'read' }],
  }

  fetchBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books,
        }));
      });
  }

  componentDidMount() {
    this.fetchBooks();
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.fetchBooks();
      });
  }

  resetSearch = () => {
    this.setState(() => ({
      booksQueried: [],
    }));
  }

  searchBks = (query, maxResults = 6) => {
    if (query.length > 0) {
      try {
        BooksAPI.search(query, maxResults)
          .then((books) => {
            this.setState(() => ({
              booksQueried: books,
            }));
          });
      } catch (error) {
        console.log(`Error: ${error}`);
        this.setState(() => ({
          booksQueried: [],
        }));
      }
    }
  }

  render() {
  	const { books, booksQueried, shelves } = this.state;

    return (
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={(
              <ListBooks
                books={books}
                shelves={shelves}
                changeShelf={this.changeShelf}
              />
          )}
          />
          <Route
            path="/search"
            element={(
              <SearchBooks
                books={booksQueried}
                searchBks={this.searchBks}
                changeShelf={this.changeShelf}
                referenceBooks={books}
                resetSearch={this.resetSearch}
              />
          )}
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
