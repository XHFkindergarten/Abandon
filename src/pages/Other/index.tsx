import { OtherNavigationType, OtherRouteType } from '@/type'
import React, { FC, useEffect } from 'react'
import { Button, View, Text } from 'react-native'

import { objData, addAge, arrData, addArr } from './store'
import { Container, PageTitle, Row, StyledBtn, UserName } from './layout'
import { observer } from 'mobx-react'

interface Props {
  navigation: OtherNavigationType
  route: OtherRouteType
}

const Other: FC<Props> = ({ navigation, route }) => {
  const { name, age } = objData

  return (
    <Container>
      <PageTitle>用 Mobx 进行状态管理</PageTitle>

      <View>
        <UserName>
          {name}-{age}岁
        </UserName>
      </View>
      <StyledBtn title="增加年龄" onPress={addAge} />

      <Row>
        {arrData.map((item, index) => (
          <Text key={index} style={{ marginRight: 5 }}>
            {item.name}
          </Text>
        ))}
      </Row>

      <StyledBtn title="加一个人" onPress={addArr} />

      <Button
        title="返回"
        onPress={() => {
          navigation.goBack()
        }}
      />
    </Container>
  )
}

export default observer(Other)
