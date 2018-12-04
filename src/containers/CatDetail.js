// @flow
import * as React from "react"
import { Text, StyleSheet, View } from "react-native"

// components
import { Title, Image, Container } from "../components"
import { Metrics } from "../themes"

const styles = StyleSheet.create({
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  imageWrapper: {
    paddingVertical: Metrics.spacings.base,
    height: 287,
  },
})

export default class CatDetail extends React.Component {
  render() {
    const { item } = this.props.navigation.state.params
    return (
      <Container>
        <Title>{item.name}</Title>
        <Text>{item.age} old</Text>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{ uri: item.url }}
            resizeMode="cover"
          />
        </View>
      </Container>
    )
  }
}
