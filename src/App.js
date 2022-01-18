import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import { Routes, Route } from 'react-router-dom'
import {debounce} from 'throttle-debounce'


class BooksApp extends React.Component {
  
  state = {
    books: [],
    booksQueried: [],
    shelves: [
      {id: 1, name: "wantToRead"},
      {id: 2, name: "currentlyReading"}, 
      {id: 3, name: "read"}]
  }
  
  fetchBooks = () => {
    BooksAPI.getAll()
    .then((books) => {
      console.log(books)
      this.setState(() => ({
        books
      }))
    })
  }
  
  componentDidMount() {
    this.fetchBooks()
  }
  
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      this.fetchBooks()
    })
  }
  
  searchBks = (query, maxResults=6) => {
    if (query.length > 0) {
      BooksAPI.search(query, maxResults)
      .then((books) => {
        //console.log(JSON.stringify(books))
        this.setState(() => ({
          booksQueried: books
        }))
        //console.log(`Books queried: ${JSON.stringify(this.state.booksQueried)}`)
      })
    }
    else {
      this.setState(() => ({
        booksQueried: []
      }))
    }
  }
  

  render() {
  	const {books, booksQueried, shelves} = this.state
    
    return (
      <div className="app">
      {/*<div>{JSON.stringify(this.state.books)}</div>*/}
      	<Routes>
          <Route path='/' element={
            <ListBooks 
            	books={books} 
				shelves={shelves} 
				changeShelf={this.changeShelf}
			/>}
		  />
          <Route path='/search' element={
            <SearchBooks
            	books={booksQueried}
				searchBks={this.searchBks} 
				changeShelf={this.changeShelf}
            />}
		  />
		</Routes>
      </div>
    )
  }
}

export default BooksApp
