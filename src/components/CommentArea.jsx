import React, { Component, useEffect, useState } from "react"
import { Alert, Spinner } from "react-bootstrap"
import AddComment from "./AddComment"
import CommentList from "./CommentList"

export function CommentArea(props) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [prevProps, setPrevProps] = useState(props)

  setError(error)

  setLoading(loading)

  setComments(comments)

  const getComments = () => {
    console.log(this.props.id)
    if (!this.props.id) {
      return
    }
    this.setLoading(true)
    this.setError(false)
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NlODBhYjM4YzkzNjAwMTUwNTc3YWIiLCJpYXQiOjE2NzQ0Nzc3NDAsImV4cCI6MTY3NTY4NzM0MH0._v7xRF3NJfqzvuSW8-D5vFdj_9fiSq17u4mBui7XFbk",
        },
      }
    )
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
  useEffect(() => {
    getComments()
  }, [])

  useEffect(() => {
    if (prevProps.id !== props.id) {
      getComments()
    }
  }, [props])

  return (
    <div className="comment-area">
      {error && (
        <Alert key="secondary" variant="primary">
          Error
        </Alert>
      )}
      {loading && <Spinner animation="grow" />}
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
  )
}

export default CommentArea
