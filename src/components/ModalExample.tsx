import { Text, View,Modal, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import {Ionicons} from '@expo/vector-icons'
export default function ModalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <TouchableOpacity
      onPress={()=>setShowModal(true)}>
        <Ionicons name='add-circle' size={40} color='blue'/>
      </TouchableOpacity>
    <Modal visible={showModal} transparent>
      <View>
        <Text>Hello! This is a Pop up</Text>
        <TouchableOpacity
        onPress={()=>setShowModal(false)}>
        <Ionicons name='close-circle' size={40} color='red'/>
        </TouchableOpacity>
      </View>
    </Modal>
      </View>
    )
  }
