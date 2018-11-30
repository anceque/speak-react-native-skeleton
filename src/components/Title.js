// @flow
import React from "react"
import { StyleSheet, Text } from "react-native"
import Colors from "../themes/Colors"

const styles = StyleSheet.create({
  text: {
    color: Colors.textPrimary,
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 48,
  },
})

type Props = {
  children: any,
}

export default class Title extends React.PureComponent<Props> {
  render() {
    const { children } = this.props
    return <Text style={styles.text}>{children}</Text>
  }
}
