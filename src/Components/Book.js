import React, { Component } from 'react';

class Book extends Component {
  render() {
    const { book, changeShelf, referenceBooks } = this.props;

    let shelf = 'none';
    if (book.shelf !== undefined) {
      shelf = book.shelf;
    }
    if (referenceBooks) {
      referenceBooks.map((b) => {
        if (b.id === book.id) {
        	shelf = b.shelf;
    	}
      });
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={(event) => {
                changeShelf(book, event.target.value);
              }}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{`${book.title}`}</div>
        <div className="book-authors">{`${book.authors}`}</div>
      </div>
    );
  }
}

export default Book;