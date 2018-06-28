import React, { Component } from 'react'
import Search from './Search';
import ShelfDisplay from './ShelfDisplay';
import '../styles/App.css'
import { getAll } from '../BooksAPI';

class BooksApp extends Component {
  state = {
    showSearchPage: false,
    books: []
  }

  goToSearch = () => {
    this.setState({ showSearchPage: true });
  }

  exitSearch = () => {
    this.setState({ showSearchPage: false });
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    getAll().then((response) => {
      this.setState({ books: response });
    });
  }

  render() {
    return (
      <div className="app">
        {
          this.state.showSearchPage ? (
            <Search exitSearch={this.exitSearch} books={this.state.books} fetchBooks={this.fetchBooks} />
          ) : (
            <ShelfDisplay goToSearch={this.goToSearch} books={this.state.books} fetchBooks={this.fetchBooks} />
          )
        }
      </div>
    )
  }
}

export default BooksApp
