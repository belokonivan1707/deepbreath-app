import ProductsContainer from "../../containers/products-container/products-container";
import Dropdown from "../../components/dropdown/dropdown";
const Homepage = () => {
  return (
    <div>
      <ProductsContainer />

      <Dropdown />
    </div>
  );
};

export default Homepage;
