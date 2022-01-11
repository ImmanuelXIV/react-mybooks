import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import { Routes, Route } from 'react-router-dom'


class BooksApp extends React.Component {
  
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      //console.log(books)
      this.setState(() => {
        books
      })
    })    
  }

  render() {
    return (
      <div className="app">
      	<Routes>
          <Route path='/' element={<ListBooks/>}/>
          <Route path='/search' element={<SearchBooks/>}/>
		</Routes>
      </div>
    )
  }
}

export default BooksApp
