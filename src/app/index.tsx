import {StyleSheet,View, Text, Image, Button} from 'react-native'

export default function Index() {
  return (
    <View style={styles.container}>

    <Button
    title="Submit"
    color="green"
    onPress={()=> alert('Button Pressed!')}
    />

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