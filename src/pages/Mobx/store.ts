import { action, observable } from 'mobx'

/**
 * Home Store
 */
export const objData = observable<{ name: string; age: number }>({
  name: '张晓欣',
  age: 24
})

export const addAge = action(() => {
  objData.age++
})

export const arrData = observable.array<{ name: string }>([
  {
    name: '李肇康'
  },
  {
    name: '方广'
  },
  {
    name: '张晓欣'
  }
])

export const addArr = action<() => void>(() => {
  arrData.push({
    name: '郑思维'
  })
})

export default {
  objData,
  addAge,
  arrData,
  addArr
}
