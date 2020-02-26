import React from 'react';
import { createAppContainer,createStackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';


console.disableYellowBox = true;

const AuthStack = createStackNavigator({
  
  Home:HomeScreen,
  
  Register:RegisterScreen,
  Login: LoginScreen,


 
  
 
},
  (navigationOptions = {
      headerMode: "none"
  })
);
const AppNavigator = createAppContainer(AuthStack)

const App = ()=> {
  
    
    return (
      
        <AppNavigator />
      
    );
  
}
export default App;