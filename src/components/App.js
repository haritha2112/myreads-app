import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Search';
import ShelfDisplay from './ShelfDisplay';
import '../styles/App.css'
import { getAll } from '../BooksAPI';

class BooksApp extends Component {
  state = {
    books: []
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
        <BrowserRouter>
          <div>
            <Route exact path="/" render={(routerProps) => <ShelfDisplay books={this.state.books} fetchBooks={this.fetchBooks} {...routerProps} /> } />
            <Route exact path="/search" render={(routerProps) => <Search books={this.state.books} fetchBooks={this.fetchBooks} {...routerProps} /> }/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
