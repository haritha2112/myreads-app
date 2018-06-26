import React, { Component } from 'react';
import Shelf from './Shelf';
import { getAll } from '../BooksAPI';

class ShelfDisplay extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    getAll().then((response) => {
      this.setState({ books: response });
    });
  }

  filterBooks = (type) => {
    return this.state.books.filter((book) => book.shelf === type );
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf title="Currently Reading" books={this.filterBooks("currentlyReading")}/>
          <Shelf title="Want to Read" books={this.filterBooks("wantToRead")}/>
          <Shelf title="Read" books={this.filterBooks("read")}/>
        </div>
        <div className="open-search">
          <a onClick={this.props.goToSearch}>Add a book</a>
        </div>
      </div>
    );
  }
}

export default ShelfDisplay;