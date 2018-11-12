// @flow
import React from "react"
import { Text, SafeAreaView, StyleSheet, View } from "react-native"

// components
import { Title, Button, Image } from "../components"
import { Colors } from "../themes"

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  imageWrapper: {
    paddingVertical: 20,
    height: 287,
  },
  buttons: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
})

export default class RootContainer extends React.PureComponent<null> {
  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={styles.container}>
          <Title>Cats are meow</Title>
          <Text>A little tribute to cats</Text>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={{ uri: "https://placekitten.com/408/287" }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.buttons}>
            <Button theme={Colors.primary} onPress={() => null}>
              Click for more cats
            </Button>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
