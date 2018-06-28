import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { search, update } from '../BooksAPI';
import Book from './Book';


class Search extends Component {
  state = {
    search: '',
    books: []
  }

  componentWillReceiveProps(newProps) {
    this.setState(prevState => {
      let copyState = Object.assign({}, prevState);
      copyState.books = this.addShelfToBooks(prevState.books, newProps.books);
      return copyState;
    });
  }

  searchBooks = (searchText) => {
    search(searchText).then(response => {
      if(Array.isArray(response)) {
        this.setState({ books: this.addShelfToBooks(response, this.props.books) })
      } else {
        this.setState({ books: [] })
      }
    });
  }

  addShelfToBooks = (searchResults, shelfBooks) => {
    return searchResults.map(result => {
      const resultCopy = Object.assign({}, result);
      const matchedBook = shelfBooks.find(book => book.id === result.id);
      if (matchedBook) {
        resultCopy.shelf = matchedBook.shelf;
      } else {
        resultCopy.shelf = 'none';
      }
      return resultCopy;
    });
  }

  updateSearch = (searchText) => {
    this.setState({ search: searchText })
    this.searchBooks(searchText); 
  }

  moveBookToShelf = (book, shelf) => {
    update(book, shelf).then(response => {
      this.props.fetchBooks();
    })
  }

  render() {
    const { search } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
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