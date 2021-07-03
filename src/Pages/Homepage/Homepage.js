import Header from "../../containers/header-container/header-container";
import HeaderFilter from "../../containers/header-filter-container/header-filter-container";
import ProductsContainer from "../../containers/products-container/products-container";
import Dropdown from "../../components/dropdown/dropdown";
import { Footer } from "../../components/footer/footer";

const Homepage = () => {
  return (
    <>
      <Header primary={false} />
      <HeaderFilter />
      <ProductsContainer />
      <Dropdown />
      <Footer />
    </>
  );
};

export default Homepage;
