import React from "react"
import { Button, Jumbotron } from "react-bootstrap"
type WelcomeProps = {
  button: string
}

function Welcome({ button }: WelcomeProps) {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>The React bookshop is here for you</p>
        <p>
          <Button variant="primary">{button}</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default Welcome
