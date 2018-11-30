// @flow
import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

// styles
import { Colors, Metrics } from "../themes"

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Colors.secondary,
    height: Metrics.buttons.heights.base,
    justifyContent: "center",
    paddingHorizontal: Metrics.spacings.base,
    paddingVertical: Metrics.spacings.medium,
  },
  buttonText: {
    color: Colors.background,
    fontWeight: "bold",
  },
})

type Props = {
  onPress: () => void,
  children: string,
  style?: StyleSheet.Styles,
  theme?: string,
  textTheme?: string,
}

export default class Button extends React.PureComponent<Props> {
  render() {
    const { children, onPress, textTheme, theme, style } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, theme ? { backgroundColor: theme } : {}, style]}
      >
        <Text
          style={[styles.buttonText, textTheme ? { color: textTheme } : {}]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    )
  }
}
