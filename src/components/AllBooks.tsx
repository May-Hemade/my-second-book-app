import React, { Component } from "react"
import { Row } from "react-bootstrap"
import { Book } from "../types/Book"

import SingleBook from "./SingleBook"

type AllBooksProps = {
  books: Book[]
  query?: string
  setSelectedBookId: (id: string) => void
}

export function AllBooks({ books, query, setSelectedBookId }: AllBooksProps) {
  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.query !== this.props.query) {
  //       console.log(this.props.query)
  //     }
  //   }

  return (
    <div>
      <Row>
        {books
          .filter((book) => {
            return query
              ? book.title
                  .toLowerCase()
                  // included return a boolean
                  .includes(query.toLowerCase())
              : true
          })
          .map((book) => {
            return (
              <SingleBook
                setSelectedBookId={setSelectedBookId}
                key={book.asin}
                book={book}
              ></SingleBook>
            )
          })}
      </Row>
    </div>
  )
}

export default AllBooks
