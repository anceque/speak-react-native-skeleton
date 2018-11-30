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
import HW1 from "./HW1"
import HW2 from "./HW2"
import HW3 from "./HW3"

const ContactNavigator = createStackNavigator({
  Address: { screen: ContactAddress },
  Map: { screen: ContactMap },
})

const ListNavigator = createStackNavigator({
  Root: { screen: RootContainer },
  Detail: { screen: Detail },
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
    initialRouteName: "Home",
  },
)

export default createAppContainer(Navigator)
