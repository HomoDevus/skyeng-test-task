import { useEffect, useState } from 'react'
import userSearchAPI from '../../api/userSearch'
import { SearchBar } from '../view/SearchBar/SearchBar'

export default function SearchController({ setUsers }) {
  const [searchText, setSearchText] = useState('')
  const [sort, setSort] = useState(0) // 0: no sort; 1: ascending; -1: descending;

  function handleSearchSubmit(searchText) {
    if (searchText.length >= 3) {
      const sortOption = sort == 1 || sort == -1 ? 'repositories' : ''
      const order = sort == 1 ? 'asc' : sort == -1 ? 'desc' : ''

      userSearchAPI
        .search(searchText, sortOption, order)
        .then(res => setUsers(res.data))
    }
  }

  // useEffect(() => {
  //   handleSearchSubmit(searchText)
  // }, [sort])

  return (
    <div>
      <SearchBar
        handleSearchSubmit={handleSearchSubmit}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {/* <SortOption setSort={setSort} /> */}
    </div>
  )
}
