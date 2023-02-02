import { View, Text, Modal, TouchableWithoutFeedback, TextInput, Pressable, ActivityIndicator, ListRenderItemInfo } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../Style/Main';
import { baseApi } from '../helper/baseApi';

interface modals {
  popup: { status: boolean, title: string, editText: string, id: string },
  setPopup: React.Dispatch<React.SetStateAction<{ status: boolean, title: string, editText: string, id: string }>>
  setReFetch: React.Dispatch<React.SetStateAction<boolean>>
}

const AddText: React.FC<modals> = ({ popup, setPopup, setReFetch }) => {

  // console.log('popup', popup);

  const [textInput, setTextInput] = useState('')
  const [addTextLoading, setAddTextLoading] = useState(false)

  useEffect(() => {
    if (popup.title === 'Edit') {
      setTextInput(popup.editText)
    } else {
      setTextInput('')
    }
  }, [popup])

  const AddText = async () => {

    setAddTextLoading(true)
    let payload = {
      todo: textInput
    }
    const res = popup.title === 'Add' ? await baseApi.post('/todo', payload) : await baseApi.put(`/todo/${popup.id}`, payload)
    if (res.data.success === true) {
      setTextInput('')
      setReFetch(true)
      setPopup((pre: any) => ({
        ...pre,
        status: false
      }))
    }
    console.log('res', res);

    setAddTextLoading(false)

  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={popup.status}
      onRequestClose={() => setPopup((pre: any) => ({
        ...pre,
        status: false
      }))}>
      <TouchableWithoutFeedback onPress={() => setPopup((pre: any) => ({
        ...pre,
        status: false
      }))}>

        <View style={styles.modal}></View>
      </TouchableWithoutFeedback>
      <View style={styles.subModal}>


        <View>
          <Text style={styles.modalTitle}>{popup.title} List</Text>
          <View style={styles.textBoxs}>
            <TextInput style={styles.textInput} value={textInput} onChangeText={(text) => setTextInput(text)} />
            <Pressable style={[styles.addBtn, { opacity: textInput !== "" ? 1 : 0.5 }]} disabled={textInput === '' || addTextLoading}>
              {
                addTextLoading ?
                  <ActivityIndicator size={20} color="#ffffff" /> :

                  <Text style={styles.addBtnText} onPress={() => AddText()}>Add</Text>
              }
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddText;
