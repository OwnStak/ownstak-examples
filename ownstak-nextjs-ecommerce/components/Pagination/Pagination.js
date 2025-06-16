import styles from './Pagination.module.css';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    if (currentPage > 1) pages.push('Prev');
    pages.push(1);
    if (currentPage > 3) pages.push('...');
    if (currentPage > 2) pages.push(currentPage - 1);
    if (currentPage !== 1 && currentPage !== totalPages) pages.push(currentPage);
    if (currentPage < totalPages - 1) pages.push(currentPage + 1);
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    if (currentPage < totalPages) pages.push('Next');
    return pages;
  };

  return (
    <div className={styles.pagination}>
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => {
            if (page === 'Prev') onPageChange(currentPage - 1);
            else if (page === 'Next') onPageChange(currentPage + 1);
            else if (typeof page === 'number') onPageChange(page);
          }}
          className={`${styles.paginationButton} ${page === currentPage ? styles.activePage : ''}`}
          disabled={page === '...' || page === currentPage}
        >
          {page}
        </button>
      ))}
    </div>
  );
} 