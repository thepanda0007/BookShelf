import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

const atfBooks = [
  {
    title: "The Da Vinci Code",
    image:
      "http://books.google.com/books/content?id=ivzfRJGrdFsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "The Hobbit",
    image:
      "http://books.google.com/books/content?id=akaTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    title: "Life Of Pi",
    image:
      "http://books.google.com/books/content?id=xQ6CjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    title: "The Alchemist",
    image:
      "http://books.google.com/books/content?id=FzVjBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "The Kite Runner",
    image:
      "http://books.google.com/books/content?id=KUMIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "The Great Gatsby",
    image:
      "http://books.google.com/books/content?id=Bx8rzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
];

function HomePageBook({ book }) {
  return (
    <div className={styles.book}>
      <div className={styles.imageWrapper}>
        <img src={book.image} />
      </div>
      <p className={styles.title}>{book.title}</p>
    </div>
  );
}

export default function HomePage({ myBooks }) {
  return (
    <div>
      <div className="heading">
        <h1>Home</h1>
      </div>
      <div className={styles.content}>
        <Link to="/search" className={styles.link}>
          <input
            type="text"
            className={styles.searchBar}
            placeholder="&#128269; Search"
          />
        </Link>
        <div className={styles.myBookSection}>
          <h3>My Books</h3>
          <Link to="/books" className={styles.seeAllLink}>
            <h4>See all</h4>
          </Link>
          {myBooks.length === 0 ? (
            <p className={styles.noBook}>Add some books to your collection</p>
          ) : (
            <div className={styles.myBooks}>
              <HomePageBook book={myBooks[0]} />
              {myBooks.length >= 2 && <HomePageBook book={myBooks[1]} />}
            </div>
          )}
        </div>
        <div className={styles.allTimeFavSection}>
          <h3>All Time Favourites</h3>
          <div className={styles.books}>
            {atfBooks.map((item) => (
              <HomePageBook book={item} key={item.title} />
            ))}
          </div>
        </div>
      </div>
      <PageNav />
    </div>
  );
}
