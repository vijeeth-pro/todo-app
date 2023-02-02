import { View, Text, Pressable, TouchableOpacity, FlatList, ListRenderItemInfo, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Style/Main'
import Edit from '../assets/Edit'
import Delete from '../assets/Delete'
import { GETALL } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import AddText from '../modal/AddText'
import { GetallList } from '../redux/action/apiCalls'
import { baseApi } from '../helper/baseApi'



const list = [
  {
    _id: "63d8e16a30600f453686e2b0",
    todo: "test10",
    date: "2023-01-31T09:37:46.006Z",
    __v: 0
  },
  {
    _id: "63d8e2e8b595021dfa4a11cc",
    todo: "test1",
    date: "2023-01-31T09:44:08.852Z",
    __v: 0
  }
]

const Todo = () => {

  const [popup, setPopup] = useState({
    status: false,
    title: 'Add',
    editText: '',
    id: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [reFetch, setReFetch] = useState(true)

  const { todo } = useSelector((state: any) => state.todo)
  const dispatch = useDispatch()

  // console.log('todoList', todo);


  useEffect(() => {
    const apiCall = async () => {
      setLoading(true)
      const res = await GetallList()
      if (res === false) {
        setError(true)
        setLoading(false)
      } else {
        dispatch({
          type: GETALL, payload: res
        })
        setError(false)
        setLoading(false)
        setReFetch(false)
      }
    }
    if (reFetch) {
      apiCall()
    }

  }, [reFetch])

  interface MyProps {
    data: ListRenderItemInfo<{ _id: string, todo: string, date: string, __v: number }>;
  }

  const Item: React.FC<MyProps> = ({ data }) => {

    const [editable, setEditable] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)

    const DeleteItem = async (id: string) => {
      setDeleteLoading(true)
      // console.log(id)
      const res = await baseApi.delete(`/todo/${id}`)
      console.log('res', res);

      if (res.data.sucess === true) {
        console.log('refetch')
        setReFetch(true)
      }
      setDeleteLoading(false)
    }

    return (
      <TouchableOpacity style={[styles.item, { backgroundColor: "white" }]} onPress={() => setEditable(!editable)}>
        <Text style={styles.todoText}>{data.item.todo}</Text>
        {editable && (
          <>
            <View style={styles.editMenu}>
              <Edit onPress={() => setPopup((pre: any) => ({
                status: true,
                title: 'Edit',
                editText: data.item.todo,
                id: data.item._id
              }))} style={{ marginRight: 20 }} />
              {
                deleteLoading
                  ? <ActivityIndicator size={22} style={{ marginRight: 26 }} />
                  : <Delete onPress={() => DeleteItem(data.item._id)} style={{ marginRight: 20 }} />
              }
            </View>
          </>
        )}
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.title}>Today Task</Text>
        <TouchableOpacity disabled={loading} style={[styles.bts, { opacity: loading ? 0.5 : 1 }]} onPress={() => setPopup((pre: any) => ({
          ...pre,
          status: true,
          title: 'Add'
        }))}>
          <Text style={styles.btnText}>Add List</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>

        {loading ?
          <ActivityIndicator size={30} /> :
          error ? <Text>NetWork Error</Text> : <FlatList
            data={todo}
            renderItem={(item) => <Item data={item} />}
            keyExtractor={item => item._id}
          />
        }


      </View>
      <AddText popup={popup} setPopup={setPopup} setReFetch={setReFetch} />
    </View>
  )
}

export { Todo }