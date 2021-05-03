/**
 * native calendar abilities
 */
import {
  activeCalendar,
  addCalendar,
  removeCalendar,
  updateCalendarEvents
} from '@/store/calendar'
import { useEffect } from 'react'
import { Alert } from 'react-native'
import NativeCalendar, {
  AuthorizationStatus,
  CalendarOptions,
  Options as SaveEventOptions
} from 'react-native-calendar-events'
import { AuthStatusEnum } from './type'

/**
 * initial calendar hook
 */
export const useCalendar = () => {
  useEffect(() => {
    checkCalendarPermission().then(async (authStatus) => {
      let finalStatus = authStatus
      switch (authStatus) {
        case AuthStatusEnum.undetermined: {
          finalStatus = await requestCalendarPermission()
          break
        }
        case AuthStatusEnum.denied: {
          finalStatus = await requestCalendarPermission()
          break
        }
        default:
      }

      if (finalStatus !== AuthStatusEnum.authorized) {
        // no permission
        // @TODO Modal a tip asking for permission

        return
      }
      findCalendars()
    })
  }, [])
}

/**
 * create or update a calendar
 */
type CalendarID = string
// test calendar data
const tempCalendarData: CalendarOptions = {
  title: 'test calendar',
  color: '#FFF',
  entityType: 'event',
  name: 'test calendar',
  accessLevel: 'root',
  ownerAccount: 'AbandonList',
  source: {
    name: 'Abandon',
    type: 'app'
  }
}
export const updateCalendar = async (): Promise<CalendarID> => {
  const id = await NativeCalendar.saveCalendar(tempCalendarData)
  findCalendars()
  return id
}

/**
 * find all calendars
 */
const findCalendars = async () => {
  const calendars = await NativeCalendar.findCalendars()
  for (let calendar of calendars) {
    addCalendar(calendar)
  }
}

/**
 * check if user allow calendar permission
 */
const checkCalendarPermission = async (): Promise<AuthorizationStatus> => {
  return NativeCalendar.checkPermissions()
}

/**
 * request for calendar permission
 */
const requestCalendarPermission = async (): Promise<AuthorizationStatus> => {
  return NativeCalendar.requestPermissions()
}

/**
 * delete a calendar
 */
export const delCalendar = async (id: string): Promise<boolean> => {
  const delResult = await NativeCalendar.removeCalendar(id)
  if (delResult) {
    removeCalendar(id)
  }
  return delResult
}

/**
 * query events of a calendar
 */
export const queryEvents = async (calendarId?: CalendarID): Promise<void> => {
  const events = await NativeCalendar.fetchAllEvents(
    new Date('2021-01-01').toISOString(),
    new Date('2022-01-01').toISOString(),
    [calendarId || activeCalendar.get()!]
  )
  updateCalendarEvents(events)
}

/**
 * save or create event
 */
const tempEventTitle = '测试事件名称'
type EventId = string
export const updateEvent = async (calendarId: CalendarID): Promise<EventId> => {
  const eventId = await NativeCalendar.saveEvent(tempEventTitle, {
    startDate: new Date().toISOString(),
    endDate: new Date('2021-08-01').toISOString(),
    calendarId
  })
  return eventId
}

/**
 * remove event
 */
export const delEvent = async (eventId: EventId): Promise<boolean> => {
  const delResult = await NativeCalendar.removeEvent(eventId)
  return delResult
}
