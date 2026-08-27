import { Text, View,FlatList } from 'react-native'

export default function Profile() {
  const users =[
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"},
    {id: 4, name: "David"},
    {id: 5, name: "cj"},
    {id: 6, name: "mario"},
    {id: 7, name: "annah"},
    {id: 8, name: "Eve"},
  ]
    return (
      <FlatList
        data={users}
        horizontal
        keyExtractor={(user)=>user.id}
        renderItem={({item})=>(
          <View style={{margin: 10, padding: 10, backgroundColor: 'lightgray'}}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    )
  }

