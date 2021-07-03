import { useLocation } from "react-router-dom";
import { Wrap } from "./styling";

const Productpage = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <Wrap>
      <div>
        <h1>Product Page</h1>
        <p>{state.id}</p>
        <p>{state.title}</p>
        <p>{state.price}</p>
        <p>{state.city}</p>
        <p>{state.rating}</p>
      </div>
    </Wrap>
  );
};

export default Productpage;
