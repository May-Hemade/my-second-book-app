import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import FooterBook from "./components/FooterBook"
import NavBook from "./components/NavBook"
import Welcome from "./components/Welcome"
import AllBooks from "./components/AllBooks"
import books from "./books/horror.json"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import CommentArea from "./components/CommentArea"

function App() {
  const [query, setQuery] = useState("")
  const [selectedBookId, setSelectedBookId] = useState(null)

  useEffect(() => {
    let a = ""
    if (a) {
      console.log("has value")
    } else {
      console.log("no value")
    }
  }, [])

  return (
    <div className="App">
      <NavBook setQuery={setQuery}></NavBook>

      <Welcome button={"Go Somewhere"}></Welcome>
      <Row>
        <Col lg={8}>
          <AllBooks
            books={books}
            query={query}
            setSelectedBookId={setSelectedBookId}
            selectedBookId={selectedBookId}
          ></AllBooks>
          <FooterBook></FooterBook>
        </Col>
        <Col lg={4}>
          <CommentArea id={selectedBookId}></CommentArea>
        </Col>
      </Row>
    </div>
  )
}

export default App
