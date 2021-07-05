import { useLocation } from "react-router-dom";
import { ProductsWrap } from "../../containers/products-container/styling";
import MakersCard from "../../components/cards/makers-card/makers-card";

const FoodmakersExplorePage = () => {
  const { state } = useLocation();

  return (
    <div>
      <h1>food makers explore page</h1>
      <ProductsWrap>
        {state.map((maker) => (
          <MakersCard key={maker.id} maker={maker} />
        ))}
        {/* <Box>
          {state.length > makerCounter ? (
            <MoreProductsButton handleClick={LoadMoreMakersCards}>explore more</MoreProductsButton>
          ) : null}
        </Box> */}
      </ProductsWrap>
    </div>
  );
};

export default FoodmakersExplorePage;
