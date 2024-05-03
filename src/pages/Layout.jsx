import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import styles from "./Root.module.css";

export const Layout = () => {
  return (
    <>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};
