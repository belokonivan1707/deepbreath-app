import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionChangeIsLikedProperty } from "../../store/products/actions";
import { actionChangeIsLikedPropertyOnMakers } from "../../store/products-maker/actions";
import { Wrap, ProductsWrap, Title, Box } from "./styling";
import ProductCard from "../../components/cards/product-card/product-card";
import Dropdown from "../../components/dropdown/dropdown";
import MoreProductsButton from "../../components/buttons/more-products-btn/more-products-btn";
import MakersCard from "../../components/cards/makers-card/makers-card";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const [productsCounter, setProductsCounter] = useState(6);
  const [makerCounter, setMakerCounter] = useState(2);
  const products = useSelector((state) => state.productStore.products);
  const makers = useSelector((state) => state.productMakersStore.makers);

  const LoadMoreProductsCards = () => {
    setProductsCounter(productsCounter + 6);
  };

  const LoadMoreMakersCards = () => {
    setMakerCounter(makerCounter + 2);
  };

  const changeIsLikedProperty = (id) => {
    dispatch(actionChangeIsLikedProperty(id));
  };

  const changeIsLikedPropertyForMakers = (id) => {
    dispatch(actionChangeIsLikedPropertyOnMakers(id));
  };

  return (
    <Wrap>
      <Title>
        <h1>Shop local makers</h1>
        <p>Looking for something unique? Discover and shop custom or limited products by your local makers.</p>
      </Title>
      <ProductsWrap>
        {products.slice(0, productsCounter).map((product) => (
          <ProductCard handleClick={changeIsLikedProperty} key={product.id} product={product} />
        ))}
        <Box>
          {products.length > productsCounter ? (
            <MoreProductsButton handleClick={LoadMoreProductsCards}>More Products Near You</MoreProductsButton>
          ) : null}
        </Box>
      </ProductsWrap>
      <Title>
        <h1>Shop local experiences</h1>
        <p>Got a party to plan? Make a group booking for a masterclass` or a winery, brewery or distillery tour.</p>
      </Title>
      <ProductsWrap>
        {makers.slice(0, makerCounter).map((maker) => (
          <MakersCard handleClick={changeIsLikedPropertyForMakers} key={maker.id} maker={maker} />
        ))}
        <Box>
          {makers.length > makerCounter ? (
            <MoreProductsButton handleClick={LoadMoreMakersCards}>explore more</MoreProductsButton>
          ) : null}
        </Box>
      </ProductsWrap>

      <Dropdown />
    </Wrap>
  );
};

export default ProductsContainer;
