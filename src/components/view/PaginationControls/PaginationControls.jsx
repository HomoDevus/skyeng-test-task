import { useCallback, useMemo } from 'react'
import {
  MAX_PAGES_TO_SHOW,
  MAX_SEARCH_ITEMS,
  PER_PAGE,
} from '../../../constants'
import { arrayOfN } from '../../../helpers'
import Button from '../../common/Button/Button'
import styles from './PaginationControls.module.css'

function PageButton({ pageNum, currentPage, setCurrentPage, onChange }) {
  const isActivePage = currentPage === pageNum

  return (
    <Button
      styleType={isActivePage ? 'primary' : 'outlined'}
      className={styles.pageButton}
      onClick={() => {
        onChange(pageNum)
        setCurrentPage(pageNum)
      }}
    >
      {pageNum}
    </Button>
  )
}

export default function PaginationControls({ total, onChange, page, setPage }) {
  const totalPages = Math.ceil(Math.min(total, MAX_SEARCH_ITEMS) / PER_PAGE)
  const pageNumbers = useMemo(
    () => arrayOfN(totalPages, MAX_PAGES_TO_SHOW),
    [totalPages],
  )

  const handlePrevClick = useCallback(() => {
    if (page > 1) {
      onChange(page - 1)
    }
  }, [onChange, page])

  const handleNextClick = useCallback(() => {
    if (page < totalPages) {
      onChange(page + 1)
    }
  }, [page, totalPages, onChange])

  if (pageNumbers.length === 0) {
    return null
  }

  return (
    <div className={styles.container}>
      <Button
        styleType='outlined'
        className={styles.pageButton}
        onClick={handlePrevClick}
      >
        ◀
      </Button>
      {pageNumbers.slice(0, MAX_PAGES_TO_SHOW).map(pageNum => (
        <PageButton
          key={pageNum}
          pageNum={pageNum}
          currentPage={page}
          setCurrentPage={setPage}
          onChange={onChange}
        />
      ))}
      {totalPages - 1 > MAX_PAGES_TO_SHOW && <div>...</div>}
      {totalPages > MAX_PAGES_TO_SHOW && (
        <PageButton
          key={totalPages}
          pageNum={totalPages}
          currentPage={page}
          setCurrentPage={setPage}
          onChange={onChange}
        />
      )}
      <Button
        styleType='outlined'
        className={styles.pageButton}
        onClick={handleNextClick}
      >
        ▶
      </Button>
    </div>
  )
}
