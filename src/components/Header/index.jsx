import  { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";
import { NewsBlock } from "../NewsBlock";
import styles from "./header.module.css";

export const Header = () => {
  const [isAuth] = useContext(AuthContext);

  return (
    <div className={styles.wrapper}>
      {isAuth && (
        <NavLink
          activeClassName={styles.pickedlink}
          className={styles.nawlink}
          to="/myPage"
        >
          myPage
        </NavLink>
      )}

      <NavLink
        activeClassName={styles.pickedlink}
        className={styles.nawlink}
        to="/allPets"
      >
        pets
      </NavLink>

      <NavLink
        activeClassName={styles.pickedlink}
        className={styles.nawlink}
        to="/statistic"
      >
        statistic
      </NavLink>

      <div className={styles.grow}></div>

      {isAuth && <NewsBlock />}

      {!isAuth && (
        <NavLink
          activeClassName={styles.pickedlink}
          className={styles.nawlink}
          to="/signIn"
        >
          signIn
        </NavLink>
      )}
    </div>
  );
};
