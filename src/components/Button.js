// @flow
import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#abc321",
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})

type Props = {|
  +onPress: () => void,
  +children: string,
  +theme: string,
|}

export default class Button extends React.PureComponent<Props> {
  render() {
    const { children, onPress, theme } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { backgroundColor: theme }]}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
    )
  }
}
