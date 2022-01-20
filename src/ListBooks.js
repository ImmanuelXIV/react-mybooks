import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'


class ListBooks extends Component {
  
  render() {
    const { books, shelves, changeShelf, referenceBooks} = this.props
    
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
     			 {shelves.map(shelf => (
      			   <BookShelf key={shelf.id} shelf={shelf.name} books={books} changeShelf={changeShelf}/>
                 ))}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
    )
  }
}

export default ListBooks