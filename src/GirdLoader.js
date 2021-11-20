import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
class GridLoader extends Component {
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
    handleSimilarities = (arr1) => {
        const arr = new Map()
        const arr2 = this.props.shelfBooks;
        if (arr1 && arr2) {
            for (let i = 0; i < arr1.length; i++) {
                const e1 = arr1[i];
                arr.set(e1.id, e1);
            }
            for (let j = 0; j < arr2.length; j++) {
                const e2 = arr2[j];
                if (arr.has(e2.id)) {
                    arr.set(e2.id, e2)
                }
            }
            return Array.from(arr.values());
        }
    }
    componentDidUpdate(prev) {
        console.log(this.props)
        if (this.props.query !== prev.query) {
            if (this.props.query) {
                if (this.promise) {
                    this.promise.cancel()
                }
                this.req()
                    .then(externalData => {
                        if (!externalData.hasOwnProperty('error')) {
                            this.promise = null;
                            if (this.state.err) this.setState({ err: null })
                            externalData = this.handleSimilarities(externalData)
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