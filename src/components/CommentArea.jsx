import React, { Component, useEffect, useState } from "react"
import { Alert, Spinner } from "react-bootstrap"
import AddComment from "./AddComment"
import CommentList from "./CommentList"

export function CommentArea(props) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getComments = async () => {
    console.log(props.id)
    if (!props.id) {
      return
    }
    try {
      setLoading(true)
      setError(false)
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UxMjE1ZmQxMDYxNzAwMTUyZGU0OTMiLCJpYXQiOjE2NzU2OTg1MjgsImV4cCI6MTY3NjkwODEyOH0.WYTUIobVXU-Y_XAFktYNRzHp5Neb3ucb1WSSBdo1ShA",
          },
        }
      )
      let comments = await response.json()

      console.log(comments)
      setComments(comments)
      setLoading(false)
      setError(false)
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log(error)
    }
  }

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
