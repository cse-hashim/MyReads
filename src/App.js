import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchGrid from './SearchGrid'

import BookShelf from './BookShelf'
import Book from './Book'
import GridLoader from './GirdLoader'
import Grid from './Grid'
class BooksApp extends React.Component {

  componentDidMount() {
    BooksAPI.getAll().then(
      (e) => {
        console.log(e);
        this.setState({shelfBooks: e});
      }
    );
  }
  searchBookUpdateHandler=(books)=>{
    this.setState(curr=>({
      searchBooks: books
    }));
  }
  shelfBookUpdateHandler=(book)=>{
    // new Promise((resolve)=>{resolve(1)})
    // .then(()=>{
    //   this.setState(curr=>({
    //     shelfBooks: curr.shelfBooks.map(a=>{
    //       if(a.id===book.id){
    //         // a.shelf=book.shelf;
    //         return book;
    //       }
    //       return a;
    //     }
    //   )}))
    // })
    // .then(()=>{
      // BooksAPI.update(book,book.shelf);
    // })
    BooksAPI.update(book,book.shelf)
    .then(()=>{
      BooksAPI.getAll().then(
        (e) => {
          console.log(e);
          this.setState({shelfBooks: e});
        }
      );
    });
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    shelfBooks: [],
    searchBooks: [],
    query:'',
  }
  updateHandler =(q)=> {
    this.setState({query: q});

  }
  updateQuery = (query) => {
    new Promise((resolve)=>{resolve(1)}).then(()=>{this.setState(() => ({ query: query }));}).then(()=>{
      BooksAPI.search(query).then(
        (e) => {
          console.log(e);
          this.setState({searchBooks: e});
        }
      );
    })
    
}
clearQuery = () => {
    this.updateQuery('')
}
updateSearchBooks = (array)=>{
  this.setState((curr)=>({
    searchBooks: array
  }));
}
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() =>{ this.setState({ showSearchPage: false ,query:'',searchBooks:[]})}}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={e=>this.updateHandler(e.target.value)}
                />

              </div>
            </div>
            {/* <SearchGrid books={this.state.searchBooks} query={this.state.query} updateHandler={this.updateHandler} updateSearchBooks={this.searchBookUpdateHandler}/> */}
            <GridLoader shelfBooks={this.state.shelfBooks} query={this.state.query} update={(e)=>this.updateSearchBooks(e)}/>
            <Grid shelfBooks={this.state.shelfBooks} books={this.state.searchBooks} updateHandler={this.shelfBookUpdateHandler}/>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {/* <ShelfOrganizer /> */}
                <BookShelf books={this.state.shelfBooks} updateHandler={this.shelfBookUpdateHandler} shelf="currentlyReading" bookshelf_title="Currently Reading" />
                <BookShelf books={this.state.shelfBooks} updateHandler={this.shelfBookUpdateHandler} shelf="wantToRead" bookshelf_title="Want To Read" />
                <BookShelf books={this.state.shelfBooks} updateHandler={this.shelfBookUpdateHandler} shelf="read" bookshelf_title="Read" />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp;
