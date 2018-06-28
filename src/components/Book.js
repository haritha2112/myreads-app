import React, { Component } from 'react';

class Book extends Component {

  render() {
    const thumbnail = this.props.details.imageLinks ? this.props.details.imageLinks.thumbnail : '';
    const authors = this.props.details.authors || [];
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select value={this.props.details.shelf} onChange={event => this.props.moveBookToShelf(this.props.details, event.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.details.title}</div>
        <div className="book-authors">{authors.join(', ')}</div>
      </div>
    );
  }
}

export default Book;