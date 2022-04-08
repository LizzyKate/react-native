import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ColorPallete from './screens/ColorPalette'
import Home from './screens/Home'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPallete" component={ColorPallete} options={({ route }) => ({ title: route.params.palleteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>


  )
}



export default App