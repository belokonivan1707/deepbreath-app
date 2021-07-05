import { useLocation } from "react-router-dom";
import { Wrap, ProductsWrap } from "../../containers/products-container/styling";
import ProductCard from "../../components/cards/product-card/product-card";

const ProductExplorePage = () => {
  const { state } = useLocation();



  if (state) {
    return (
      <Wrap>
        <h1>product explore page </h1>
        <ProductsWrap>
          {state.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* <Box>
          {state.length > productsCounter ? (
            <MoreProductsButton handleClick={LoadMoreProductsCards}>More Products Near You</MoreProductsButton>
          ) : null}
        </Box> */}
        </ProductsWrap>
      </Wrap>
    );
  }
};

export default ProductExplorePage;
