import React from "react";
import Book from "./Book";
function Grid(props) {
  return (
    <div className="search-books-results">
      {
        (
          <ol className="books-grid">
            {props.searchBooks && props.searchBooks.map((a) => (
              <li key={a.id}>
                <Book updateHandler={props.updateHandler} book={a} />
              </li>
            ))}
          </ol>
        )
      }
    </div>
  )
}
function Shelf(props) {
  const { books, shelf, bookshelf_title } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelf_title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books && books.filter(a => a.shelf === shelf).map((a) => (
            <li key={a.id}>
              <Book updateHandler={props.updateHandler} book={a} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
const BookShelf = (props) => {
  return (
    <div>
      {
        props.isShelf ?
          props.shelfNames.map((e) => (
            <Shelf key={e.shelf} books={props.books} updateHandler={props.updateHandler} shelf={e.shelf} bookshelf_title={e.bookshelf_title} />
          )) : (
            <Grid books={props.books} searchBooks={props.searchBooks} updateHandler={props.updateHandler} />
          )
      }
    </div>
  )
}

export default BookShelf;







