import { useState,useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function product() {
    //fetch data from server
    const [users,setUsers] = useState([]);
    const fetchUsers= async()=>{
        try {
            const response = await fetch(
        'https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchUsers();
    },[])
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Users List</Text>
        <ScrollView>
            {users.map((user)=>(
                <View key={user.id} style={styles.card}>
                    <Text>name: {user.name}</Text>
                    <Text>Email: {user.email}</Text>
                    <Text>UsrName: {user.username}</Text>
                    </View>
            ))}
        </ScrollView>
        
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    },
    title: {
    fontSize: 25,
    fontWeight:"bold",
    marginBottom: 15
    },
    card:{
        backgroundColor: '#731010',
        padding: 20,
        marginBottom: 10,
        borderRadius: 10
    }
})