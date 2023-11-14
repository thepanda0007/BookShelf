import BookVert from "../components/BookVert";
import PageNav from "../components/PageNav";
import styles from "./BooksPage.module.css";

export default function BooksPage({ myBooks, setMyBooks }) {
  return (
    <div>
      <div className="heading">
        <h1>My Books</h1>
      </div>
      <div className={styles.allBooks}>
        {myBooks.map((book) => (
          <BookVert
            book={book}
            key={book.id}
            myBooks={myBooks}
            setMyBooks={setMyBooks}
          />
        ))}
      </div>
      <PageNav />
    </div>
  );
}
