import { act, screen, waitFor } from '@testing-library/react'
import { notify } from './notify' // Replace with the actual path to your module

jest.useFakeTimers()

test('Error renders on the page correcrly', async () => {
  const message = 'Test notification message'
  const level = 'error'

  const containerElement = document.createElement('div')
  containerElement.id = 'notifications-container'
  document.body.appendChild(containerElement)

  act(() => {
    notify(message, level)
  })

  await waitFor(() => {
    expect(screen.getByText(message, { exact: false })).toBeInTheDocument()
  })

  // Advance the timers to trigger the setTimeout callback
  jest.advanceTimersByTime(5000)

  await waitFor(() => {
    expect(screen.queryByText(message)).toBeNull()
  })
})
