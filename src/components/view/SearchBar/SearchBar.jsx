import Button from '../../common/Button/Button'
import styles from './SearchBar.module.css'

export default function SearchBar({ handleSearchSubmit, ...inputProps }) {
  return (
    <form
      className={styles.searchContainer}
      id='searchForm'
      onSubmit={e => e.preventDefault()}
    >
      <input className={styles.input} type='text' id='search' {...inputProps} />
      <Button
        styleType={'secondary'}
        className={styles.searchButton}
        type='submit'
        onClick={handleSearchSubmit}
      >
        🔍 Search
      </Button>
    </form>
  )
}
