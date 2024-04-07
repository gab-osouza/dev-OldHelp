import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import Register from './src/pages/Register';

const Stack = createStackNavigator();


export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Group // tira a barra de cima e faz um grupo
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}