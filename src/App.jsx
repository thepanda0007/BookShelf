import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

export default function App() {
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("storedBooks"));
    if (storedBooks) {
      setMyBooks(storedBooks);
    }
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage myBooks={myBooks} />} />
          <Route
            path="search"
            element={<SearchPage myBooks={myBooks} setMyBooks={setMyBooks} />}
          />
          <Route
            path="books"
            element={<BooksPage myBooks={myBooks} setMyBooks={setMyBooks} />}
          />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
