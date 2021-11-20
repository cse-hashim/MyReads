import React, { Fragment } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import GridLoader from './GirdLoader'
class BooksApp extends React.Component {

  componentDidMount() {
    BooksAPI.getAll().then(
      (e) => {
        // console.log(e);
        this.setState({ shelfBooks: e });
      }
    );
  }
  searchBookUpdateHandler = (books) => {
    this.setState(curr => ({
      searchBooks: books
    }));
  }
  shelfBookUpdateHandler = (book) => {
    BooksAPI.update(book, book.shelf)
      .then(() => {
        BooksAPI.getAll().then(
          (e) => {
            console.log(e);
            this.setState({ shelfBooks: e });
          }
        );
      });
  }

  state = {
    shelfBooks: [],
    searchBooks: [],
    query: '',
  }
  updateHandler = (q) => {
    this.setState({ query: q });

  }
  updateQuery = (query) => {
    new Promise((resolve) => { resolve(1) }).then(() => { this.setState(() => ({ query: query })); }).then(() => {
      BooksAPI.search(query).then(
        (e) => {
          console.log(e);
          this.setState({ searchBooks: e });
        }
      );
    })

  }
  clearQuery = () => {
    this.updateQuery('')
  }
  updateSearchBooks = (array) => {
    this.setState((curr) => ({
      searchBooks: array
    }));
  }
  render() {
    const shelfNames = [{ shelf: "currentlyReading", bookshelf_title: "Currently Reading" },
    { shelf: "wantToRead", bookshelf_title: "Want To Read" },
    { shelf: "read", bookshelf_title: "Read" }]
    return (
      <div className="app">
        <Route exact path="/"
          render={({ history }) => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf shelfNames={shelfNames} isShelf={true} books={this.state.shelfBooks} updateHandler={this.shelfBookUpdateHandler} />
                </div>
              </div>
              <div className="open-search">
                {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
                <Link className="link" onClick={() => { this.setState({ query: '', searchBooks: [] }); history.push('/') }} to={{ pathname: "/search" }} >Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route exact path="/search"
          render={({ history }) => (
            <Fragment>
              <div className="search-books">
                <div className="search-books-bar">
                  {/* <button className="close-search" onClick={() => { this.setState({ showSearchPage: false, query: '', searchBooks: [] }) }}>Close</button> */}
                  <Link className="close-search" to={{ pathname: "/" }} onClick={() => { history.push('/search') }}>Close</Link>
                  <div className="search-books-input-wrapper">
                    <input
                      type="text"
                      placeholder="Search by title or author"
                      value={this.state.query}
                      onChange={e => this.updateHandler(e.target.value)}
                    />
                  </div>
                </div>
                <GridLoader shelfBooks={this.state.shelfBooks} query={this.state.query} update={(e) => this.updateSearchBooks(e)} />
                <BookShelf isShelf={false} books={this.state.shelfBooks} searchBooks={this.state.searchBooks} updateHandler={this.shelfBookUpdateHandler} />
              </div>
            </Fragment>
          )}
        />
      </div>
    )
  }
}

export default BooksApp;
