import { useEffect } from "react";
import styles from "./Book.module.css";

export default function Book({ book, myBooks, setMyBooks }) {
  const isBookPresent = myBooks.some((obj) => obj.id === book.id);

  useEffect(() => {
    localStorage.setItem("storedBooks", JSON.stringify(myBooks));
  }, [myBooks]);

  function addBook() {
    if (isBookPresent) {
      alert("Already Added");
    } else {
      const arr = [...myBooks, book];
      setMyBooks(arr);
    }
  }

  if (
    book.title != undefined &&
    book.title.length < 80 &&
    book.authors !== undefined &&
    book.image !== "" &&
    book.pages !== 0 &&
    book.pages !== undefined
  ) {
    return (
      <div className={styles.book}>
        <img src={book.image} className={styles.image} />
        <div className={styles.content}>
          <p className={styles.title}>{book.title}</p>
          <i>
            <p className={styles.author}>
              {book.authors[0]} <br />
              {book?.authors[1]}
            </p>
          </i>
          <p className={styles.pages}>{book.pages} Pages</p>
          {isBookPresent ? (
            <button className={styles.addedBtn}>Added</button>
          ) : (
            <button className={styles.addBtn} onClick={addBook}>
              Add
            </button>
          )}
        </div>
      </div>
    );
  }
}
