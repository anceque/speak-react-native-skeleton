// @flow
import React from "react"

// containers
import Navigator from "./src/containers/Navigator"

export default class App extends React.PureComponent {
  render() {
    const { navigation } = this.props

    return <Navigator navigation={navigation} />
  }
}
