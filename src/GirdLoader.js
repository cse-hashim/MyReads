import React, { Component } from 'react'
import Book from './Book';
import * as BooksAPI from './BooksAPI'
class GridLoader extends Component {
    // state = {
    //     externalData: null,
    // };
    state = {
        data: null,
        err: null,
    }
    req = () => {
        this.abort = new AbortController();
        this.signal = this.abort.signal;

        this.promise = new Promise(async (resolve) => {
            resolve(await BooksAPI.search(this.props.query, this.signal).catch((e) => { console.log('canceled') }))
        }).catch((e) => { console.log('canceled') });
        this.promise.catch((e) => { console.log('canceled') })

        this.promise.cancel = () => this.abort.abort();
        return this.promise.catch((e) => { console.log('canceled') });
    }

    componentDidUpdate(prev) {
        console.log(this.props)
        if (this.props.query !== prev.query) {
            if (this.props.query) {
                if (this.promise) {
                    this.promise.cancel()

                }
                // BooksAPI.search(this.props.query)
                this.req()
                    .then(externalData => {
                        if (!externalData.hasOwnProperty('error')) {
                            this.promise = null;
                            if (this.state.err) this.setState({ err: null })
                            this.props.update(externalData)
                            console.log(externalData)
                            this.setState((curr) => ({
                                data: externalData
                            }));
                        } else {
                            this.props.update([])
                            this.setState({ err: externalData.error, data: null })

                        }

                    }
                    ).catch((e) => { console.log('canceled') })
                console.log(this.props.query)
            } else {
                this.setState({ err: null, data: null })
                this.props.update([])

            }
        }
    }
    // shouldComponentUpdate(props2,state2){
    //     return         (this.props.query!==props2.query)

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
                {(this.state.err) ? (
                    <p>Can't Find Requested Query <strong>{this.props.query}</strong>: </p>
                ) :
                    (!this.state.data && !this.props.query) ? (
                        <p>Please Enter Your Search!</p>
                    ) :
                        (!this.state.data && this.props.query) ? (
                            <p>LOADING ...</p>
                        ) : (
                            <p>search results of <strong>{this.props.query}</strong>: </p>
                        )}


            </div>



        )
    }
}
export default GridLoader;