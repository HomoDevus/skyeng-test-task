import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import SearchController from './SearchController'

// Mock the handleSearchSubmit function
const mockHandleSearchSubmit = jest.fn()

describe('SearchController component', () => {
  beforeEach(() => {
    // Clear the mock function's call history before each test
    mockHandleSearchSubmit.mockClear()
  })

  test('renders SearchBar and SortOption components', () => {
    const sort = 0
    const setSort = jest.fn()
    const searchText = ''
    const setSearchText = jest.fn()

    render(
      <SearchController
        sort={sort}
        setSort={setSort}
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearchSubmit={mockHandleSearchSubmit}
      />,
    )

    // Check if SearchBar and SortOption components are rendered
    expect(screen.getByText('Search', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('Filters', { exact: false })).toBeInTheDocument()
  })

  test('calls handleSearchSubmit when search button is clicked', () => {
    const sort = 0
    const setSort = jest.fn()
    const searchText = 'test'
    const setSearchText = jest.fn()

    render(
      <SearchController
        sort={sort}
        setSort={setSort}
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearchSubmit={mockHandleSearchSubmit}
      />,
    )

    // Simulate clicking the search button
    fireEvent.click(screen.getByRole('button', { name: '🔍 Search' }))

    // Expect handleSearchSubmit to be called
    expect(mockHandleSearchSubmit).toHaveBeenCalled()
  })
})
