// @flow
import * as React from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"

// styles
import { Colors, Metrics } from "../themes"

type ContainerProps = {
  children: React.Node,
}

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Metrics.spacings.base,
    paddingTop: Metrics.spacings.large,
  },
})

export default class Detail extends React.Component<ContainerProps> {
  render() {
    const { children } = this.props

    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={styles.container}>{children}</View>
      </SafeAreaView>
    )
  }
}
