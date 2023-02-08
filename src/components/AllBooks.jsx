import React, { Component } from "react"
import { Row } from "react-bootstrap"

import SingleBook from "./SingleBook"

export function AllBooks(props) {
  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.query !== this.props.query) {
  //       console.log(this.props.query)
  //     }
  //   }

  return (
    <div>
      <Row>
        {props.books
          .filter((book) => {
            return props.query
              ? book.title
                  .toLowerCase()
                  // included return a boolean
                  .includes(props.query.toLowerCase())
              : true
          })
          .map((book) => {
            return (
              <SingleBook
                setSelectedBookId={props.setSelectedBookId}
                key={book.asin}
                book={book}
                selectedBookId={props.selectedBookId}
              ></SingleBook>
            )
          })}
      </Row>
    </div>
  )
}

export default AllBooks
