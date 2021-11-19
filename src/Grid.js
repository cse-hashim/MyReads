import React, { Component } from 'react'
import Book from './Book';
import * as BooksAPI from './BooksAPI'
class Grid extends Component {
    

    render() {
        return (
            <div className="search-books-results">
                {
                    // !this.props.searchBooks? (
                    //     <strong>Loading ...</strong>
                    // ) :
                     (
                        <ol className="books-grid">
                            {this.props.books&&this.props.books.map((a) => (
                                <li key={a.id}>
                                    <Book updateHandler={this.props.updateHandler} book={a} />
                                    {/* {console.log(a)} */}
                                </li>
                            ))}
                        </ol>

                    )
                }
            </div>

        )
    }
}
export default Grid;