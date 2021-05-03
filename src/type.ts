/**
 * common type file
 */

import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

// 约束路由的参数类型
export type RouteStackParamList = {
  Home: undefined
  Mobx: undefined
}

// 路由被注入的 navigation 类型
export type HomeNavigationType = StackNavigationProp<
  RouteStackParamList,
  'Home'
>
// 路由被注入的 route 类型
export type HomeRouteType = RouteProp<RouteStackParamList, 'Home'>

export type OtherNavigationType = StackNavigationProp<
  RouteStackParamList,
  'Mobx'
>
export type OtherRouteType = RouteProp<RouteStackParamList, 'Mobx'>
