import {View,Text,StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
export default function IconsExample() {
  return (
    <View style={styles.container}>
        <Ionicons name='home' size={40} color='blue' />
        <Text style={styles.text}>Welcome to my App</Text>
        <Ionicons name='heart' size={40} color='red' />
        <Ionicons name='settings' size={40} color='gray'/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, justifyContent: 'center', 
        alignItems: 'center', gap:20
    },text:{
        fontSize: 20 , fontWeight: 'bold'
    }
})
