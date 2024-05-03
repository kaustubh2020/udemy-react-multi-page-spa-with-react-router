import { Link } from "react-router-dom";

const About = () => {
  const ITEMS = [
    { id: "item-1", title: "Item 1" },
    { id: "item-2", title: "Item 2" },
    { id: "item-3", title: "Item 3" },
  ];

  return (
    <>
      <h1>About</h1>
      <ul>
        {ITEMS.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default About;
