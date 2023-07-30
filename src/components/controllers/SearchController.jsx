import { useEffect } from 'react'
import SearchBar from '../view/SearchBar/SearchBar'
import SortOption from '../view/SortOption/SortOption'

export default function SearchController({
  sort,
  setSort,
  searchText,
  setSearchText,
  handleSearchSubmit,
}) {
  useEffect(() => {
    handleSearchSubmit()
  }, [sort])

  return (
    <div>
      <SearchBar
        handleSearchSubmit={handleSearchSubmit}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <SortOption sort={sort} setSort={setSort} isFirstChild={true} />
    </div>
  )
}
