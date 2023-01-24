import React, { Component } from "react"
import { Alert, Spinner } from "react-bootstrap"
import AddComment from "./AddComment"
import CommentList from "./CommentList"

export class CommentArea extends Component {
  state = {
    comments: [],
    loading: false,
    error: false,
  }
  setLoading = (loading) => {
    this.setState((prevState) => ({
      ...prevState,
      loading: loading,
    }))
  }

  setError = (error) => {
    this.setState((prevState) => ({
      ...prevState,
      error: error,
    }))
  }

  setComments = (comments) => {
    this.setState({ comments: comments })
  }

  url = `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`

  getComments = () => {
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
        this.setComments(comments)
        this.setLoading(false)
        this.setError(false)
      })
      .catch((error) => {
        this.setLoading(false)
        this.setError(true)
        console.log(error)
      })
  }
  componentDidMount() {
    this.getComments()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.getComments()
    }
  }

  render() {
    return (
      <div className="comment-area">
        {this.state.error && (
          <Alert key="secondary" variant="primary">
            Error
          </Alert>
        )}
        {this.state.loading && <Spinner animation="grow" />}
        <CommentList
          setError={this.setError}
          setLoading={this.setLoading}
          comments={this.state.comments}
          refresh={this.getComments}
        ></CommentList>
        <AddComment
          setError={this.setError}
          setLoading={this.setLoading}
          asin={this.props.id}
          refresh={this.getComments}
        ></AddComment>
      </div>
    )
  }
}

export default CommentArea
