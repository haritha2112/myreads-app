import React, { Component } from 'react';
import { search, update } from '../BooksAPI';
import Book from './Book';


class Search extends Component {
  state = {
    search: '',
    books: []
  }

  searchBooks = (searchText) => {
    search(searchText).then(response => {
      Array.isArray(response) ? 
      ( this.setState({ books: response }) ) : 
      ( this.setState({ books: [] }) );
    });
  }

  updateSearch = (searchText) => {
    this.setState({ search: searchText })
    this.searchBooks(searchText); 
  }

  moveBookToShelf = (book, shelf) => {
    update(book, shelf).then(response => {
      this.searchBooks(this.state.search);
    })
  }

  render() {
    const { search } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={this.props.exitSearch}>Close</a>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author" 
              value={search}
              onChange={(event) => this.updateSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.books.map(book => (
                <li><Book key={book.id} details={book} moveBookToShelf={this.moveBookToShelf} /></li>
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;