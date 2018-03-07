import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook, deleteBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <div key={book.title}>
                    <li onClick={() => this.props.selectBook(book)}>
                        {book.title}
                    </li>
                    <button onClick={() => this.props.deleteBook(book)}>X</button>
                </div>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook, deleteBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);