import React from 'react';
import { createAppContainer,createStackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import AdminScreen from './src/screens/AdminScreen';
import EmployerScreen from './src/screens/EmployerScreen';
import StudentScreen from './src/screens/StudentScreen';
import AddJobScreen from './src/screens/AddJobScreen';


console.disableYellowBox = true;

const AuthStack = createStackNavigator({
  Employer:EmployerScreen,
  Register:RegisterScreen, 
   Home:HomeScreen,
   Admin:AdminScreen,

   Login: LoginScreen,
 
  Student:StudentScreen,
  AddJob:AddJobScreen,


 
  
 
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