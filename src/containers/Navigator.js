// @flow
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation"
import RootContainer from "./RootContainer"
import ContactAddress from "./ContactAddress"
import ContactMap from "./ContactMap"
import Detail from "./Detail"

const ContactNavigator = createStackNavigator({
  Address: { screen: ContactAddress },
  Map: { screen: ContactMap },
})

const ListNavigator = createStackNavigator({
  Root: { screen: RootContainer },
  Detail: { screen: Detail },
})

const Navigator = createBottomTabNavigator(
  {
    Home: ListNavigator,
    Contact: ContactNavigator,
  },
  {
    initialRouteName: "Home",
  },
)

export default createAppContainer(Navigator)
