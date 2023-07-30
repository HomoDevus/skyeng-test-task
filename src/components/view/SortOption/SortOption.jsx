import styles from './SortOption.module.css'

export default function SortOption({ sort, setSort, isFirstChild = false }) {
  function handleSortClick() {
    setSort(prev => (prev < 1 ? prev + 1 : -1))
  }

  return (
    <div className={styles.container}>
      {isFirstChild && 'Filters: '}
      <button className={styles.button} onClick={handleSortClick}>
        repositories amount
      </button>
      {sort === 1 ? ' ▲' : sort === -1 ? ' ▼' : ''}
    </div>
  )
}
