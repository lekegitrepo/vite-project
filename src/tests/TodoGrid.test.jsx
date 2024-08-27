import { fireEvent, render, screen } from '@testing-library/react'
import TodoGrid from '../TodoGrid'

test('render TodoGrid with it component', () => {
  render(<TodoGrid />)

  const description = screen.getByPlaceholderText('Description')
  const date = screen.getByPlaceholderText('Date')
  const status = screen.getByPlaceholderText('Status')
  const addButton = screen.getByText('Add')

  expect(description).toBeInTheDocument()
  expect(date).toBeInTheDocument()
  expect(status).toBeInTheDocument()
  expect(addButton).toBeInTheDocument()
})

test('add todo', () => {
  render(<TodoGrid />)

  const description = screen.getByPlaceholderText('Description')
  fireEvent.change(description, {
    target: { value: 'Complete my daily reading' },
  })
  const date = screen.getByPlaceholderText('Date')
  fireEvent.change(date, { target: { value: '07-08-2024' } })
  const status = screen.getByPlaceholderText('Status')
  fireEvent.change(status, { target: { value: 'Not Started' } })

  const button = screen.getByText('Add')
  fireEvent.click(button)

  const descGrid = screen.getByRole('gridcell', {
    name: 'Complete my daily reading',
  })
  expect(descGrid).toHaveTextContent('Complete my daily reading')
})

test('clear all todos', () => {
  render(<TodoGrid />)

  const description = screen.getByPlaceholderText('Description')
  fireEvent.change(description, {
    target: { value: 'Complete my daily reading' },
  })
  const date = screen.getByPlaceholderText('Date')
  fireEvent.change(date, { target: { value: '07-08-2024' } })
  const status = screen.getByPlaceholderText('Status')
  fireEvent.change(status, { target: { value: 'Not Started' } })

  const addButton = screen.getByText('Add')
  fireEvent.click(addButton)

  const descGrid = screen.getByRole('gridcell', {
    name: 'Complete my daily reading',
  })
  expect(descGrid).toHaveTextContent('Complete my daily reading')

  const removeButton = screen.getByText('Clear All')
  fireEvent.click(removeButton)
  const txt = screen.queryByText('Complete my daily reading')

  expect(txt).toBeNull()
  expect(txt).not.toBeInTheDocument()
})
