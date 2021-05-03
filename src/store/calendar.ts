/**
 * calendar mobx store
 */
import { Calendar, CalendarEventReadable } from 'react-native-calendar-events'
import { action, autorun, computed, observable } from 'mobx'

/**
 * @observable
 * calendars
 */
export const calendars = observable.map(new Map<string, Calendar>())

/**
 * @action
 * add a calendar to observable map
 */
export const addCalendar = action((item: Calendar) => {
  if (item.id) {
    calendars.set(item.id, item)
  }
})

/**
 * @action
 * remove a calendar from observable map
 */
export const removeCalendar = action((id: string) => {
  if (id) {
    calendars.delete(id)
  }
})

/**
 * @observable
 */
export const activeCalendar = observable.box<string | null>(null)

/**
 * @computed
 */
export const activeCalendarInfo = computed<Calendar | null>(() => {
  const activeId = activeCalendar.get()
  if (activeId !== null && calendars.has(activeId)) {
    return calendars.get(activeId)!
  } else {
    return null
  }
})

/**
 * @observable
 */
export let calendarEvents = observable.box<CalendarEventReadable[]>([])
/**
 * @action
 */
export const updateCalendarEvents = action(
  (events: CalendarEventReadable[]) => {
    calendarEvents.set(events)
  }
)

/**
 * @action
 */
export const updateActiveCalendar = action((value: string) => {
  activeCalendar.set(value)
})
