import React, { Component, Fragment } from "react";
// import { Link } from 'react-router-dom'
// import ImageInput from "./ImageInput";
// import serializeForm from 'form-serialize'
// import BooksApp from "./App";
import Book from "./Book";

class BookShelf extends Component {

  render() {
    const { books,shelf,bookshelf_title } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelf_title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books&&books.filter(a=>a.shelf===shelf).map((a) => (
              <li key={a.id}>
                <Book  updateHandler={this.props.updateHandler}  book={a}/>
                {/* console.log(a) */}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;







