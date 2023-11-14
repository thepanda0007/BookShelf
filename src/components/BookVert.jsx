import styles from "./BookVert.module.css";
import { useEffect } from "react";

export default function BookVert({ book, myBooks, setMyBooks }) {
  function removeBook() {
    const arr = myBooks.filter((item) => {
      return book.id !== item.id;
    });
    setMyBooks(arr);
  }

  useEffect(() => {
    localStorage.setItem("storedBooks", JSON.stringify(myBooks));
  }, [myBooks]);

  return (
    <div className={styles.book}>
      <button className={styles.removeBtn} onClick={removeBook}>
        X
      </button>
      <div className={styles.imageContainer}>
        <img src={book.image} className={styles.image} />
      </div>
      <p className={styles.title}>{book.title}</p>
      <p className={styles.author}>{book.authors[0]}</p>
    </div>
  );
}
