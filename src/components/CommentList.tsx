import React, { Component } from "react"
import { ListGroup } from "react-bootstrap"
import { Comment } from "../types/Comment"

type CommentListProps = {
  comments: Comment[]
  setLoading: (loading: boolean) => void
  setError: (error: boolean) => void
  refresh: () => void
}
export function CommentList(props: CommentListProps) {
  const url = "https://striveschool-api.herokuapp.com/api/comments/"

  const deleteComment = (id: string) => {
    props.setLoading(true)
    props.setError(false)
    fetch(url + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NlODBhYjM4YzkzNjAwMTUwNTc3YWIiLCJpYXQiOjE2NzQ0Nzc3NDAsImV4cCI6MTY3NTY4NzM0MH0._v7xRF3NJfqzvuSW8-D5vFdj_9fiSq17u4mBui7XFbk",
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
            <span onClick={() => deleteComment(comment._id!)}>🗑️</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default CommentList
