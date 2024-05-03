import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Item Detail</h1>
      <h5>Selected ID: {params.itemId}</h5>
    </>
  );
};

export default ItemDetail;
