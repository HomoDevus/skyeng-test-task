import { useEffect, useState } from 'react'
import SearchBar from '../view/SearchBar/SearchBar'
import SortOption from '../view/SortOption/SortOption'

export default function SearchController({
  sort,
  setSort,
  searchText,
  setSearchText,
  handleSearchSubmit,
}) {
  const [isSearchClicked, setIsSearchClicked] = useState(false) // Preventing search on sort toggle before search button was clicked

  useEffect(() => {
    if (isSearchClicked) {
      handleSearchSubmit()
    }
  }, [sort, handleSearchSubmit])

  return (
    <div>
      <SearchBar
        handleSearchSubmit={() => {
          handleSearchSubmit()
          setIsSearchClicked(true)
        }}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <SortOption sort={sort} setSort={setSort} isFirstChild={true} />
    </div>
  )
}
