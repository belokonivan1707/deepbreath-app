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
} from "./styling";

const HeaderFilterInputs = ({ handleChange, valueProduct, valueCity, filteredProducts, openProductPage }) => {
  return (
    <Wrap>
      <InputProductBox>
        <Label>What are you looking for? *</Label>
        <Box>
          <Option />

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
    </Wrap>
  );
};

export default HeaderFilterInputs;
