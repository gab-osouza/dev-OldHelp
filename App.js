import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Name from './src/pages/Name';
import Home from './src/pages/Home';

const Stack = createStackNavigator();

export default function App() {
  const fontsLoaded = useFonts({
    'PlusJakartaSans': require('./src/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
  });
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Group // tira a barra de cima e faz um grupo
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Name' component={Name}/>
          <Stack.Screen options={{statusBarStyle: 'light', statusBarColor: 'light' }}  name='Home' component={Home}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


