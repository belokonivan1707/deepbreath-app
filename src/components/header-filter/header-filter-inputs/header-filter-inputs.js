import { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Wrap,
  Box,
  InputProductBox,
  InputProduct,
  InputCityBox,
  InputCity,
  Label,
  Option,
  Button,
  BtnBox,
  SvgSearch,
  Item,
} from "./styling";

import OptionMenu from "../option-menu/option-menu";
import FoundProductsWindow from "./found-products/found-products";

const HeaderFilterInputs = ({ ...props }) => {
  const { handleChange, valueProduct, valueCity, filteredProducts, optionChanged, onClickOutside } = props;
  const [option, setOption] = useState("Products");
  const [hidderMenuOption, setHiddenMenuOption] = useState(null);
  const history = useHistory();

  const changeMenuOption = (option) => {
    setOption(option);
    setHiddenMenuOption(null);
    optionChanged(option);
  };

  const openProductExploreOrFoodmakersPage = (filteredProducts) => {
    if (option === "Products") {
      if (filteredProducts.length) {
        history.push({
          pathname: "/product_explore",
          state: filteredProducts,
        });
      }
    }

    if (option === "Foodmakers") {
      if (filteredProducts.length) {
        history.push({
          pathname: "/foodmakers_explore",
          state: filteredProducts,
        });
      }
    }
  };

  return (
    <Wrap>
      <InputProductBox>
        <Label>What are you looking for? *</Label>
        <Box>
          <Option onClick={() => setHiddenMenuOption(true)}>
            <Item>{option}</Item>
          </Option>
          {hidderMenuOption ? (
            <OptionMenu onClickOutside={() => setHiddenMenuOption(null)} handleClick={changeMenuOption} />
          ) : null}
          <FoundProductsWindow onClickOutside={onClickOutside} filteredProducts={filteredProducts} option={option} />
          <InputProduct
            type="text"
            name="product"
            placeholder="Find product"
            value={valueProduct}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </Box>
      </InputProductBox>
      <InputCityBox>
        <Label>City * </Label>
        <InputCity
          type="text"
          name="city"
          placeholder="Select city"
          value={valueCity}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </InputCityBox>
      <BtnBox>
        <Button onClick={() => openProductExploreOrFoodmakersPage(filteredProducts)}>
          <SvgSearch />
        </Button>
      </BtnBox>
    </Wrap>
  );
};

export default HeaderFilterInputs;
