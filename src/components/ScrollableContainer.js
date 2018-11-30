// @flow
import * as React from "react"
import { ScrollView } from "react-native"

// components
import { Container } from "."
import type { ContainerProps } from "./Container"

type ScrollableContainerProps = {
  children: React.Node,
  containerProps?: ContainerProps,
}

export default class Detail extends React.Component<ScrollableContainerProps> {
  render() {
    const { children, containerProps } = this.props

    return (
      <ScrollView>
        <Container {...containerProps}>{children}</Container>
      </ScrollView>
    )
  }
}
