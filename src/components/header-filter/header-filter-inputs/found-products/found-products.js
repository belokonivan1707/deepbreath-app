import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { FoundProductsBox, FoundProducts, Li } from "./styling";

const FoundProductsWindow = ({ filteredProducts, option }) => {
  const product = useSelector((state) => state.productStore.products);
  const productsMakers = useSelector((state) => state.productMakersStore.makers);
  const history = useHistory();

  const openProductPage = (id) => {
    if (option === "Products") {
      const foundProduct = product?.find((el) => el.id === id);
      if (foundProduct) {
        history.push({
          pathname: `product/${id}`,
          state: foundProduct,
        });
      }
    }

    if (option === "Foodmakers") {
      const foundProduct = productsMakers?.find((el) => el.id === id);
      if (foundProduct) {
        history.push({
          pathname: `${foundProduct.title}`,
          state: foundProduct,
        });
      }
    }
  };

  return (
    <FoundProductsBox>
      <FoundProducts>
        {filteredProducts?.map((el) => (
          <div key={el.id}>
            <Li onClick={() => openProductPage(el.id)}>
              name: {el.title}, city: {el.city}
            </Li>
          </div>
        ))}
      </FoundProducts>
    </FoundProductsBox>
  );
};

export default FoundProductsWindow;
