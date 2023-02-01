import React from "react"
import { Button } from "react-bootstrap"

function ButtonComponent(props) {
  return (
    <div>
      <Button variant="outline-warning">{props.text}</Button>
    </div>
  )
}

export default ButtonComponent

/// function {} when I have more than one statement and if I want to return
