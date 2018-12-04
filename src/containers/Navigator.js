// @flow
import React from "react"
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation"
import { Ionicons } from "@expo/vector-icons"

import RootContainer from "./RootContainer"
import ContactAddress from "./ContactAddress"
import ContactMap from "./ContactMap"
import CatDetail from "./CatDetail"
import MovieDetail from "./MovieDetail"
import HW1 from "./HW1"
import HW2 from "./HW2"
import HW3 from "./HW3"

import { Colors } from "../themes"

const ContactNavigator = createStackNavigator({
  Address: { screen: ContactAddress },
  Map: { screen: ContactMap },
})

const ListNavigator = createStackNavigator({
  Root: { screen: RootContainer },
  CatDetail: { screen: CatDetail },
  MovieDetail: { screen: MovieDetail },
  HW1: { screen: HW1 },
  HW2: { screen: HW2 },
  HW3: { screen: HW3 },
})

const Navigator = createBottomTabNavigator(
  {
    Home: ListNavigator,
    Contact: ContactNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === "Home") {
          iconName = `ios-apps${focused ? "" : "-outline"}`
        } else if (routeName === "Contact") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={32} color={tintColor} />
      },
    }),
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: Colors.primary,
    },
  },
)

export default createAppContainer(Navigator)
