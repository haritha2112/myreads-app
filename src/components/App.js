import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import Search from './Search';
import ShelfDisplay from './ShelfDisplay';
import '../styles/App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  goToSearch = () => {
    this.setState({ showSearchPage: true });
  }

  exitSearch = () => {
    this.setState({ showSearchPage: false });
  }

  render() {
    return (
      <div className="app">
        {
          this.state.showSearchPage ? (
            <Search exitSearch={this.exitSearch} />
          ) : (
            <ShelfDisplay goToSearch={this.goToSearch} />
          )
        }
      </div>
    )
  }
}

export default BooksApp
