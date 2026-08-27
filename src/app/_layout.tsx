import {Stack} from 'expo-router'

export default function Layout() {
  return (
  <Stack>
    <Stack.Screen
    name="index"
    options={{title: 'Home', headerShown: false}}
    />
    <Stack.Screen
    name="login"
    options={{title: 'Login', headerShown: false}}
    />
    <Stack.Screen
    name="product"
    options={{title: 'Products', headerShown: false}}
    />
  </Stack>
  )
}
  
