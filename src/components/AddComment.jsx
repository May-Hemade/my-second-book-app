import React from "react"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"

function AddComment(props) {
  const [comment, setComment] = useState("")
  const [rate, setRate] = useState("1")

  const url = "https://striveschool-api.herokuapp.com/api/comments/"

  const postComments = (comment) => {
    props.setLoading(true)
    props.setError(false)
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NlODBhYjM4YzkzNjAwMTUwNTc3YWIiLCJpYXQiOjE2NzQ0Nzc3NDAsImV4cCI6MTY3NTY4NzM0MH0._v7xRF3NJfqzvuSW8-D5vFdj_9fiSq17u4mBui7XFbk",
      },
      body: JSON.stringify(comment),
    })
      .then((response) => response.json())
      .then((comment) => {
        props.setLoading(false)
        props.setError(false)
        console.log("Success:", comment)
        props.refresh()
      })
      .catch((error) => {
        props.setLoading(false)
        props.setError(true)
        console.log("Error:", error)
      })
  }

  const submitComment = (event) => {
    event.preventDefault()
    const bookComment = {
      comment: comment,
      rate: rate,
      elementId: props.asin,
    }
    postComments(bookComment)
    setComment("")
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="comment">
          <Form.Label>comment</Form.Label>
          <Form.Control
            type="text"
            value={comment}
            placeholder="Comment"
            onChange={(event) => {
              setComment(event.target.value)
            }}
          />
        </Form.Group>
        <Form.Group controlId="rate">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => {
              setRate(event.target.value)
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitComment}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
