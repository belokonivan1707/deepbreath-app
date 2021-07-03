import {
  Box,
  InputProductBox,
  InputProduct,
  InputCityBox,
  InputCity,
  Label,
  Option,
  Button,
  BtnBox,
  Wrap,
  FoundProductsBox,
} from "./styling";

const HeaderFilterInputs = ({ handleChange, valueProduct, valueCity, filteredProducts, openProductPage }) => {
  return (
    <Box>
      <InputProductBox>
        <Label>What are you looking for? *</Label>
        <Box>
          <Option />
          {filteredProducts.length ? (
            <FoundProductsBox>
              <Wrap>
                {filteredProducts?.map((el) => (
                  <div key={el.id}>
                    <li onClick={() => openProductPage(el.id)}>{el.title}</li>
                  </div>
                ))}
              </Wrap>
            </FoundProductsBox>
          ) : null}

          <InputProduct
            type="text"
            name="product"
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
          value={valueCity}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </InputCityBox>
      <BtnBox>
        <Button>fuck</Button>
      </BtnBox>
    </Box>
  );
};

export default HeaderFilterInputs;
