import React, { Component } from "react"
import { ListGroup } from "react-bootstrap"

export function CommentList(props) {
  const url = "https://striveschool-api.herokuapp.com/api/comments/"

  const deleteComment = (id) => {
    props.setLoading(true)
    props.setError(false)
    fetch(url + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UxMjE1ZmQxMDYxNzAwMTUyZGU0OTMiLCJpYXQiOjE2NzU2OTg1MjgsImV4cCI6MTY3NjkwODEyOH0.WYTUIobVXU-Y_XAFktYNRzHp5Neb3ucb1WSSBdo1ShA",
      },
    })
      .then((response) => response.json())
      .then((comment) => {
        props.setLoading(false)
        props.setError(false)
        console.log(comment)
        props.refresh()
      })
      .catch((error) => {
        props.setLoading(false)
        props.setError(true)
        console.log(error)
      })
  }

  return (
    <div>
      <ListGroup>
        {props.comments.map((comment) => (
          <ListGroup.Item key={comment._id}>
            {comment.comment} {comment.rate}
            <span onClick={() => deleteComment(comment._id)}>🗑️</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default CommentList
