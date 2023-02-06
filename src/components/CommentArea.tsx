import React, { Component, useEffect, useState } from "react"
import { Alert, Spinner } from "react-bootstrap"
import AddComment from "./AddComment"
import CommentList from "./CommentList"
import { Comment } from "../types/Comment"

type CommentAreaProps = {
  id?: string
}
export function CommentArea(props: CommentAreaProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getComments = () => {
    console.log(props.id)
    if (!props.id) {
      return
    }
    setLoading(true)
    setError(false)
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.id}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NlODBhYjM4YzkzNjAwMTUwNTc3YWIiLCJpYXQiOjE2NzQ0Nzc3NDAsImV4cCI6MTY3NTY4NzM0MH0._v7xRF3NJfqzvuSW8-D5vFdj_9fiSq17u4mBui7XFbk",
      },
    })
      .then((response) => response.json())
      .then((comments) => {
        console.log(comments)
        setComments(comments)
        setLoading(false)
        setError(false)
      })
      .catch((error) => {
        setLoading(false)
        setError(true)
        console.log(error)
      })
  }
  // useEffect(() => {
  //   getComments()
  // }, [])

  useEffect(() => {
    getComments()
  }, [props.id])

  return (
    <div className="comment-area">
      {error && (
        <Alert key="secondary" variant="primary">
          Error
        </Alert>
      )}
      {loading && <Spinner animation="grow" />}
      {props.id && (
        <div>
          <CommentList
            setError={setError}
            setLoading={setLoading}
            comments={comments}
            refresh={getComments}
          ></CommentList>
          <AddComment
            setError={setError}
            setLoading={setLoading}
            asin={props.id}
            refresh={getComments}
          ></AddComment>
        </div>
      )}
    </div>
  )
}

export default CommentArea
