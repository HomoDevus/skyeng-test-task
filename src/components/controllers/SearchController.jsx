import { useCallback, useEffect, useState } from 'react'
import userSearchAPI from '../../api/userSearch'
import SearchBar from '../view/SearchBar/SearchBar'
import SortOption from '../view/SortOption/SortOption'

export default function SearchController({ setUsers }) {
  const [searchText, setSearchText] = useState('')
  const [sort, setSort] = useState(0) // 0: no sort; 1: ascending; -1: descending;

  const handleSearchSubmit = useCallback(() => {
    if (searchText.length >= 3) {
      const sortOption = sort === 1 || sort === -1 ? 'repositories' : ''
      const order = sort === 1 ? 'asc' : sort === -1 ? 'desc' : ''

      userSearchAPI
        .search(searchText, sortOption, order)
        .then(res => setUsers(res.data))
    }
  }, [searchText, sort, setUsers])

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
      <div>
        Filters: <SortOption sort={sort} setSort={setSort} />
      </div>
    </div>
  )
}
