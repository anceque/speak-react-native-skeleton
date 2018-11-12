// @flow
import React from "react"
import { Image as RNImage } from "react-native"

type Props = {
  source: string | Object,
}

export default class Image extends React.PureComponent<Props> {
  render() {
    const { source } = this.props
    return <RNImage {...this.props} source={source} />
  }
}
