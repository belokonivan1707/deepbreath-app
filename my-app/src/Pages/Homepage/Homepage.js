import Header from "../../containers/header-container/header-container";
import HeaderFilterContainer from "../../containers/header-filter-container/header-filter-container";
import ProductsContainer from "../../containers/products-container/products-container";
// import Dropdown from "../../components/dropdown/dropdown";

const Homepage = () => {
  return (
    <>
      <Header primary={false} />
      <HeaderFilterContainer />
      <ProductsContainer />
      {/* <Dropdown /> */}
    </>
  );
};

export default Homepage;
