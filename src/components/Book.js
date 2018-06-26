import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.details.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading" selected={this.props.details.shelf === "currentlyReading"}>Currently Reading</option>
              <option value="wantToRead" selected={this.props.details.shelf === "wantToRead"}>Want to Read</option>
              <option value="read" selected={this.props.details.shelf === "read"}>Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.details.title}</div>
        <div className="book-authors">{this.props.details.authors.join(' | ')}</div>
      </div>
    );
  }
}

export default Book;