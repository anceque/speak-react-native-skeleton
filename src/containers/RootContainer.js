// @flow
import React from "react"
import { Text, StyleSheet } from "react-native"

// components
import { Title, Button, ScrollableContainer, Section } from "../components"

// styles
import { Metrics } from "../themes"

const styles = StyleSheet.create({
  button: {
    marginBottom: Metrics.spacings.base,
    marginTop: Metrics.spacings.medium,
  },
  section: {
    paddingHorizontal: Metrics.spacings.base,
  },
})

export default class RootContainer extends React.PureComponent {
  static navigationOptions = () => ({
    title: "Speak React Native course",
  })

  navigateToDetail = (detailName: string) => {
    this.props.navigation.navigate(detailName)
  }

  render() {
    return (
      <ScrollableContainer containerProps={{ stretched: true }}>
        <Section style={styles.section}>
          <Title>HW 1</Title>
          <Text>Create Title, Image, Button components</Text>
          <Button
            style={styles.button}
            onPress={() => this.navigateToDetail("HW1")}
          >
            Show
          </Button>
        </Section>
        <Section style={styles.section}>
          <Title>HW 2</Title>
          <Text>Create Flatlist and navigate to detail</Text>
          <Button
            style={styles.button}
            onPress={() => this.navigateToDetail("HW2")}
          >
            Show
          </Button>
        </Section>
        <Section style={styles.section}>
          <Title>HW 3</Title>
          <Text>Communicate with API to get movie details</Text>
          <Button
            style={styles.button}
            onPress={() => this.navigateToDetail("HW3")}
          >
            Show
          </Button>
        </Section>
      </ScrollableContainer>
    )
  }
}
