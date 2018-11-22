// @flow
import React from "react"
import { Text } from "react-native"

// data
import cats from "../../data/cats"

// components
import { Container, Title, Gallery } from "../components"

export default class RootContainer extends React.PureComponent {
  navigateToDetail = cat => {
    this.props.navigation.navigate("Detail", { item: cat })
  }

  render() {
    return (
      <Container>
        <Title>Cats are meow</Title>
        <Text>A little tribute to cats</Text>

        <Gallery images={cats} onImagePress={this.navigateToDetail} />
      </Container>
    )
  }
}
