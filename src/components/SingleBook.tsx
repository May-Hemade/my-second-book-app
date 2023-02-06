import React, { useState } from "react"
import { Card, Col } from "react-bootstrap"
import { Book } from "../types/Book"

type SingleBookProps = {
  book: Book
  setSelectedBookId: (asin: string) => void
}

export function SingleBook({ book, setSelectedBookId }: SingleBookProps) {
  const [selected, setSelected] = useState<boolean>(false) //we don't need to define a type  since it is already with a false

  // / the preState can't change while the function is updating the state
  const setSelectedBook = () => {
    setSelected(!selected)

    console.log(book.asin)
    setSelectedBookId(book.asin)
  }

  /// this could have a batching bug

  //   selectedBook = () => {
  //     setState({
  //       selected: !state.selected,
  //     })
  //   }

  return (
    <Col xs={6} md={4} lg={3}>
      <Card
        onClick={setSelectedBook}
        className={selected ? "border border-warning" : ""}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
