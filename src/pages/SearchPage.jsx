import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./SearchPage.module.css";
import Loader from "../components/Loader";
import Book from "../components/Book";
import { Key } from "../apikey.jsx";

export default function SearchPage({ myBooks, setMyBooks }) {
  const [searched, setSearched] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [found, setFound] = useState(false);

  function findingBooks(e) {
    e.preventDefault();

    async function fetching() {
      try {
        let s = searched.trim();
        let query = s.replace(" ", "+");
        setIsLoading(true);

        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&printType=books&maxResults=20&langRestrict=en&key=${Key}`
        );
        const data = await response.json();
        const b = data.items;
        const bookArray = b.map((item) => ({
          id: item.id,
          title: item.volumeInfo?.title,
          authors: item.volumeInfo?.authors,
          image: item.volumeInfo.imageLinks?.thumbnail,
          pages: item.volumeInfo?.pageCount,
        }));

        setBooks(bookArray);

        setIsLoading(false);
        setFound(true);
        setSearched("");
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Loading done");
      }
    }
    fetching();
  }

  return (
    <div>
      <div className="heading">
        <h1>Search</h1>
      </div>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="&#128269; Find the Book"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
      />
      {searched !== "" && (
        <button className={styles.searchBtn} onClick={findingBooks}>
          Search
        </button>
      )}
      {isLoading && <Loader />}
      <div className={styles.books}>
        {found &&
          books.map((book) => (
            <Book
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
