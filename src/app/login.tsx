import {View,Text, Pressable,Button} from 'react-native'
import {router} from 'expo-router'
export default function login() {
  return (
    <View>
        <Text>Login Here</Text>

        <Pressable
        onPress={()=>alert('Pressed')}
        style={({pressed})=>({
            backgroundColor: pressed ? 'blue' : 'green',
            padding: 15
        })}
        >
            <Text style={{color: 
                'white', fontWeight: 'bold'}}>Login</Text>
        </Pressable>
        <Button 
        onPress={()=>router.push('/product')}
        title = "Go to Product"/>
        </View>
  )
}
