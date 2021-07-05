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
  FoundProducts,
  FoundProductsBox,
  SvgSearch,
  Item,
} from "./styling";

import OptionMenu from "../option-menu/option-menu";
import { useState } from "react";

const HeaderFilterInputs = ({ handleChange, valueProduct, valueCity, filteredProducts, openProductPage }) => {
  const [option, setOption] = useState("Products");
  const [hidderMenuOption, setHiddenMenuOption] = useState(null);

  const changeMenuOption = (option) => {
    setOption(option);
    setHiddenMenuOption(null);
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

          {filteredProducts.length ? (
            <FoundProductsBox>
              <FoundProducts>
                {filteredProducts?.map((el) => (
                  <div key={el.id}>
                    <li onClick={() => openProductPage(el.id)}>{el.title}</li>
                  </div>
                ))}
              </FoundProducts>
            </FoundProductsBox>
          ) : null}

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
        <Button>
          <SvgSearch />
        </Button>
      </BtnBox>
    </Wrap>
  );
};

export default HeaderFilterInputs;
