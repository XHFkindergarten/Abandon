/**
 * common utils
 */
import { ObservableMap } from 'mobx'

/**
 * revert mobx map to object array
 * @param map mobx observable map
 * @returns value array
 */
export const mobxMap2Array = <T>(map: ObservableMap<string, T>): T[] =>
  Array.from(map.entries()).map(([_, v]) => v)
