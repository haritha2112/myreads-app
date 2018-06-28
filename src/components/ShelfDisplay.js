import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import { update } from '../BooksAPI';

class ShelfDisplay extends Component {

  filterBooks = (type) => {
    return this.props.books.filter((book) => book.shelf === type );
  }

  moveBookToShelf = (book, shelf) => {
    update(book, shelf).then(response => {
      this.props.fetchBooks();
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf title="Currently Reading" books={this.filterBooks("currentlyReading")} moveBookToShelf={this.moveBookToShelf} />
          <Shelf title="Want to Read" books={this.filterBooks("wantToRead")} moveBookToShelf={this.moveBookToShelf} />
          <Shelf title="Read" books={this.filterBooks("read")} moveBookToShelf={this.moveBookToShelf} />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ShelfDisplay;