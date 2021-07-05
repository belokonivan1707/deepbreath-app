import { useLocation } from "react-router-dom";

const FoodmakerPage = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>{state.title}</h1>
      <p>price: {state.price}</p>
      {state.businessTags.map((el) => (
        <span key={el}>{el}</span>
      ))}
    </div>
  );
};

export default FoodmakerPage;
