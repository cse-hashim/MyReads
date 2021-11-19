import React, { Component } from 'react'
import Book from './Book';
import * as BooksAPI from './BooksAPI'
class SearchGrid extends Component {
    // state = {
    //     externalData: null,
    // };
    // componentDidMount() {
    //     // if(this.props.query)
    //     // this._asyncRequest = BooksAPI.search(this.props.query).then(
    //     //     externalData => {
    //     //         this._asyncRequest = null;
    //     //         this.setState({ externalData });
    //     //         this.props.updateSearchBooks(externalData)
    //     //     }
    //     // );
    //     // console.log(this.props.query)
    //     // BooksAPI.search(this.props.query).then(e=>{
    //     //     console.log(e);
            
    //     // })
    // }
    // componentDidUpdate(){
    //     console.log(this.props.query);
    //     if (this.props.query){
    //     BooksAPI.search(this.props.query).then(e=>{
    //         console.log(e);
            
    //     });
    // }

    // }
    // componentWillUnmount() {
    //     if (this._asyncRequest) {
    //         this._asyncRequest.cancel();
    //     }
    // }

    render() {
        return (

            <div className="search-books-results">
                {
                    // !this.props.searchBooks? (
                    //     <strong>Loading ...</strong>
                    // ) :
                     (
                        <ol className="books-grid">
                            {this.props.books.map((a) => (
                                <li key={a.id}>
                                    {/* <Book updateHandler={this.props.updateHandler} book={a} /> */}
                                    console.log(a)
                                </li>
                            ))}
                        </ol>

                    )
                }
            </div>

        )
    }
}
export default SearchGrid;