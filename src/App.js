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

  async fetchBooks() {
    const books = await BooksAPI.getAll()
    this.setState(() => ({books}));
  }

  componentDidMount() {
    this.fetchBooks();
  }

  changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf)
    this.fetchBooks();
  }

  resetSearch = () => {
    this.setState(() => ({
      booksQueried: [],
    }));
  }

  searchBks = async (query, maxResults = 6) => {
    if (query.length > 0) {
      try {
        const books = await BooksAPI.search(query, maxResults);
        this.setState(() => ({
          booksQueried: books,
        }));
      } catch (error) {
        console.log(`Error: ${error}`);
        this.setState(() => ({
          booksQueried: [],
        }));
      }
    }
    else {
      this.resetSearch();
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
