import ReactPaginate from 'react-paginate';

import styles from './PaginationBlock.module.scss';

export default function PaginationBlock({currentPage, setCurrentPage}) {
  const currentPageHandler = (event) => {
    setCurrentPage(event.selected + 1);
  }

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      nextLabel='>'
      onPageChange={currentPageHandler}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel='<'
      renderOnZeroPageCount={null}
    />
  );
}
