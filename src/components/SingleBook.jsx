import React, { Component } from "react"
import { Card, Col } from "react-bootstrap"
import CommentArea from "./CommentArea"

export class SingleBook extends Component {
  state = {
    selected: false,
  }

  // / the preState can't change while the function is updating the state
  setSelectedBook = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }))
    console.log(this.props)
    this.props.setSelectedBookId(this.props.book.asin)
  }

  /// this could have a batching bug

  //   selectedBook = () => {
  //     this.setState({
  //       selected: !this.state.selected,
  //     })
  //   }
  render() {
    return (
      <Col lg={2} md={3} gap={3}>
        <Card
          onClick={this.setSelectedBook}
          className={this.state.selected ? "border border-warning" : ""}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
