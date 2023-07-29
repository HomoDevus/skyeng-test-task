import styles from './SortOption.module.css'

export default function SortOption({ sort, setSort }) {
  function handleSortClick() {
    setSort(prev => (prev < 1 ? prev + 1 : -1))
  }

  return (
    <button className={styles.button} onClick={handleSortClick}>
      repositories amount{sort === 1 ? ' ▲' : sort === -1 ? ' ▼' : ''}
    </button>
  )
}
