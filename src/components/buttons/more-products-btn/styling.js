import styled from "styled-components";

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  padding: 0 35px 0 35px;
  background-color: #31394d;
  border-radius: 8px;
  border: none;
  font-size: 12px;
  font-weight: bolder;
  line-height: 50px;
  letter-spacing: 0.5px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.5s;
  box-sizing: border-box;

  &: hover {
    background-color: #58627d;
    box-sizing: border-box;
  }
`;
