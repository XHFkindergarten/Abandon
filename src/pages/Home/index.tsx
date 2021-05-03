import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { View, Button, Text, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import {
  updateCalendar,
  delCalendar,
  queryEvents,
  updateEvent,
  delEvent
} from '@/native/Calendar'
import { Calendar } from '@/native/Calendar/type'
import {
  activeCalendar,
  activeCalendarInfo,
  calendarEvents,
  calendars,
  updateActiveCalendar
} from '@/store/calendar'
import { HomeNavigationType, HomeRouteType } from '@/type'
import { mobxMap2Array } from '@/utils'
import {
  CalendarDot,
  CalendarRow,
  Container,
  PageTitle,
  SectionTitle
} from './layout'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  navigation: HomeNavigationType
  route: HomeRouteType
}

const Home: FC<Props> = ({ navigation, route }) => {
  const calendarArr = mobxMap2Array<Calendar>(calendars)

  const activeCalendarId = activeCalendar.get()

  const calendarInfo = activeCalendarInfo.get()

  const eventsArr = calendarEvents.get().slice()

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <PageTitle>AbandonList</PageTitle>
          <View style={{ marginTop: 50, marginBottom: 50 }}>
            <SectionTitle>Calendar</SectionTitle>
            {calendarArr.map((calendar) => {
              return <CalendarItem key={calendar.id} data={calendar} />
            })}
          </View>
          <Button
            title="add a calendar"
            onPress={() => {
              updateCalendar()
            }}
          />

          {calendarInfo === null ? null : (
            <View>
              <Text
                style={{
                  fontSize: 24
                }}
              >
                title: {calendarInfo.title}
              </Text>
            </View>
          )}
          {eventsArr.length > 0 &&
            eventsArr.map((item) => {
              return (
                <View style={{ flexDirection: 'row' }} key={item.id}>
                  <Text>Event: {item.title}</Text>
                  <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => {
                      delEvent(item.id).then((res) => {
                        if (res && activeCalendarId !== null) {
                          queryEvents(activeCalendarId)
                        }
                      })
                    }}
                  >
                    <Text>删除</Text>
                  </TouchableOpacity>
                </View>
              )
            })}
          <View
            style={{
              marginTop: 50
            }}
          >
            <Button
              title="add a event for current calendar"
              onPress={() => {
                if (activeCalendarId !== null) {
                  updateEvent(activeCalendarId).then((res) => {
                    if (res && activeCalendarId !== null) {
                      queryEvents(activeCalendarId)
                    }
                  })
                }
              }}
            />
          </View>
          <View
            style={{
              marginTop: 50
            }}
          >
            <Button
              title="Mobx 页面"
              onPress={() => {
                navigation.navigate('Mobx')
              }}
            />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

const CalendarItem: FC<{ data: Calendar }> = ({ data }) => {
  const { color, title, id } = data

  return (
    <CalendarRow>
      <TouchableOpacity
        onPress={() => {
          queryEvents(id)
          updateActiveCalendar(id)
        }}
        style={{
          flexDirection: 'row'
        }}
      >
        <CalendarDot color={color} />
        <Text>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          delCalendar(id)
        }}
      >
        <Text style={{ marginLeft: 10 }}>删除</Text>
      </TouchableOpacity>
    </CalendarRow>
  )
}

export default observer(Home)
