import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputProduct = styled.input`
  position: relative;
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



export const InputProductBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 30px;
`;

export const InputCityBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-left: 30px;
`;

export const Option = styled.div`
  max-width: 150px;
  width: 100%;
  height: 56px;
  background: white;
  border-right: 1px solid black;
  border-radius: 6px 0 0 6px;
  box-sizing: border-box;
  z-index: 1;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #dcdde1;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: flex-end;
  width: 10%;
  height: 100%;
  margin-left: 30px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 56px;
  border-radius: 6px;
  border: none;
`;
