import { Box, InputProductBox, InputProduct, InputCityBox, InputCity, Label, Option, Button, BtnBox } from "./styling";

const HeaderFilterInputs = ({ handleChange, value }) => {

  return (
    <Box>
      <InputProductBox>
        <Label>What are you looking for? *</Label>
        <Box>
          <Option />
          <InputProduct
            type="text"
            name="product"
            value={value.product}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </Box>
      </InputProductBox>
      <InputCityBox>
        <Label>City * </Label>
        <InputCity
          type="text"
          name="city"
          value={value.city}
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
