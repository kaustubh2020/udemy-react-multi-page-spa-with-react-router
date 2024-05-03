import MainNavigation from "../components/MainNavigation";

export const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <h5>Could not find this page.</h5>
      </main>
    </>
  );
};
