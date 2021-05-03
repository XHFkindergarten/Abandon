import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`

export const PageTitle = styled.Text`
  font-size: 40px;
  font-weight: 700;
`

export const SectionTitle = styled.Text`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
`

export const CalendarRow = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`

export const CalendarDot = styled.View<{ color: string }>`
  background-color: ${(props) => props.color || ''};
  height: 10px;
  width: 10px;
  border-radius: 5px;
  margin-right: 5px;
`
