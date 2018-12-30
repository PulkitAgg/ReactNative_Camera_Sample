import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../components/Home.js';
import CameraRollScreen from '../components/CameraRoll';
import ImageCropScreen from '../components/ImageCrop';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  CameraRoll: {
    screen: CameraRollScreen
  },
  ImageCrop: {
    screen: ImageCropScreen
  }
}, {
  // initialRouteName: 'FirstDesignScreen',
  mode: 'card'
});

export default createAppContainer(AppNavigator);