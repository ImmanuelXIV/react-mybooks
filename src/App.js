import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import { Routes, Route } from 'react-router-dom'


class BooksApp extends React.Component {
  
  state = {
    books: [],
    shelves: [
      {id: 1, name: "wantToRead"},
      {id: 2, name: "currentlyReading"}, 
      {id: 3, name: "read"}]
  }
  
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      console.log(books)
      this.setState(() => ({
        books
      }))
    })    
  }

  render() {
  	const {books, shelves} = this.state
    
    return (
      <div className="app">
      {/*<div>{JSON.stringify(this.state.books)}</div>*/}
      	<Routes>
          <Route path='/' element={<ListBooks books={books} shelves={shelves}/>}/>
          <Route path='/search' element={<SearchBooks/>}/>
		</Routes>
      </div>
    )
  }
}

export default BooksApp
