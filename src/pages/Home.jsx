import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function useNavigateHandler() {
    navigate("/about");
  }

  return (
    <>
      <h1>HOME</h1>
      Go to <Link to={"/about"}>About Page</Link>.
      <p>
        <button onClick={useNavigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default Home;
