import { Box, InputProductBox, InputProduct, InputCityBox, InputCity, Label, Option, Button, BtnBox } from "./styling";

const HeaderFilterInputs = ({ handleChange, valueProduct, valueCity }) => {
  // console.log(value);

  return (
    <Box>
      <InputProductBox>
        <Label>What are you looking for? *</Label>
        <Box>
          <Option />
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
