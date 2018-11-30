// @flow
import React from "react"
import { Text, StyleSheet, View } from "react-native"

// components
import { ScrollableContainer, Title, Button, Image } from "../components"

// styles
import { Metrics } from "../themes"

const styles = StyleSheet.create({
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  imageWrapper: {
    height: Metrics.images.small,
    flex: 1,
    marginTop: Metrics.spacings.medium,
  },
})

export default class HW1 extends React.PureComponent {
  static navigationOptions = () => ({
    title: "Homework 1",
  })

  render() {
    return (
      <ScrollableContainer>
        <Title>Cats are meow</Title>
        <Text>A little tribute to cats</Text>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{ uri: "https://placekitten.com/300/200" }}
            resizeMode="cover"
          />
        </View>

        <Button onPress={() => alert("Oh wow you pressed me")}>
          Hey, over here
        </Button>
      </ScrollableContainer>
    )
  }
}
