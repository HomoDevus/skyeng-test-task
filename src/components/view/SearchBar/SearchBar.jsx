import { useState } from 'react'
import styles from './SearchBar.module.css'

export function SearchBar({ handleSearchSubmit }) {
  const [searchText, setSearchText] = useState('')

  return (
    <form id="searchForm" onSubmit={(e) => e.preventDefault()} className={styles.container}>
      <input
        type='text'
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        id='search'
      />
      <button type='submit' onClick={() => handleSearchSubmit(searchText)}>🔍 Search</button>
    </form>
  )
}
