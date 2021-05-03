import React, { FC, useEffect } from 'react'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '@/pages/Home'
import Mobx from '@/pages/Mobx'
import { RouteStackParamList } from './type'
import { useCalendar } from '@/native/Calendar'
import { ScrollView } from 'react-native'

const Stack = createStackNavigator<RouteStackParamList>()

const App: FC = () => {
  // init calendar permission
  useCalendar()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '首页'
          }}
        />
        <Stack.Screen
          name="Mobx"
          component={Mobx}
          options={{
            title: '其他'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
