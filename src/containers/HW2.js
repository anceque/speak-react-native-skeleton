// @flow
import React from "react"
import { Text } from "react-native"

// data
import cats from "../../data/cats"

// components
import { ScrollableContainer, Title, Gallery } from "../components"

export default class HW2 extends React.PureComponent {
  static navigationOptions = () => ({
    title: "Homework 2",
  })

  navigateToDetail = cat => {
    this.props.navigation.navigate("CatDetail", { item: cat })
  }

  render() {
    return (
      <ScrollableContainer>
        <Title>Cats are meow</Title>
        <Text>A little tribute to cats</Text>

        <Gallery images={cats} onImagePress={this.navigateToDetail} />
      </ScrollableContainer>
    )
  }
}
