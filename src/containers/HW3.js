import React from "react"
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { Ionicons as Icons } from "@expo/vector-icons"

// data
import { loadLatestMovie, loadTopRatedMovies } from "../../data/api"

// components
import { ScrollableContainer, Title, Section, Button } from "../components"

// styles
import { Metrics, Colors } from "../themes"

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
  },
  section: {
    borderBottomWidth: 0,
    // paddingVertical: Metrics.spacings.medium,
    marginBottom: Metrics.spacings.base,
    marginTop: Metrics.spacings.medium,
  },
  movieItem: {
    alignItems: "center",
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: Metrics.buttons.heights.base,
  },
})

export default class HW3 extends React.PureComponent {
  static navigationOptions = () => ({
    title: "Homework 3",
  })

  state = { latestMovies: {}, topRatedMovies: [] }

  componentDidMount() {
    loadLatestMovie().then(response => {
      this.setState({
        latestMovies: response.data,
      })
    })
    loadTopRatedMovies().then(response => {
      this.setState({
        topRatedMovies: response.data.results,
      })
    })
  }

  navigateToDetail = ({ item }) => {
    this.props.navigation.navigate("MovieDetail", { id: item.id })
  }

  renderMovieItem = ({ item }) => (
    <TouchableOpacity
      style={styles.movieItem}
      onPress={() => this.navigateToDetail({ item })}
    >
      <Text style={styles.text}>{item.title}</Text>
      <Icons name="ios-arrow-forward" size={32} color={Colors.secondary} />
    </TouchableOpacity>
  )

  render() {
    const { latestMovies, topRatedMovies } = this.state
    return (
      <ScrollableContainer>
        <Title>Movies</Title>
        <Section style={styles.section}>
          <Text style={styles.subtitle}>This is the latest movie:</Text>
          <Text>{latestMovies.title}</Text>
        </Section>
        <Section style={styles.section}>
          <Text style={styles.subtitle}>Top rated movies:</Text>
          <FlatList
            data={topRatedMovies}
            keyExtractor={(item, index) => `item-${index}`}
            renderItem={this.renderMovieItem}
          />
        </Section>
        <Button onPress={this.navigateToDetail}>
          Show me static movie detail
        </Button>
      </ScrollableContainer>
    )
  }
}
