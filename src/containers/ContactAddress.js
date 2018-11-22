// @flow
import React from "react"
import { Text, StyleSheet, View } from "react-native"

// components
import { Title, Container, Image } from "../components"

// styles
import { Metrics } from "../themes"

const styles = StyleSheet.create({
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  imageWrapper: {
    height: Metrics.images.large,
    paddingVertical: Metrics.spacings.base,
  },
})

class ContactAddress extends React.Component {
  static navigationOptions = { title: "Contact information" }

  render() {
    return (
      <Container>
        <Title>Address</Title>
        <Text>Somewhere in the box</Text>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{ uri: "https://i.ytimg.com/vi/0BZ_s-Lix20/hqdefault.jpg" }}
            resizeMode="cover"
          />
        </View>
      </Container>
    )
  }
}

export default ContactAddress
