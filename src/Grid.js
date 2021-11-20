import React, { Component } from 'react'
import Book from './Book';
class Grid extends Component {
    render() {
        return (
            <div className="search-books-results">
                {
                    (
                        <ol className="books-grid">
                            {this.props.books && this.props.books.map((a) => (
                                <li key={a.id}>
                                    <Book updateHandler={this.props.updateHandler} book={a} />
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