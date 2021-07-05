import styled from "styled-components";

export const FoundProductsBox = styled.div`
  display: flex;
  position: absolute;
  top: 90px;
  left: 17%;
  max-width: 650px;
  width: calc(80% + 4px);
  background: white;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  z-index: 1;

  @media (max-width: 1124px) {
    width: 76%;
    left: 21%;
  }
  @media (max-width: 1046px) {
    width: 74%;
    left: 23%;
  }
  @media (max-width: 980px) {
    width: 73%;
    left: 24%;
  }
  @media (max-width: 960px) {
    width: 70%;
    left: 26%;
  }
  @media (max-width: 850px) {
    width: 66%;
    left: 30%;
  }
  @media (max-width: 768px) {
    left: 105px;
    top: 70px;
    min-height: 50px;
    max-height: 150px;
    border-radius: 0 0 8px 8px;
  }
  @media (max-width: 480px) {
    left: 62px;
    min-width: 43%;
  }
`;

export const Wrap = styled.div`
  max-width: 650px;
  width: 100%;
  padding: 10px 15px 10px 15px;

  @media (max-width: 768px) {
    min-height: 50px;
    max-height: 150px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export const Option = styled.div`
  position: relative;
  max-width: 130px;
  width: 100%;
  height: 56px;
  background: white;
  border-right: 1px solid #d3d3d3;
  border-radius: 6px 0 0 6px;
  box-sizing: border-box;
  z-index: 1;

  @media (max-width: 768px) {
    min-width: 130px;
    max-width: 130px;
  }
  @media (max-width: 480px) {
    min-width: 43%;
  }
`;

export const InputProductBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 66%;
  margin-left: 30px;
`;

export const InputCityBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 160px;
  margin-left: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Label = styled.label`
  min-width: 200px;
  margin-bottom: 5px;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #dcdde1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputProduct = styled.input`
  max-width: 650px;
  width: 100%;
  height: 56px;
  padding: 0 15px;
  border: none;
  border-radius: 0 6px 6px 0;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  color: #31394d;
  box-sizing: border-box;

  @media (max-width: 768px) {
    border-radius: 0;
    min-width: 200px;
    max-width: 200px;
  }
  @media (max-width: 480px) {
    min-width: 80%;
  }

`;

export const InputCity = styled.input`
  max-width: 235px;
  width: 100%;
  height: 56px;
  padding: 0 15px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  color: #31394d;
  box-sizing: border-box;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: flex-end;
  width: 6%;
  min-width: 72px;
  height: 100%;
  margin-left: 30px;

  @media (max-width: 768px) {
    max-width: 70px;
    margin-left: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 56px;
  background: #fbe4e4;
  border-radius: 6px;
  border: none;

  @media (max-width: 768px) {
    border-radius: 0 8px 8px 0;
  }
`;
