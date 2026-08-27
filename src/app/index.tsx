import IconsExample from '@/components/IconsExample';
import ModalExample from '@/components/ModalExample';
import { router } from 'expo-router';
import React from 'react';
import {StyleSheet,View, Text, Image, Button, Touchable, TouchableOpacity} from 'react-native'

export default function Index() {
  //function to increment,decrement,reset a count
  const [state, setState] = React.useState(0);

  const increment = () => {
    setState(state + 1);
  }

  const decrement = () => {
    setState(state - 1);
  }

  const reset = () => {
    setState(0);
  }
  return (
    <View style={styles.container}>
        <IconsExample />
        <ModalExample />
      <Button title="open Dashboard" color="orange"
      onPress = {()=>router.push('/dashboard')}
      />

      <View>
        <Text >Count is {state}</Text>
          <Button
    title="Increment"
    color="green"
    onPress={increment}
    />
      <Button
    title="Decrement"
    color="red"
    onPress={decrement}
    />
      <Button
    title="Reset"
    color="yellow"
    onPress={reset}
    />
      </View>

    <TouchableOpacity
    style={{backgroundColor: 'pink', padding: 10,
       borderRadius: 5, marginTop: 20}}
    onPress={()=>router.push('/login')}
    >
      <Text>Get Started</Text>
    </TouchableOpacity>

      <Text style={styles.textStyle}>Hello, World!</Text>

      <View style={{flex: 1, flexDirection: 'column',backgroundColor: 'blue', 
        justifyContent: 'space-evenly', alignItems: 'center'}}>
        <View>
        <Text style={{color: 'green',flex: 1}}>Welcome to React Native!</Text>
      </View>
      <View>
        <Text style={{color: 'white', flex: 2}}>Welcome to React Native!</Text>
      </View>
      <View>
        <Text style={{color: 'red', flex:3}}>Welcome to React Native!</Text>
      </View>

      <Image 
      style={{width: 200, height: 200, borderRadius: 100}}
      source={require('@/assets/logo/logo.jpg')} />

       <Image 
      style={{width: 200, height: 200, borderRadius: 100}}
      source={{uri: 'https://store-assets.teespring.com/storefronts/imgur-3/assets/bg_home_banner.png'}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    backgroundColor: 'green',

  },
  textStyle:{
    fontSize: 20,
    color: 'white',

  }
})