import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom'
// import ImageInput from "./ImageInput";
// import serializeForm from 'form-serialize'
// import BooksApp from "./App";
import Changer from './Changer'
class Book extends Component {
    
    render() {
        const { book } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks?book.imageLinks.smallThumbnail:null}')` }}></div>
                    <Changer book={book}  updateHandler={this.props.updateHandler} />
                </div>
                <div className="book-title">{`${book.title}${book.subtitle?`: ${book.subtitle}`:''}`}</div>
                <div className="book-authors">
                    {(book&&book.authors)&&book.authors.join(', ')}
                    {/* {book.authors.map((a) => (
                        <p>{a}</p>
                    ))} */}
                    </div>                
            </div>
        );
    }
}
export default Book;