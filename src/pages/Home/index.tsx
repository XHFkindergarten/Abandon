import { HomeNavigationType, HomeRouteType } from '@/type'
import * as React from 'react'
import { FC } from 'react'
import { Button } from 'react-native'
import { Container, PageTitle } from './layout'

interface Props {
  navigation: HomeNavigationType
  route: HomeRouteType
}

const Home: FC<Props> = ({ navigation, route }) => {
  return (
    <Container>
      <PageTitle>AbandonList</PageTitle>
      <Button
        title="跳转页面"
        onPress={() => {
          navigation.navigate('Other')
        }}
      />
    </Container>
  )
}

export default Home
