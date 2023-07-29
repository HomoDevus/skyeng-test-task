import { useCallback, useState } from 'react'
import usersAPI from '../../../api/users'
import SearchController from '../../controllers/SearchController'
import UsersController from '../../controllers/UsersController'
import PaginationControls from '../../view/PaginationControls/PaginationControls'
import styles from './UsersSearchPage.module.css'

export default function UsersSearchPage() {
  const [users, setUsers] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [sort, setSort] = useState(0) // 0: no sort; 1: ascending; -1: descending;

  const handleSearchSubmit = useCallback(
    pageNum => {
      if (searchText.length >= 3) {
        const sortOption = sort === 1 || sort === -1 ? 'repositories' : ''
        const order = sort === 1 ? 'asc' : sort === -1 ? 'desc' : ''
        const page = typeof pageNum === 'number' ? pageNum : undefined

        usersAPI.search(searchText, sortOption, order, page).then(res => {
          if (res) {
            setUsers(res.data)
          }
        })
      }
    },
    [searchText, sort, setUsers],
  )

  return (
    <div className={styles.pageContainer}>
      <div className={styles.searchContainer}>
        <SearchController
          sort={sort}
          setSort={setSort}
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearchSubmit={handleSearchSubmit}
        />
      </div>
      <div className={styles.usersContainer}>
        <UsersController usersInfo={users?.items} />
        <PaginationControls
          onChange={handleSearchSubmit}
          total={users?.total_count}
        />
      </div>
    </div>
  )
}
