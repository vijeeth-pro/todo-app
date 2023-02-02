import { View, Text } from 'react-native'
import React from 'react'
import { Todo } from './src/Screen/Todo'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}

export default App