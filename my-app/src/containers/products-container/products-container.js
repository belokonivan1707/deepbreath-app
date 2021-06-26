import { useSelector } from "react-redux";
import ProductCard from "../../components/cards/product-card/product-card";
import { Wrap, ProductsWrap, Title } from "./styling";

const ProductsContainer = () => {
  const products = useSelector((state) => state.productStore.products);
  return (
    <Wrap>
      <Title>
        <h1>Shop local makers</h1>
        <p>Looking for something unique? Discover and shop custom or limited products by your local makers.</p>
      </Title>

      <ProductsWrap>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsWrap>
    </Wrap>
  );
};

export default ProductsContainer;
