import styles from "@/styles/Home.module.css";

export default function paginate (items, page, perPage) {
  const start_i = (page - 1) * perPage;
  return items.slice(start_i, start_i + perPage);
};

export const Pagination = ({ arrLength, perPage, page, changePage}) => {
  const start_i = (page - 1) * perPage
  const end_i = start_i + perPage
  const lastPage = Math.ceil(arrLength / perPage)

  return (
    <div>
      <button className={styles.pagination__btn} onClick={() => changePage(1)}
              disabled={page === 1}>&lt;&lt;</button>
      <button className={styles.pagination__btn} onClick={() => changePage(page - 1)}
              disabled={page === 1}>&lt;</button>
      <span className={styles.pagination__count}>{page} of {lastPage}</span>
      <button className={styles.pagination__btn} onClick={() => changePage(page + 1)}
              disabled={page === lastPage}>&gt;</button>
      <button className={styles.pagination__btn} onClick={() => changePage(lastPage)}
              disabled={page === lastPage}>&gt;&gt;</button>

      <span className={styles.pagination__count}>{start_i + 1}-{end_i} of {arrLength}</span>
    </div>
  )
}