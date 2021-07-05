import styled from "styled-components";
import Search from "../../../assets/header/search.svg";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const InputProductBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 66%;

  @media (max-width: 768px) {
    width: auto;
  }
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
    padding: 0;
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
  cursor: pointer;

  @media (max-width: 768px) {
    border-radius: 0;
    min-width: 200px;
    max-width: 200px;
  }
  @media (max-width: 480px) {
    min-width: 160px;
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
  cursor: pointer;
`;

export const Option = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 130px;
  width: 100%;
  height: 56px;
  padding-left: 15px;
  background: white;
  border-right: 1px solid #d3d3d3;
  border-radius: 6px 0 0 6px;
  box-sizing: border-box;
  z-index: 1;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  color: #31394d;
  cursor: pointer;

  @media (max-width: 768px) {
    min-width: 130px;
    max-width: 130px;
  }
  @media (max-width: 480px) {
    min-width: 70px;
  }
`;

export const Item = styled.span`
  display: block;
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

  @media (max-width: 480px) {
    min-width: 50px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  background: #fbe4e4;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
    border-radius: 0 8px 8px 0;
  }
`;

export const SvgSearch = styled.span`
  width: 24px;
  height: 24px;
  background-image: url(${Search});
  background-size: cover;
`;
