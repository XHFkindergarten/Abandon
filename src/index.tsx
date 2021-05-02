import React, { FC } from 'react'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '@/pages/Home'
import Other from '@/pages/Other'
import { RouteStackParamList } from './type'

const Stack = createStackNavigator<RouteStackParamList>()

const App: FC = () => {
  return (
    // <SafeAreaView>
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
          name="Other"
          component={Other}
          options={{
            title: '其他'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  )
}

export default App
