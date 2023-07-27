import { useState } from 'react'
import SearchController from '../../controllers/SearchController'
import UsersController from '../../controllers/UsersController'
import styles from './UsersSearchPage.module.css'

export default function UsersSearchPage() {
  const [users, setUsers] = useState(null)

  return (
    <div className={styles.pageContainer}>
      <div className={styles.searchContainer}>
        <SearchController setUsers={setUsers} />
      </div>
      <div className={styles.usersContainer}>
        <UsersController usersInfo={users?.items} />
      </div>
    </div>
  )
}
