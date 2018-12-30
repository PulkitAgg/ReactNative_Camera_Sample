import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../components/Home.js';
import CameraRollScreen from '../components/CameraRoll';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  CameraRoll: {
    screen: CameraRollScreen
  }
}, {
  // initialRouteName: 'FirstDesignScreen',
  mode: 'card'
});

export default createAppContainer(AppNavigator);