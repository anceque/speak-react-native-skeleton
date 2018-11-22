// @flow
import React from "react"

// components
import { Title, Container } from "../components"

class ContactMap extends React.Component {
  static navigationOptions = { title: "Contact information" }

  render() {
    return (
      <Container>
        <Title>Map to do</Title>
      </Container>
    )
  }
}

export default ContactMap
