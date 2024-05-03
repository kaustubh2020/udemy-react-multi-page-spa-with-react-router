import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export const Layout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
