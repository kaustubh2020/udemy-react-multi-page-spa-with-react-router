import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>HOME</h1>
      Go to <Link to={"/about"}>About Page</Link>.
    </>
  );
};

export default Home;
