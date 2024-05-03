import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to={"/"}
              end
              className={(isActive) => (isActive ? styles.active : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={(isActive) => (isActive ? styles.active : undefined)}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
