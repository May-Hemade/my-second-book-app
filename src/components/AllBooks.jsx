import React, { Component } from "react"
import { Row } from "react-bootstrap"

import SingleBook from "./SingleBook"

export class AllBooks extends Component {
  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.query !== this.props.query) {
  //       console.log(this.props.query)
  //     }
  //   }
  render() {
    return (
      <div>
        <Row>
          {this.props.books
            .filter((book) => {
              return this.props.query
                ? book.title
                    .toLowerCase()
                    // included return a boolean
                    .includes(this.props.query.toLowerCase())
                : true
            })
            .map((book) => {
              return (
                <SingleBook
                  setSelectedBookId={this.props.setSelectedBookId}
                  key={book.asin}
                  book={book}
                ></SingleBook>
              )
            })}
        </Row>
      </div>
    )
  }
}

export default AllBooks
