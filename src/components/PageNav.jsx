import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
export default function PageNav() {
  return (
    <div className={styles.bot}>
      <div className={styles.nav}>
        <NavLink to="/">
          <img src="/home.png" height="50px" width="50px" />
        </NavLink>

        <NavLink to="/search">
          <img src="/search.png" height="50px" width="50px" />
        </NavLink>

        <NavLink to="/books">
          <img src="/book.png" height="50px" width="50px" />
        </NavLink>

        <NavLink to="/profile">
          <img src="/profile.png" height="50px" width="50px" />
        </NavLink>
      </div>
    </div>
  );
}
