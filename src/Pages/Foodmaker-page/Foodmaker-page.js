import { useLocation } from "react-router-dom";

const FoodmakerPage = () => {
  const { state } = useLocation();

  if (state) {
    return (
      <div>
        <h1>{state.title}</h1>
        <p>price: {state.price}</p>
        {/* {state.businessTags.map((el) => (
            <span key={el}>{el}</span>
          ))} */}
      </div>
    );
  }

  if (!state) {
    return <h1> something was wrong, please comeback to </h1>;
  }
};

export default FoodmakerPage;
