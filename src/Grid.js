import React, { Component } from 'react'
import Book from './Book';
import * as BooksAPI from './BooksAPI'
class Grid extends Component {
    // state = { array: [] }
    // componentDidUpdate(prev) {
    //     if (this.compare(prev.books,this.props.books)) {
    //         let arr = []

    //         if(this.props.books&&this.props.shelfBooks){
    //         for (let i = 0; i < this.props.books.length; i++) {
    //             const e1 = this.props.books[i];
    //             for (let j = 0; j < this.props.shelfBooks.length; j++) {
    //                 const e2 = this.props.shelfBooks[j];
    //                 if (e1.id === e2.id) {
    //                     arr.push(e2)
    //                 } else {
    //                     arr.push(e1)
    //                 }


    //             }
    //         }
    //         // this.setState({array:arr})
    //     }
    //         console.log("arr: ",arr)
    // }
            // return arr
        // }
    // }
    // compare = (arr1, arr2) => {
    //     if (arr1.length === arr2.length) {
    //         return true;
    //     }
    //     for (let i = 0; i < arr1.length; i++) {
    //         const e1 = arr1[i];
    //         for (let j = 0; j < arr2.length; j++) {
    //             const e2 = arr2[i];
    //             if(e1!==e2){
    //                 return false;
    //             }
    //         }
    //     }
    //     return true;
    // }

    render() {
        // const d=this.or();
        return (
            <div className="search-books-results">
                {
                    // !this.props.searchBooks? (
                    //     <strong>Loading ...</strong>
                    // ) :
                    (
                        <ol className="books-grid">
                            {this.props.books && this.props.books.map((a) => (
                                <li key={a.id}>
                                    {/* {this.props.shelfBooks.filter((b)=>(a.id===b.id))? */}
                                    {/* ( */}
                                    {/* <Book updateHandler={this.props.updateHandler} book={this.props.shelfBooks.filter((b)=>(a.id===b.id))[0]} /> */}

                                    {/* ):( */}
                                    {/* <Handler value={this.state.array} hndl={} /> */}
                                    <Book updateHandler={this.props.updateHandler} book={a} />

                                    {/* )} */}
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