import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./Paginator.module.css";
let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <Button
          className="me-2"
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </Button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={currentPage === p && styles.selectedPage}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              <span className={styles.pageNumber}>{p}</span>
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <Button
          className="ms-2"
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </Button>
      )}
    </div>
  );
};

export default Paginator;
