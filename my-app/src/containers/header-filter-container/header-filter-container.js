import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { MainWrap, MainContainer, Wrap, Box, Title, Descroption, Red, FoundProductsBox } from "./styling";
import HeaderFilterInputs from "../../components/header-filter/header-filter-inputs/header-filter-inputs";

const HeaderFilterContainer = () => {
  const products = useSelector((state) => state.productStore.products);
  const [copyProductsFromRedux, setCopyProductsFromRedux] = useState([]);

  const [inputsValues, setInputsValues] = useState([{ product: "", city: "" }]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const history = useHistory();

  useEffect(() => {
    setCopyProductsFromRedux(products);
  }, [products]);

  const setInputState = (property, value) => {
    setInputsValues({ ...inputsValues, [property]: value });
  };

  useEffect(() => {
    if (!inputsValues.product || !inputsValues.city) {
      setFilteredProducts([]);
    }

    if (inputsValues.product) {
      setFilteredProducts(
        copyProductsFromRedux.filter((el) =>
          el.title.toLocaleLowerCase().includes(inputsValues.product.toLocaleLowerCase())
        )
      );
    }
  }, [inputsValues, copyProductsFromRedux]);

  const openProductPageWithFoundProduct = (id) => {
    const product = copyProductsFromRedux?.find((el) => el.id === id);

    history.push({
      pathname: `product/${id}`,
      state: product,
    });
  };

  return (
    <MainWrap>
      <MainContainer>
        <Wrap>
          <Box>
            <Title>
              Connecting curious <Red>Food Lovers</Red>
            </Title>
            <Descroption>to a global marketplace of local and dedicated food makers</Descroption>
          </Box>
          <HeaderFilterInputs handleChange={setInputState} value={inputsValues} />
          <FoundProductsBox>
            {filteredProducts?.map((el) => (
              <li key={el.id} onClick={() => openProductPageWithFoundProduct(el.id)}>
                {el.title}
              </li>
            ))}
          </FoundProductsBox>
        </Wrap>
      </MainContainer>
    </MainWrap>
  );
};

export default HeaderFilterContainer;
