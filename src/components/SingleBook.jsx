import React, { useState } from "react"
import { Card, Col } from "react-bootstrap"

export function SingleBook(props) {
  const [selected, setSelected] = useState(false)

  // / the preState can't change while the function is updating the state
  const setSelectedBook = () => {
    setSelected(!selected)

    console.log(props.book.asin)
    props.setSelectedBookId(props.book.asin)
  }

  /// this could have a batching bug

  //   selectedBook = () => {
  //     setState({
  //       selected: !state.selected,
  //     })
  //   }

  return (
    <Col lg={2} md={3} gap={3}>
      <Card
        onClick={setSelectedBook}
        className={selected ? "border border-warning" : ""}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>{props.book.category}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
