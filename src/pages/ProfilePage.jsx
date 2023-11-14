import PageNav from "../components/PageNav";
import styles from "./ProfilePage.module.css";
export default function ProfilePage() {
  return (
    <div>
      <div className="heading">
        <h1>My Profile</h1>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.loginBtn}>Login</button>
      </div>
      <p className={styles.message}>Login Page is not yet available.</p>
      <PageNav />
    </div>
  );
}
