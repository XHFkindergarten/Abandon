/**
 * @format
 */
import React from 'react'
import 'react-native'
// Note: test renderer must be required after react-native.
import { render, fireEvent } from '@testing-library/react-native'

import Home from '@/pages/Home/index'

it('renders correctly', () => {
  const { getByText } = render(
    <Home navigation={{} as any} route={{} as any} />
  )

  const title = getByText('AbandonList')

  expect(title).toBeTruthy()
})
