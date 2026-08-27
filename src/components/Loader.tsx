import {ActivityIndicator,View,Text, StyleSheet} from 'react-native'
export default function Loader() {
  return (
    <View style={StyleSheet.container}>
        <view styles={StyleSheet.loderbox}>
            <ActivityIndicator size='large' />
            <Text styles={styles.text}>Loading...</Text>
        </view>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    loaderbox:{
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#eee',
        alignItems: 'center'
    },
    text:{
        marginTop: 10,
        fontSize: 16
    }
})