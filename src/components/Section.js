// @flow
import * as React from "react"
import { StyleSheet, View } from "react-native"

// styles
import { Colors } from "../themes"

type ContainerProps = {
  children: React.Node,
  style?: StyleSheet.Styles,
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
})

export default class Section extends React.Component<ContainerProps> {
  render() {
    const { children, style } = this.props

    return <View style={[styles.wrapper, style]}>{children}</View>
  }
}
