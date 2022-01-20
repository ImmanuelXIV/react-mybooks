import React, { Component } from 'react'
import Book from './Book'


class BookShelf extends Component {
  render() {
    const { books, shelf, changeShelf} = this.props
    
    return (
      <div className="bookshelf">
      	<h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => {
                if (book.shelf === shelf){
                  return <Book key={book.id} book={book} changeShelf={changeShelf}/>
                }
             })}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf