import * as React from "react"
import { Text, StyleSheet, View } from "react-native"

// data
import { loadMovieDetail } from "../../data/api"

// components
import { Title, Image, Container } from "../components"
import { Metrics } from "../themes"

const styles = StyleSheet.create({
  // image: {
  //   height: undefined,
  //   width: undefined,
  //   flex: 1,
  // },
  // imageWrapper: {
  //   paddingVertical: Metrics.spacings.base,
  //   height: 287,
  // },
})

export default class MovieDetail extends React.Component {
  state = {
    movie: {},
  }

  componentDidMount() {
    loadMovieDetail(this.getMovieId()).then(response => {
      this.setState({
        movie: response.data,
      })
    })
  }

  getMovieId = () => this.props.navigation.state.params.id

  render() {
    const { movie } = this.state
    return (
      <Container>
        <Title>{movie.title}</Title>
        <Text>This should be a movie detail</Text>
      </Container>
    )
  }
}
