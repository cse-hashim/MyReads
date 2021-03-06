import React from "react";
import ReactStars from "react-rating-stars-component";
import Changer from './Changer'
const Book = (props) => {

    const { book } = props;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks ? book.imageLinks.smallThumbnail : null}')` }}></div>
                <Changer book={book} updateHandler={props.updateHandler} />
            </div>
            <div className="book-title">{`${book.title}${book.subtitle ? `: ${book.subtitle}` : ''}`}</div>
            <div className="book-authors">
                {(book && book.authors) && book.authors.join(', ')}
            </div>
            <div className='rating-container'>
                <span>
                    <ReactStars
                        count={5}
                        size={24}
                        isHalf={true}
                        disabled={true}
                        edit={false}
                        value={book.averageRating ? book.averageRating : 0}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </span>
                <span>({book.ratingsCount ? book.ratingsCount : 0})</span>
            </div>
        </div>
    );
}
export default Book;