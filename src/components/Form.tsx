import {View,Text,TextInput,Button,StyleSheet,Platform,KeyboardAvoidingView} from 'react-native'
export default function Form() {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <View style={styles.form}>
             <Text style={styles.title}>User Registration form</Text>
        <TextInput style={styles.input} placeholder='Enter your name'/>
        <TextInput style={styles.input} placeholder='Enter your email'/>
        <TextInput style={styles.input} placeholder='Enter your password' secureTextEntry/>
        <TextInput placeholder='Search...'
        style={{
            borderWidth:1,
            padding: 10,
            borderRadius: 88
        }}/>
        <Button title='Submit' onPress={()=>{
            alert('Form submitted')
        }}/>
        </View>
       
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        padding: 20
    },
    form: {
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#eee'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input:{
        borderWidth: 1,
        borderColor: "#aaa",
        padding: 10,
        marginBottom: 12, 
        borderRadius: 8

    }
})