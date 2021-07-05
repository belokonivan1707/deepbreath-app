import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { MainWrap, MainContainer, Wrap, Box, Title, Description, Red } from "./styling";
import HeaderFilterInputs from "../../components/header-filter/header-filter-inputs/header-filter-inputs";

const HeaderFilter = () => {
  // const [inputsValues, setInputsValues] = useState([{ product: "", city: "" }]);
  const [inputCity, setInputCity] = useState("");
  const [inputProduct, setInputProducts] = useState("");
  const [copyProductsFromRedux, setCopyProductsFromRedux] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.productStore.products);

  const history = useHistory(); 

  useEffect(() => {
    setCopyProductsFromRedux(products);
  }, [products]);

  const setInputState = (name, value) => {
    if (name === "product") {
      setInputProducts(value);
    }

    if (name === "city") {
      setInputCity(value);
    }

    // setInputsValues({ ...inputsValues, [property]: value });
  };

  useEffect(() => {
    if (!inputCity && !inputProduct) {
      setFilteredProducts([]);
    }

    if (inputProduct && inputCity) {
      const test = () => {
        let result = copyProductsFromRedux.filter((el) =>
          el.title.toLocaleLowerCase().includes(inputProduct.toLocaleLowerCase())
        );
        const second = result.filter((el) => el.city.toLocaleLowerCase().includes(inputCity.toLocaleLowerCase()));
        return second;
      };

      setFilteredProducts(test());
    }

    if (inputProduct !== "" && inputCity === "") {
      console.log("product");
      setFilteredProducts(
        copyProductsFromRedux.filter((el) => el.title.toLocaleLowerCase().includes(inputProduct.toLocaleLowerCase()))
      );
    }

    if (inputCity !== "" && inputProduct === "") {
      console.log("city");
      setFilteredProducts(
        copyProductsFromRedux.filter((el) => el.city.toLocaleLowerCase().includes(inputCity.toLocaleLowerCase()))
      );
    }
  }, [inputProduct, inputCity, copyProductsFromRedux]);

  const openProductPage = (id) => {
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
            <Description>to a global marketplace of local and dedicated food makers</Description>
          </Box>
          <HeaderFilterInputs
            handleChange={setInputState}
            valueProduct={inputProduct}
            valueCity={inputCity}
            filteredProducts={filteredProducts}
            openProductPage={openProductPage}
          />
        </Wrap>
      </MainContainer>
    </MainWrap>
  );
};

export default HeaderFilter;
