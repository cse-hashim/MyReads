import React, { Component } from "react";

class Changer extends Component {

    handleChange = (e) => {
        this.props.book.shelf = e.target.value;
        this.props.updateHandler(this.props.book);
    }
    render() {
        return (
            <div className="book-shelf-changer" >
                <select defaultValue={this.props.book.shelf?this.props.book.shelf:'none'} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                <div>
                    {this.props.book.shelf}
                </div>
            </div>

        );
    }
}
export default Changer;
