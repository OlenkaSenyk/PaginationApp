import styles from "@/styles/Home.module.css";
import {useState} from "react";
import sliceData, {Pagination} from "@/components/pagination";

export const Cards = ({ phones }) => {
  const [page, setPage] = useState(1)
  const perPage = 5
  const changePage = (p) => setPage(p)
  const slice = sliceData(phones, page, perPage)

  return (
    <main className={styles.content}>
      {
        slice.map(p => {
          return (
            <div className={styles.content__card}>
              <h2 className={styles.content__card__title}>{p.name}</h2>
              <p>Brand: {p.brand}</p>
              <p>Price: {p.price}$</p>
              <p>Artnumber: {p.artnumber}</p>
            </div>
          )
        })
      }

      <Pagination arrLength={ phones.length } perPage={ perPage }
                  page={ page } changePage={ changePage }/>
    </main>
  );
}
