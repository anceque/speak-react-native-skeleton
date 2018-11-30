// @flow
import * as React from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"

// styles
import { Colors, Metrics } from "../themes"

export type ContainerProps = {
  children: React.Node,
  stretched?: boolean,
}

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Metrics.spacings.base,
    paddingTop: Metrics.spacings.base,
  },
  containerStretched: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
})

export default class Detail extends React.Component<ContainerProps> {
  render() {
    const { children, stretched } = this.props

    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View
          style={[styles.container, stretched ? styles.containerStretched : {}]}
        >
          {children}
        </View>
      </SafeAreaView>
    )
  }
}
