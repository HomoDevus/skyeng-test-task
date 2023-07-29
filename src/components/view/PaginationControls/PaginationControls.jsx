import { useCallback, useMemo, useState } from 'react'
import {
  MAX_PAGES_TO_SHOW,
  MAX_SEARCH_ITEMS,
  PER_PAGE,
} from '../../../constants'
import { arrayOfN } from '../../../helpers'
import styles from './PaginationControls.module.css'

function PageButton({ pageNum, currentPage, setCurrentPage, onChange }) {
  return (
    <button
      className={`${styles.pageButton} ${
        currentPage === pageNum ? styles.activePage : ''
      }`}
      onClick={() => {
        onChange(pageNum)
        setCurrentPage(pageNum)
      }}
    >
      {pageNum}
    </button>
  )
}

export default function PaginationControls({ total, onChange }) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(Math.min(total, MAX_SEARCH_ITEMS) / PER_PAGE)
  const pageNumbers = useMemo(
    () => arrayOfN(totalPages, MAX_PAGES_TO_SHOW),
    [total],
  )

  const handlePrevClick = useCallback(() => {
    if (currentPage > 1) {
      onChange(currentPage - 1)
    }
  }, [onChange, currentPage])

  const handleNextClick = useCallback(() => {
    if (currentPage < totalPages) {
      onChange(currentPage + 1)
    }
  })

  if (pageNumbers.length === 0) {
    return null
  }

  return (
    <div className={styles.container}>
      <button className={styles.pageButton} onClick={handlePrevClick}>
        ◀
      </button>
      {pageNumbers.slice(0, MAX_PAGES_TO_SHOW).map(pageNum => (
        <PageButton
          key={pageNum}
          pageNum={pageNum}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onChange={onChange}
        />
      ))}
      {totalPages - 1 > MAX_PAGES_TO_SHOW && <div>...</div>}
      {totalPages > MAX_PAGES_TO_SHOW && (
        <PageButton
          key={totalPages}
          pageNum={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onChange={onChange}
        />
      )}
      <button className={styles.pageButton} onClick={handleNextClick}>
        ▶
      </button>
    </div>
  )
}
