// @flow
import React from "react"
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native"

// styles
import { Metrics } from "../themes"

type GalleryProps = {
  images: Array<Object>, // @TODO: add better type
  onImagePress: () => void,
}

const styles = StyleSheet.create({
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  imageWrapper: {
    height: Metrics.images.small,
    flex: 1,
  },
  images: {
    paddingVertical: Metrics.spacings.base,
  },
})

export default class Gallery extends React.Component<GalleryProps> {
  renderGalleryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.imageWrapper}
      onPress={() => this.props.onImagePress(item)}
    >
      <Image
        style={styles.image}
        source={{ uri: item.url }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  )

  render() {
    const { images } = this.props

    return (
      <View style={styles.images}>
        <FlatList
          data={images}
          keyExtractor={image => image.id}
          renderItem={this.renderGalleryItem}
          numColumns={2}
        />
      </View>
    )
  }
}
