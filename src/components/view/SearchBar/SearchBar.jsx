import styles from './SearchBar.module.css'

export function SearchBar({ handleSearchSubmit, searchText, setSearchText }) {
  return (
    <form
      className={styles.searchContainer}
      id='searchForm'
      onSubmit={e => e.preventDefault()}
    >
      <input
        className={styles.input}
        type='text'
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        id='search'
      />
      <button
        className={styles.searchButton}
        type='submit'
        onClick={() => handleSearchSubmit(searchText)}
      >
        🔍 Search
      </button>
    </form>
  )
}
